import React, { Component, useState, useEffect } from "react";
import echarts from "echarts";
import "./index.less";
import AxiosData from "@/utils/axios";
import Language from "../../assets/images/language.png";
import Rate from "../../assets/images/rate.png";
import Book from "../../assets/images/book.png";
import moment from "moment";

const PieCharts = () => {
  const [countAll, setCountAll] = useState(0);
  const [countBook, setCountBook] = useState(0);
  const [countLiterature, setCountLiterature] = useState(0);

  const [pcdlrsl, setPcdlrsl] = useState("");
  const [pcxzrs, setPcxzrs] = useState("");
  const [pczcrsl, setPczcrsl] = useState("");
  const [appdlrsl, setAppdlrsl] = useState("");
  const [appxzrs, setAppxzrs] = useState("");
  const [appzcrsl, setAppzcrsl] = useState("");

  const [hylwl, setHylwl] = useState("");
  const [qkl, setQkl] = useState("");
  const [tsl, setTsl] = useState("");
  const [xslwl, setXslwl] = useState("");
  const [zll, setZll] = useState("");

  const [literatureDetail, setLiteratureDetail] = useState([]);

  const [itemName, setItemName] = useState([]);

  const judgeColor = item => {
    switch (item) {
      case "图书":
        return { color: "rgba(51, 185, 146, 1)" };
        break;
      case "期刊":
        return { color: "rgba(7, 112, 211, 1)" };
        break;
      case "会员论文":
        return { color: "rgba(168, 116, 28, 1)" };
        break;
      case "学位论文":
        return { color: "rgba(166, 12, 180, 1)" };
        break;
      case "专利":
        return { color: "rgba(180, 160, 12, 1)" };
        break;
    }
  };
  const showReadRoom = () => {
    AxiosData.get("showLiterature.htm")
      .then(res => {
        const {
          appdlrsl,
          appxzrs,
          appzcrsl,
          hylwl,
          id,
          pcdlrsl,
          pcxzrs,
          pczcrsl,
          qkl,
          qtcdl,
          tscdl,
          tsl,
          xslwl,
          zcdl,
          zll
        } = res;
        setCountAll(zcdl); //总传递量
        setCountBook(tscdl); //图书传递量
        setCountLiterature(qtcdl); //其他文献传递量
        setPcdlrsl(pcdlrsl); //pc登录人数
        setPcxzrs(pcxzrs); //下载人数
        setPczcrsl(pczcrsl); //注册人数
        setAppdlrsl(appdlrsl); //登录人数
        setAppxzrs(appxzrs); //下载人数
        setAppzcrsl(appzcrsl); //注册人数

        setHylwl(hylwl); //会员论文量
        setQkl(qkl); //期刊量
        setTsl(tsl); //图书量
        setXslwl(xslwl); //学术论文量
        setZll(zll); //专利量

        let arr1 = [
          {
            value: tsl,
            name: "图书量",
            itemStyle: { color: "rgba(51, 185, 146, 1)" }
          },
          {
            value: qkl,
            name: "期刊",
            itemStyle: { color: "rgba(7, 112, 211, 1)" }
          },
          {
            value: hylwl,
            name: "会员论文",
            itemStyle: { color: "rgba(168, 116, 28, 1)" }
          },
          {
            value: xslwl,
            name: "学术论文量",
            itemStyle: { color: "rgba(166, 12, 180, 1)" }
          },
          {
            value: zll,
            name: "专利量",
            itemStyle: { color: "rgba(180, 160, 12, 1)" }
          }
        ];
        let arr2 = ["图书量", "期刊", "会员论文", "学术论文量", "专利量"];

        // for (let val of month.literatureDetail) {
        //   arr1.push({
        //     value: val.total,
        //     name: val.name,
        //     itemStyle: judgeColor(val.name)
        //   });
        //   arr2.push(val.name);
        // }
        setLiteratureDetail(arr1);
        setItemName(arr2);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    showReadRoom();
  }, []);

  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("pieArea"));
    // 指定图表的配置项和数据
    var option = {
      tooltip: {
        trigger: "item",
        formatter: "{b}: {c}"
      },
      legend: {
        orient: "horizontal",
        bottom: 15,
        data: itemName,
        itemWidth: 14,
        itemHeight: 14,
        borderRadius: 14,
        icon: "circle",
        textStyle: {
          color: "rgba(50,207,255,1)"
        }
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: ["70%", "80%"],
          center: ["50%", "40%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: literatureDetail
        }
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }, [itemName, literatureDetail]);
  return (
    <div className="pie-charts-area">
      <div className="pie-charts-title">文献传递量</div>
      <div className="pie-charts-content">
        <div className="num-content">
          <div className="month-num-area">
            <div className="num-title">
              {moment().month() + 1}月份文献传递量
            </div>
            <div className="month-num">
              <div className="single-num">
                <div className="num">{countAll.toLocaleString()}</div>
                <div className="text">总传递量</div>
              </div>
              <div className="single-num">
                <div className="num">{countBook.toLocaleString()}</div>
                <div className="text">图书传递量</div>
              </div>
              <div className="single-num">
                <div className="num">{countLiterature.toLocaleString()}</div>
                <div className="text">其他文献传递量</div>
              </div>
            </div>
          </div>

          <div className="year-num-area">
            <div className="num-title">本年文献传递量</div>
            <div className="year-num">
              <div className="single-num">
                <img src={Language} />
                <div className="text">终端</div>
              </div>
              <div className="single-num">
                <img src={Book} />
                <div className="text">登录次数</div>
              </div>

              <div className="single-num">
                <img src={Rate} />
                <div className="text">注册人数</div>
              </div>
            </div>
          </div>

          <div className="table-num">
            {/* {year.map((item, index) => {
              return ( */}
            <div className="table-single">
              <span className="text-single">PC</span>
              <span className="text-single">{pcdlrsl.toLocaleString()}</span>
              <span className="text-single">{pcxzrs.toLocaleString()}</span>
            </div>
            <div className="table-single">
              <span className="text-single">APP</span>
              <span className="text-single">{appdlrsl.toLocaleString()}</span>
              <span className="text-single">{appxzrs.toLocaleString()}</span>
            </div>
            // ); })}
          </div>
        </div>

        <div id="pieArea" className="pie-area"></div>

        <div className="pie-title">{moment().month() + 1}月份文献传递量</div>
        <div className="pie-center">
          <div className="center-num">{countAll.toLocaleString()}</div>
          <div className="center-text">
            {moment().month() + 1}月份文献传递量
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieCharts;
