import React, { Component, useState, useEffect } from "react";
import echarts from "echarts";
import "./index.less";
import Language from "../../assets/images/language.png";
import Rate from "../../assets/images/rate.png";
import Book from "../../assets/images/book.png";

const PieCharts = () => {
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
        data: ["图书", "期刊", "会员论文", "学位论文", "专利"],
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
              show: true,
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
          data: [
            {
              value: 335,
              name: "图书",
              itemStyle: { color: "rgba(66,240,157,0.6)" }
            },
            {
              value: 310,
              name: "期刊",
              itemStyle: { color: "rgba(80,174,255,0.6)" }
            },
            {
              value: 234,
              name: "会员论文",
              itemStyle: { color: "rgba(221,215,116,0.6)" }
            },
            { value: 135, name: "学位论文", itemStyle: { color: "#FFF1F0FF" } },
            { value: 1548, name: "专利", itemStyle: { color: "#FFFFBCA8" } }
          ]
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }, []);
  return (
    <div className="pie-charts-area">
      <div className="pie-charts-title">本馆风采</div>
      <div className="pie-charts-content">
        <div className="num-content">
          <div className="month-num-area">
            <div className="num-title">8月份文献传递量</div>
            <div className="month-num">
              <div className="single-num">
                <div className="num">128,713</div>
                <div className="text">总传递量</div>
              </div>
              <div className="single-num">
                <div className="num"> 128,713</div>
                <div className="text">图书传递量</div>
              </div>

              <div className="single-num">
                <div className="num"> 128,713</div>
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
            <div className="table-single">
              <span className="text-single">中文</span>
              <span className="text-single">9631</span>
              <span className="text-single">96%</span>
            </div>
            <div className="table-single">
              <span className="text-single">中文</span>
              <span className="text-single">9631</span>
              <span className="text-single">96%</span>
            </div>
          </div>
        </div>

        <div id="pieArea" className="pie-area"></div>

        <div className="pie-title">8月份文献传递量</div>
        <div className="pie-center">
          <div className="center-num">6604</div>
          <div className="center-text">8月份文献传递量</div>
        </div>
      </div>
    </div>
  );
};

export default PieCharts;
