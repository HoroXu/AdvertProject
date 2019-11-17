import React, { Component, useEffect, useState } from "react";
import AxiosData from "@/utils/axios";
import moment from "moment";
import "./index.less";

const TopTitle = () => {
  const judgeWeek = num => {
    switch (num) {
      case 1:
        return "星期一";
      case 2:
        return "星期二";
      case 3:
        return "星期三";
      case 4:
        return "星期四";
      case 5:
        return "星期五";
      case 6:
        return "星期六";
      case 7:
        return "星期ri";
    }
  };

  const [title, setTitle] = useState("");

  useEffect(() => {
    AxiosData.get('showLogo.htm')
      .then(res => {
        setTitle(res.title);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div className="top-title-area">
      <div className="top-left">
        今日借书 {moment().format("MM月DD日")} 前归还
      </div>
      <div className="top-mid">{title}</div>
      <div className="top-right">
        {moment().format("YYYY-MM-DD HH:mm")} {judgeWeek(moment().days())}
      </div>
    </div>
  );
};
export default TopTitle;
