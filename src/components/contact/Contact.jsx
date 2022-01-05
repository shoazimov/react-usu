import React from "react";
import "./contact.css";
import Address from "../../images/address.png";
import Phone from "../../images/Removal-763.png";
import { FaHeart } from "react-icons/fa";

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
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="mailto:usuteam07@gmail.com"
                  class="coffee-container"
                >
                  <div class="coffee-header">
                    <div class="coffee-header__buttons coffee-header__button-one"></div>
                    <div class="coffee-header__buttons coffee-header__button-two"></div>
                    <div class="coffee-header__display"></div>
                    <div class="coffee-header__details"></div>
                  </div>
                  <div class="coffee-medium">
                    <div class="coffe-medium__exit"></div>
                    <div class="coffee-medium__arm"></div>
                    <div class="coffee-medium__liquid"></div>
                    <div class="coffee-medium__smoke coffee-medium__smoke-one"></div>
                    <div class="coffee-medium__smoke coffee-medium__smoke-two"></div>
                    <div class="coffee-medium__smoke coffee-medium__smoke-three"></div>
                    <div class="coffee-medium__smoke coffee-medium__smoke-for"></div>
                    <div class="coffee-medium__cup"></div>
                  </div>
                  <div class="coffee-footer"></div>
                </a>
              </div>
              <div className="c-info-item">
                <img src={Address} alt="" className="c-icon" />
                <a
                  className="c-link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://yandex.uz/maps/org/190231201887/?ll=69.193878%2C41.340923&z=15"
                >
                  132 School, Shaykhontokhur, Tashkent
                </a>
              </div>
            </div>
          </div>
          <div className="c-right"></div>
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
