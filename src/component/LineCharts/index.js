import React, { Component, useState, useEffect } from "react";
import echarts from "echarts";
import AxiosData from "@/utils/axios";
import "./index.less";

const LineCharts = () => {
  const [titleData, setTitleData] = useState([]);
  const [totalData, setTotalData] = useState([]);
  const [usedData, setUsedData] = useState([]);
  const showReadRoom = () => {
    AxiosData.get("showReadRoom.htm")
      .then(res => {
        let arr1 = [];
        let arr2 = [];
        let arr3 = [];
        for (let val of res) {
          console.log(val, "val=======");
          arr1.push({
            value: val.name,
            textStyle: {
              color: "rgba(50,207,255,1)"
            }
          });
          arr2.push(val.total);
          arr3.push(val.total - val.useed);
        }
        setTitleData(arr1);
        setTotalData(arr2);
        setUsedData(arr3);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   showReadRoom();
  // }, []);

  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("main"));
    // 指定图表的配置项和数据
    var option = {
      // legend: {
      //   data: ["点击量", "下载量"]
      // },
      title: {
        show: false
      },
      tooltip: {},
      xAxis: {
        type: "category",
        data: [
          {
            value: "知网",
            textStyle: {
              color: "rgba(50,207,255,1)"
            }
          },
          {
            value: "万方",
            textStyle: {
              color: "rgba(50,207,255,1)"
            }
          },
          {
            value: "PubMed",
            textStyle: {
              color: "rgba(50,207,255,1)"
            }
          },
          {
            value: "维普",
            textStyle: {
              color: "rgba(50,207,255,1)"
            }
          },
          {
            value: "Walnut Brownie",
            textStyle: {
              color: "rgba(50,207,255,1)"
            }
          }
        ],

        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        // axisLabel: {
        //   show: false
        // },

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
          name: "点击量",
          type: "bar",
          itemStyle: {
            normal: {
              color: "rgba(51, 185, 146, 1)"
            }
          },
          data: [320, 332, 301, 334, 390]
        },
        {
          type: "bar",
          name: "下载量",
          itemStyle: {
            normal: {
              color: "rgba(7, 112, 211, 1)"
            }
          },
          data: [320, 332, 301, 334, 390]
        }
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }, []);
  return (
    <div className="line-charts-area">
      <div className="left-title">阅览室使用情况</div>
      <div className="right-title">
        <span className=" cicle cicle-done"></span>
        <span className="text done">点击量</span>
        <span className="cicle cicle-unused"></span>
        <span className="text unused">下载量</span>
      </div>
      <div id="main"></div>
    </div>
  );
};

export default LineCharts;
