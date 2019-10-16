import React, { Component, useEffect, useState } from "react";
import moment from "moment";
import "./index.less";

const TopTitle = () => {
  return (
    <div className="top-title-area">
      <div className="top-left">今日借书 10月18日 前归还</div>
      <div className="top-mid">南京鼓楼医院图书馆大数据综合展示平台</div>
      <div className="top-right">
        {moment().format("YYYY-MM-DD HH:mm")} {moment().format("dddd")}
      </div>
    </div>
  );
};
export default TopTitle;
