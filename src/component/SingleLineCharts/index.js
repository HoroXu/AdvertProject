import React, { Component, useState, useEffect } from "react";
import echarts from "echarts";
import "./index.less";

const SingleLineCharts = () => {
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("singleLineCharts"));

    // 指定图表的配置项和数据
    var option = {
      title: {
        text: "学院借阅排行",
        left: 10,
        top: 10,
        textStyle: {
          color: "rgba(50,207,255,1)",
          fontSize: 24
        }
      },
      color: ["#32CFFF", "#2f4554"],
      tooltip: {},
      xAxis: {
        data: [
          {
            value: "中药学院",
            textStyle: {
              color: "rgba(50,207,255,1)"
            }
          },
          {
            value: "护理学院",
            textStyle: {
              color: "rgba(50,207,255,1)"
            }
          },
          {
            value: "护理学院",
            textStyle: {
              color: "rgba(50,207,255,1)"
            }
          },
          {
            value: "护理学院",
            textStyle: {
              color: "rgba(50,207,255,1)"
            }
          },
          {
            value: "公共健康学院",
            textStyle: {
              color: "rgba(50,207,255,1)"
            }
          },
          {
            value: "公共健康学院",
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
          barWidth: 20,
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
              color: "rgba(50,207,255,1)"
            }
          },
          data: [320, 302, 301, 334, 390, 13]
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }, []);
  return <div className="single-line-charts-area" id="singleLineCharts"></div>;
};

export default SingleLineCharts;
