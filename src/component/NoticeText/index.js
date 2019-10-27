import React, { Component, useEffect, useState } from "react";
import AxiosData from "@/utils/axios";

import "./index.less";

const NoticeText = () => {
  const [noticeText, setNoticeText] = useState([]);
  useEffect(() => {
    AxiosData.get("showNotice.htm")
      .then(res => {
        setNoticeText(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="notice-text-area">
      <div className="notice-text-title">最新通知</div>
      <div className="content-title">{noticeText.title}</div>
      <div className="notice-text-content">
        <div className="content-content animate">{noticeText.content}</div>
      </div>
    </div>
  );
};

export default NoticeText;
