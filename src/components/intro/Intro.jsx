import "./intro.css";
import styled from "styled-components";
// import { LightClouds } from "../cloudLight";
// import { DarkClouds } from "../cloudDark";

const Text = styled.h1`
  font-family: "Goudy Bookletter 1911", sans-serif;
`;

const Title = styled.div`
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.2px;
`;

const Intro = () => {
  return (
    <div className="i">
      <div>
        <div id="background-wrap">
          <div class="x1">
            <div class="cloud"></div>
          </div>

          <div class="x2">
            <div class="cloud"></div>
          </div>

          <div class="x3">
            <div class="cloud"></div>
          </div>

          <div class="x4">
            <div class="cloud"></div>
          </div>

          <div class="x5">
            <div class="cloud"></div>
          </div>
        </div>
      </div>
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hi, we are</h2>
          <Text className="i-name">USU</Text>
          <div className="i-title">
            <div className="i-title-wrapper">
              <Title className="i-title-item">Shoazimov Muhammadrizo</Title>
              <Title className="i-title-item">Saydolimov Saidislom</Title>
              <Title className="i-title-item">Usmonova Shodiya</Title>
              <Title className="i-title-item">Askarjanov Abdulaziz</Title>
              <Title className="i-title-item">Qosimova Aziza</Title>
              <Title className="i-title-item">Orifboyeva Muslima</Title>
              <Title className="i-title-item">Shukhratov Said</Title>
              <Title className="i-title-item">Karimova Sevinch</Title>
              <Title className="i-title-item">Akbarjonova Muhsina</Title>
              <Title className="i-title-item">Valiyeva Malika</Title>
            </div>
          </div>
          <p className="i-desc">
            Hello, friends! It's our team, <strong>𝕌𝕊𝕌</strong>, which consists
            of 9 members. We are always ready to help and support you, just ask!
          </p>
        </div>
      </div>
      <div className="i-right">
        <div class="container">
          <div class="word w1" style={{ color: "#414141" }}>
            Now
          </div>
          <div class="word w2" style={{ color: "#414141" }}>
            Learn
          </div>
          <div class="word w3" style={{ color: "#414141" }}>
            Later
          </div>
          <div class="word w4" style={{ color: "#414141" }}>
            Earn
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
