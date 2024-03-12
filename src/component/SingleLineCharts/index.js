import React, { Component, useState, useEffect } from "react";
import echarts from "echarts";
import moment from "moment";
import AxiosData from "@/utils/axios";
import "./index.less";

const SingleLineCharts = () => {
  const [titleData, setTitleData] = useState([]);
  const [sciTotal, setSciTotal] = useState([]);
  const [coreTotal, setCoreTotal] = useState([]);
  const [allTotal, setAllTotal] = useState([]);
  const showDispatch = () => {
    AxiosData.get("showDispatch.htm")
      .then(res => {
        let arr1 = [];
        let arr2 = [];
        let arr3 = [];
        let arr4 = [];
        for (let val of res) {
          console.log(res, "val=======");
          arr1.push({
            value: `${val.labelName.slice(0, 4)}\n${val.labelName.slice(3, 6)}`,
            textStyle: {
              color: "rgba(50,207,255,1)"
            }
          });
          arr2.push(val.sciTotal);
          arr3.push(val.coreTotal);
          arr4.push(val.allTotal);
        }

        setTitleData(arr1);
        setSciTotal(arr2);
        setCoreTotal(arr3);
        setAllTotal(arr4);
      })

      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    showDispatch();
  }, []);

  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("singleLineCharts"));

    // 指定图表的配置项和数据
    var option = {
      title: {
        show: false
      },
      legend: {
        data: titleData
      },
      tooltip: { trigger: "axis", axisPointer: { type: "none" } },
      xAxis: {
        type: "category",
        data: titleData,
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        //   axisLabel: {
        //     interval:0,
        //     rotate:40
        //  }  ,

        nameTextStyle: {
          color: "rgba(50,207,255,1)",
          fontSize: 14,
          width: 20
        }
      },
      yAxis: {
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        }
      },
      series: [
        {
          name: "SCI发文量",
          type: "bar",
          itemStyle: {
            normal: {
              color: "rgba(51, 185, 146, 1)"
            }
          },
          data: sciTotal
        },
        {
          type: "bar",
          name: "核心期刊发文量",
          itemStyle: {
            normal: {
              color: "rgba(180, 160, 12, 1)"
            }
          },
          data: coreTotal
        },
        {
          type: "bar",
          name: "发文总数",
          itemStyle: {
            normal: {
              color: "rgba(7, 112, 211, 1)"
            }
          },
          elmphasis: { barWidth: 5 },
          data: allTotal
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    tools.loopShowTooltip(myChart, option, { loopSeries: true });
  }, [titleData.length, sciTotal, coreTotal, allTotal]);
  return (
    <div className="single-line-charts-area">
      <div className="left-title">科室文献发文统计(季度)</div>
      {/* <div className="right-title">
        <span>云平台使用情况</span>
      </div> */}
      <div className="circle-area">
        <span className=" cicle cicle1"></span>
        <span className="text done">SCI</span>
        <span className="cicle cicle2"></span>
        <span className="text unused">核心期刊</span>
        <span className="cicle cicle3"></span>
        <span className="text unused">发文总数</span>
      </div>
      <div id="singleLineCharts"></div>
    </div>
  );
};

export default SingleLineCharts;
