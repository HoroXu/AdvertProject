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

  useEffect(() => {
    showReadRoom();
  }, []);

  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("main"));
    // 指定图表的配置项和数据
    var option = {
      // title: {
      //   text: "阅览室使用情况",
      //   left: 10,
      //   top: 0,
      //   textStyle: {
      //     color: "rgba(50,207,255,1)",
      //     fontSize: 24
      //   }
      // },
      color: ["#32CFFF", "#2f4554"],
      tooltip: {},
      // legend: {
      //   data: ["已使用", "剩余"],
      //   align: "right",
      //   right: 10,
      //   top: 10,
      //   itemWidth: 14,
      //   itemHeight: 14,
      //   borderRadius: 14,
      //   icon: "circle",
      //   textStyle: {
      //     borderColor: "rgba(50,207,255,0.4)",
      //     color: "rgba(50,207,255,1)"
      //   }
      // },
      xAxis: {
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
          name: "已使用",
          type: "bar",
          stack: "总量",
          itemStyle: {
            normal: {
              color: "#42F09D",
              // barBorderRadius: [12, 12, 0, 0],
              borderColor: "rgba(51, 185, 146, 1)",
              borderWidth: 1
            }
          },
          label: {
            normal: {
              show: true,
              position: [3, -15],
              color: "rgba(50, 207, 255, 1)"
            }
          },
          data: totalData
        },
        {
          name: "剩余",
          type: "bar",
          stack: "总量",
          barWidth: 20,
          label: {
            normal: {
              show: true,
              position: [3, -15],
              color: "rgba(50,207,255,1)"
            }
          },
          itemStyle: {
            normal: {
              color: "rgba(8,42,76,1)",
              barBorderRadius: [12, 12, 0, 0],
              borderColor: "rgba(31,136,179,1)",
              borderWidth: 1
            }
          },
          data: usedData
        }
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }, [titleData, totalData, usedData]);
  return (
    <div className="line-charts-area">
      <div className="left-title">阅览室使用情况</div>
      <div className="right-title">
        <span className=" cicle cicle-done"></span>
        <span className="text done">已使用</span>
        <span className="cicle cicle-unused"></span>
        <span className="text unused">剩余</span>
      </div>
      <div id="main"></div>
    </div>
  );
};

export default LineCharts;
