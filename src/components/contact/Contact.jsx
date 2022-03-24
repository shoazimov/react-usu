import React from "react";
import "./contact.css";
import Address from "../../images/address.png";
import Phone from "../../images/Telegram-Logo.png";
import { GiCoffeeCup } from "react-icons/gi";
const Contact = () => {
  return (
    <>
      <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Contact us</h1>
            <div className="c-info">
              <a
                style={{ textDecoration: "none", color: "red" }}
                href="https://t.me/usu_feedbacks"
                className="c-info-item"
              >
                <img src={Phone} alt="lala" className="c-icon" />
                USU Feedbacks
              </a>
              <div className="c-info-item">
                <img src={Address} alt="lala" className="c-icon" />
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
              <div className="bgbox">
                <div class="spinner-box">
                  <div class="blue-orbit leo"></div>

                  <div class="green-orbit leo"></div>

                  <div class="red-orbit leo"></div>

                  <div class="white-orbit w1 leo"></div>
                  <div class="white-orbit w2 leo"></div>
                  <div class="white-orbit w3 leo"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <h4>
          By Shoazimov with
          <svg
            class="heart-loader"
            xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            xmlnsSvg="http://www.w3.org/2000/svg"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 90 90"
            version="1.1"
          >
            <g class="heart-loader__group">
              <path
                class="heart-loader__square"
                stroke-width="1"
                fill="none"
                d="M0,30 0,90 60,90 60,30z"
              />
              <path
                class="heart-loader__circle m--left"
                stroke-width="1"
                fill="none"
                d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0"
              />
              <path
                class="heart-loader__circle m--right"
                stroke-width="1"
                fill="none"
                d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0"
              />
              <path
                class="heart-loader__heartPath"
                stroke-width="2"
                d="M60,30 a30,30 0 0,1 0,60 L0,90 0,30 a30,30 0 0,1 60,0"
              />
            </g>
          </svg>
        </h4>
      </nav>
    </>
  );
};

export default Contact;
