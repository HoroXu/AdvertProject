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
  const [year, setYear] = useState([]);
  const [literatureDetail, setLiteratureDetail] = useState([]);

  const [itemName, setItemName] = useState([]);

  const judgeColor = item => {
    switch (item) {
      case "图书":
        return { color: "#42f09d" };
        break;
      case "期刊":
        return { color: "#9950AEFF" };
        break;
      case "会员论文":
        return { color: "#99DDD774" };
        break;
      case "学位论文":
        return { color: "#99B7B4FF" };
        break;
      case "专利":
        return { color: "#99FFAD94" };
        break;
    }
  };
  const showReadRoom = () => {
    AxiosData.get("showLiterature.htm")
      .then(res => {
        const { month, year } = res;
        setCountAll(month.countAllThroughput);
        setCountBook(month.countBookThroughput);
        setCountLiterature(month.countLiteratureThroughput);
        setYear(year);
        let arr1 = [];
        let arr2 = [];
        for (let val of month.literatureDetail) {
          arr1.push({
            value: val.total,
            name: val.name,
            itemStyle: judgeColor(val.name)
          });
          arr2.push(val.name);
        }
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
        icon: "circle"
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
            <div className="num-title">{moment().month()}月份文献传递量</div>
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
                <div className="text">语言</div>
              </div>
              <div className="single-num">
                <img src={Book} />
                <div className="text">期刊传递量</div>
              </div>

              <div className="single-num">
                <img src={Rate} />
                <div className="text">成功率</div>
              </div>
            </div>
          </div>

          <div className="table-num">
            {year.map((item, index) => {
              return (
                <div className="table-single">
                  <span className="text-single">{item.labelName}</span>
                  <span className="text-single">
                    {item.countBookThroughput.toLocaleString()}
                  </span>
                  <span className="text-single">{item.successRate}%</span>
                </div>
              );
            })}
          </div>
        </div>

        <div id="pieArea" className="pie-area"></div>

        <div className="pie-title">{moment().month()}月份文献传递量</div>
        <div className="pie-center">
          <div className="center-num">6604</div>
          <div className="center-text">{moment().month()}月份文献传递量</div>
        </div>
      </div>
    </div>
  );
};

export default PieCharts;
