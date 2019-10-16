import React, { Component } from "react";
import { Layout } from "antd";
import "./App.less";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
import AxiosData from "@/utils/axios";
import "./config/common.less";

import RouteMap from "./Route";
import { connect } from "react-redux";

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultHeight: ""
    };
  }
  componentDidMount() {
    this.setState({
      defaultHeight: document.body.clientHeight
    });
  }
  render() {
    console.log(this.state.defaultHeight, "默认高速-======");
    return (
      <div>
        <div>
          <RouteMap />
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}
