import React, { Component } from "react";
import "./index.less";

export default class NoticeText extends Component {
  render() {
    return (
      <div className="notice-text-area">
        <div className="notice-text-title">最新通知</div>
        <div className="notice-text-content">
          <div className="content-title">关于图书馆借书说明</div>
          <div className='content-content'>
            内容内容区域内容区域内容区域内容区域内容区域内容区域内容区域内容区域内容区域内容区域内容区域内容区域内容区域内容区域内容区域内容区域内容区域区域
          </div>
        </div>
      </div>
    );
  }
}
