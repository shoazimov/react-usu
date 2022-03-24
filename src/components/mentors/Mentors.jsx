import React from "react";
import "./mentors.css";
import "./lightslider.css";
import * as jquery from "./Jquery";
import * as lightslider from "./lightslider";
import * as script from "./script";

const Mentors = () => {
  return (
    <>
      <script src={jquery} type="text/javascript"></script>
      <script src={lightslider} type="text/javascript"></script>
      <script src={script} type="text/javascript"></script>
      <div className="container">
        <ul id="autoWidth" class="cs-hidden">
          <li class="item-a">
            <div className="box">
              <h1 className="name">Shoazimov</h1>
              <h1 className="name">Mukhammadrizo</h1>
              <ion-icon name="analytics-outline" class="model"></ion-icon>
            </div>
          </li>
          <li class="item-a">
            <div className="box">
              <h1 className="name">Usmonova</h1>
              <h1 className="name">Shodiya</h1>
              <ion-icon name="leaf-outline" class="model"></ion-icon>
            </div>
          </li>
          <li class="item-a">
            <div className="box">
              <h1 className="name">Askarjanov</h1>
              <h1 className="name">Abdulaziz</h1>
              <ion-icon name="barbell-outline" class="model"></ion-icon>
            </div>
          </li>
          <li class="item-a">
            <div className="box">
              <h1 className="name">Shukhratov</h1>
              <h1 className="name">Said</h1>
              <ion-icon name="videocam-outline" class="model"></ion-icon>
            </div>
          </li>
          <li class="item-a">
            <div className="box">
              <h1 className="name">Karimova</h1>
              <h1 className="name">Sevinch</h1>
              <ion-icon name="cloudy-outline" class="model"></ion-icon>
            </div>
          </li>
          <li class="item-a">
            <div className="box">
              <h1 className="name">Qosimova</h1>
              <h1 className="name">Aziza</h1>
              <ion-icon name="musical-note-outline" class="model"></ion-icon>
            </div>
          </li>
          <li class="item-a">
            <div className="box">
              <h1 className="name">Mirqosimova</h1>
              <h1 className="name">Maryam</h1>
              <ion-icon name="planet-outline" class="model"></ion-icon>
            </div>
          </li>
          <li class="item-a">
            <div className="box">
              <h1 className="name">Akbarjanova</h1>
              <h1 className="name">Mukhsina</h1>
              <ion-icon name="moon-outline" class="model"></ion-icon>
            </div>
          </li>
          <li class="item-a">
            <div className="box">
              <h1 className="name">Orifboyeva</h1>
              <h1 className="name">Muslima</h1>
              <ion-icon name="sunny-outline" class="model"></ion-icon>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Mentors;
