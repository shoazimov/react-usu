import React from "react";
import "./contact.css";
import Address from "../../images/address.png";
import Phone from "../../images/Removal-763.png";
import { FaHeart } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";

const Contact = () => {
  return (
    <>
      <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Contact us (Saidislom)</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" />
                +998(98)311-74-54
              </div>
              <div className="c-info-item">
                <GiCoffeeCup color="brown" className="gi" />
                Write an email (click the Black CUP!)
              </div>
              <div className="c-info-item">
                <img src={Address} alt="" className="c-icon" />
                <a
                  className="c-link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://yandex.uz/maps/org/190231201887/?ll=69.193878%2C41.340923&z=15"
                >
                  132 School, Shaykhontokhur
                </a>
              </div>
            </div>
          </div>
          <div className="c-right">
            <div className="c-info-item">
              <a
                id="wrap"
                target="_blank"
                rel="noreferrer"
                href="mailto:usuteam07@gmail.com"
              >
                <div id="steam" class="steam-one"></div>
                <div id="steam" class="steam-two"></div>
                <div id="steam" class="steam-three"></div>
                <div id="steam" class="steam-four"></div>
                <div id="cup">
                  <div class="cup-body">
                    <div class="cup-shade"></div>
                  </div>
                  <div class="cup-handle"></div>
                  <div class="saurce"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar">
        <h3>
          By Shoazimov with <FaHeart className="heart" />
        </h3>
      </div>
    </>
  );
};

export default Contact;
