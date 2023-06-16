import React, { PureComponent } from "react";
import "./Home.scss";

export default class Homecomponent extends PureComponent {
  render() {
    return (
      <>
        <div className="home-header">
          <h1>Welcome to Health world</h1>
          <img src="./Images/homeimg.jpg" alt="" />
        </div>
        <div className="home-body"></div>
      </>
    );
  }
}
