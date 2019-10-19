import React, { Component, useState, useEffect } from "react";
import echarts from "echarts";
import "./index.less";

const LineCharts = () => {
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("main"));

    // 指定图表的配置项和数据
    var option = {
      title: {
        text: "阅览室使用情况",
        left: 10,
        top: 10,
        textStyle: {
          color: "rgba(50,207,255,1)",
          fontSize: 24
        }
      },
      color: ["#32CFFF", "#2f4554"],
      tooltip: {},
      legend: {
        data: ["已使用", "剩余"],
        align: "right",
        right: 10,
        top: 10,
        itemWidth: 14,
        itemHeight: 14,
        borderRadius: 14,
        
        icon: "circle",
        textStyle: {
          borderColor: "rgba(50,207,255,0.4)",
          color: "rgba(50,207,255,1)"
        }
      },
      xAxis: {
        data: [
          {
            value: "五菱多媒体\n阅览室",
            textStyle: {
              color: "rgba(50,207,255,1)"
            }
          },
          {
            value: "五菱多媒体\n阅览室",
            textStyle: {
              color: "rgba(50,207,255,1)"
            }
          },
          {
            value: "五菱多媒体\n阅览室",
            textStyle: {
              color: "rgba(50,207,255,1)"
            }
          },
          {
            value: "五菱多媒体\n阅览室",
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
          name: "已使用",
          type: "bar",
          stack: "总量",
          itemStyle: {
            normal: {
              color: "#42F09D",
              // barBorderRadius: [12, 12, 0, 0],
              borderColor: "rgba(50,207,255,0.4)",
              borderWidth: 1
            }
          },
          label: {
            normal: {
              show: true,
              position: [0, -15],
              color:'rgba(50,207,255,1)'
            }
          },
          data: [320, 302, 301, 334, 390]
        },
        {
          name: "剩余",
          type: "bar",
          stack: "总量",
          barWidth: 20,
          label: {
            normal: {
              show: true,
              position: [0, -15],
              color:'rgba(50,207,255,1)'
            }
          },

          itemStyle: {
            normal: {
              color: "rgba(50, 207, 255, 0.05)",
              // barBorderRadius: [12, 12, 12, 12],
              borderColor: "rgba(50,207,255,0.4)",
              borderWidth: 1
            }
          },
          data: [120, 132, 101, 134, 90]
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }, []);
  return <div className="line-charts-area" id="main"></div>;
};

export default LineCharts;
