import React from "react";
import "./contact.css";
import Address from "../../images/address.png";
import Phone from "../../images/Telegram-Logo.png";
import { GiCoffeeCup } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
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
                <GiCoffeeCup color="brown" className="gi" />
                Write a Feedback (click the Black CUP!)
              </div>
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
              <a
                id="wrap"
                target="_blank"
                rel="noreferrer"
                href="https://t.me/usu_feedbacks"
              >
                <div id="steam" class="steam-one"></div>
                <div id="steam" class="steam-two"></div>
                <div id="steam" class="steam-three"></div>
                <div id="steam" class="steam-four"></div>
                <div id="cup">
                  <div class="cup-body">
                    <h3 className="mayfrend">See you there!</h3>
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
      <nav>
        <h4>
          By Shoazimov with <FaHeart fill="red" />
        </h4>
      </nav>
    </>
  );
};

export default Contact;
