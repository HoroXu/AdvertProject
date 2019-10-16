import React, { Component, useState, useEffect } from "react";
import TopTitle from "./TopTitle";
import LineCharts from "@/component/LineCharts";
import NoticeText from "@/component/NoticeText";
import PieCharts from "@/component/PieCharts";
import Recommend from "@/component/Recommend";
import WheelPlanting from "@/component/WheelPlanting";
import './index.less'

const HomePage = () => {
  return (
    <div className="home-page-area">
      {/* <TopTitle /> */}
      <div>
        <LineCharts />
      </div>
      <div>
        {/* <LineCharts /> */}
      </div>
    </div>
  );
};

export default HomePage;
