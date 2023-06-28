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
        <hr></hr>
        <div className="home-body">
          <div className="final">
            <div className="media">
              <img  src="https://logodix.com/logo/659076.png" alt="" />
              &nbsp;&nbsp;
              <img  src="https://pngimg.com/uploads/instagram/instagram_PNG10.png" alt="" />
              &nbsp;&nbsp;
              <img src="https://imagepng.org/wp-content/uploads/2018/08/twitter-icone.png" alt="" />
              &nbsp;&nbsp;
              <img  src="https://pngimg.com/uploads/email/email_PNG100751.png" alt="" />
              &nbsp;&nbsp;

              <img  src="https://www.pinclipart.com/picdir/big/530-5305994_icon-youtube-logo-png-clipart.png" alt="" />
              &nbsp;&nbsp;
            </div>
            <div>
              <p>
                Please dispose of e-waste and plastic waste For more information
                or e-waste pick up, please call 1800 34 1264  for
                more details.
              </p>
            </div>
            <div>
              <p>
                Registered Office Address: 2th Floor, HSR Layout, near SLIK BOARD, BANGALORE,
                KA-160001 Corporate Identification Number (CIN):
                U31900DL1995PTC071387
              </p>
            </div>
          </div>
          <div className="red">Ⓒ Copyright 2022-2023. All Rights Reserved</div>
        </div>
      </>
    );
  }
}
