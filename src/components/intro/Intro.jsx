import "./intro.css";
import styled from "styled-components";
import "../../fonts.css";
import "./sogot";

const Text = styled.h1`
  letter-spacing: 7.5px;
`;

const Title = styled.div`
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.2px;
  line-height: 20px;
`;

const Intro = () => {
  return (
    <>
      <div id="clock" class="progress-clock">
        <button class="progress-clock__time-date" data-group="d" type="button">
          <small data-unit="w">Sunday</small>
          <br />
          <span data-unit="mo">January</span>
          <span data-unit="d">1</span>
        </button>
        <button
          class="progress-clock__time-digit"
          data-unit="h"
          data-group="h"
          type="button"
        >
          12
        </button>
        <span class="progress-clock__time-colon">:</span>
        <button
          class="progress-clock__time-digit"
          data-unit="m"
          data-group="m"
          type="button"
        >
          00
        </button>
        <span class="progress-clock__time-colon">:</span>
        <button
          class="progress-clock__time-digit"
          data-unit="s"
          data-group="s"
          type="button"
        >
          00
        </button>
        <span class="progress-clock__time-ampm" data-unit="ap">
          AM
        </span>
        <svg
          class="progress-clock__rings"
          width="256"
          height="256"
          viewBox="0 0 256 256"
        >
          <defs>
            <linearGradient id="pc-red" x1="1" y1="0.5" x2="0" y2="0.5">
              <stop offset="0%" stop-color="hsl(343,90%,55%)" />
              <stop offset="100%" stop-color="hsl(323,90%,55%)" />
            </linearGradient>
            <linearGradient id="pc-yellow" x1="1" y1="0.5" x2="0" y2="0.5">
              <stop offset="0%" stop-color="hsl(43,90%,55%)" />
              <stop offset="100%" stop-color="hsl(23,90%,55%)" />
            </linearGradient>
            <linearGradient id="pc-blue" x1="1" y1="0.5" x2="0" y2="0.5">
              <stop offset="0%" stop-color="hsl(223,90%,55%)" />
              <stop offset="100%" stop-color="hsl(203,90%,55%)" />
            </linearGradient>
            <linearGradient id="pc-purple" x1="1" y1="0.5" x2="0" y2="0.5">
              <stop offset="0%" stop-color="hsl(283,90%,55%)" />
              <stop offset="100%" stop-color="hsl(263,90%,55%)" />
            </linearGradient>
          </defs>
          <g data-units="d">
            <circle
              class="progress-clock__ring"
              cx="128"
              cy="128"
              r="74"
              fill="none"
              opacity="0.1"
              stroke="url(#pc-red)"
              stroke-width="12"
            />
            <circle
              class="progress-clock__ring-fill"
              data-ring="mo"
              cx="128"
              cy="128"
              r="74"
              fill="none"
              stroke="url(#pc-red)"
              stroke-width="12"
              stroke-dasharray="465 465"
              stroke-dashoffset="465"
              stroke-linecap="round"
              transform="rotate(-90,128,128)"
            />
          </g>
          <g data-units="h">
            <circle
              class="progress-clock__ring"
              cx="128"
              cy="128"
              r="90"
              fill="none"
              opacity="0.1"
              stroke="url(#pc-yellow)"
              stroke-width="12"
            />
            <circle
              class="progress-clock__ring-fill"
              data-ring="d"
              cx="128"
              cy="128"
              r="90"
              fill="none"
              stroke="url(#pc-yellow)"
              stroke-width="12"
              stroke-dasharray="565.5 565.5"
              stroke-dashoffset="565.5"
              stroke-linecap="round"
              transform="rotate(-90,128,128)"
            />
          </g>
          <g data-units="m">
            <circle
              class="progress-clock__ring"
              cx="128"
              cy="128"
              r="106"
              fill="none"
              opacity="0.1"
              stroke="url(#pc-blue)"
              stroke-width="12"
            />
            <circle
              class="progress-clock__ring-fill"
              data-ring="h"
              cx="128"
              cy="128"
              r="106"
              fill="none"
              stroke="url(#pc-blue)"
              stroke-width="12"
              stroke-dasharray="666 666"
              stroke-dashoffset="666"
              stroke-linecap="round"
              transform="rotate(-90,128,128)"
            />
          </g>
          <g data-units="s">
            <circle
              class="progress-clock__ring"
              cx="128"
              cy="128"
              r="122"
              fill="none"
              opacity="0.1"
              stroke="url(#pc-purple)"
              stroke-width="12"
            />
            <circle
              class="progress-clock__ring-fill"
              data-ring="m"
              cx="128"
              cy="128"
              r="122"
              fill="none"
              stroke="url(#pc-purple)"
              stroke-width="12"
              stroke-dasharray="766.5 766.5"
              stroke-dashoffset="766.5"
              stroke-linecap="round"
              transform="rotate(-90,128,128)"
            />
          </g>
        </svg>
      </div>
      <div className="i">
        <div class="anime">
          <div id="kisiOblak">
            <img
              src="https://i.postimg.cc/yd92hBJY/clouds.png"
              width="200"
              height="50"
              alt="lala"
            />
          </div>

          <div id="kapljica1">
            {" "}
            <img
              src="https://i.postimg.cc/XJpdt7K4/rain.png"
              alt="lala"
              width="3px"
              height="10px"
            />
          </div>
          <div id="kapljica2">
            {" "}
            <img
              src="https://i.postimg.cc/XJpdt7K4/rain.png"
              alt="lala"
              width="3px"
              height="10px"
            />
          </div>
          <div id="kapljica3">
            {" "}
            <img
              src="https://i.postimg.cc/XJpdt7K4/rain.png"
              alt="lala"
              width="3px"
              height="10px"
            />
          </div>
          <div id="kapljica4">
            {" "}
            <img
              src="https://i.postimg.cc/XJpdt7K4/rain.png"
              width="3px"
              alt="lala"
              height="10px"
            />
          </div>
          <div id="kapljica5">
            {" "}
            <img
              src="https://i.postimg.cc/XJpdt7K4/rain.png"
              width="3px"
              alt="lala"
              height="10px"
            />
          </div>
          <div id="kapljica6">
            {" "}
            <img
              alt="lala"
              src="https://i.postimg.cc/XJpdt7K4/rain.png"
              width="3px"
              height="10px"
            />
          </div>
          <div id="kapljica7">
            {" "}
            <img
              src="https://i.postimg.cc/XJpdt7K4/rain.png"
              width="3px"
              alt="lala"
              height="10px"
            />
          </div>
          <div id="kapljica8">
            {" "}
            <img
              alt="lala"
              src="https://i.postimg.cc/XJpdt7K4/rain.png"
              width="3px"
              height="10px"
            />
          </div>
          <div id="kapljica9">
            {" "}
            <img
              src="https://i.postimg.cc/XJpdt7K4/rain.png"
              width="3px"
              alt="lala"
              height="10px"
            />
          </div>
          <div id="kapljica10">
            {" "}
            <img
              src="https://i.postimg.cc/XJpdt7K4/rain.png"
              width="3px"
              alt="lala"
              height="10px"
            />
          </div>
          <div id="kapljica11">
            {" "}
            <img
              src="https://i.postimg.cc/XJpdt7K4/rain.png"
              width="3px"
              alt="lala"
              height="10px"
            />
          </div>

          <div id="zvezda">
            {" "}
            <img alt="lala" src="https://i.postimg.cc/wM5vGSr9/star.png" />{" "}
          </div>

          <div id="pokretni_oblak1">
            {" "}
            <img
              src="https://i.postimg.cc/yd92hBJY/clouds.png"
              width="100"
              height="20"
              alt="lala"
            />{" "}
          </div>
          <div id="pokretni_oblak2">
            {" "}
            <img
              src="https://i.postimg.cc/yd92hBJY/clouds.png"
              alt="lala"
              width="100"
              height="20"
            />{" "}
          </div>
          <div id="pokretni_oblak3">
            {" "}
            <img
              src="https://i.postimg.cc/yd92hBJY/clouds.png"
              alt="lala"
              width="100"
              height="20"
            />{" "}
          </div>
          <div id="pokretni_oblak4">
            {" "}
            <img
              src="https://i.postimg.cc/yd92hBJY/clouds.png"
              alt="lala"
              width="100"
              height="20"
            />{" "}
          </div>
        </div>
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hi, we are</h2>
            <Text style={{ fontFamily: "Brolink" }} className="i-name">
              USU
            </Text>
            <div className="i-title">
              <div className="i-title-wrapper">
                <Title
                  className="i-title-item"
                  style={{
                    fontFamily: "Dancing Script",
                    color: "#000000",
                    fontWeight: "900",
                  }}
                >
                  Now Learn, Later Earn
                </Title>
                <Title
                  className="i-title-item"
                  style={{
                    fontFamily: "Goudy Bookletter 1911",
                    color: "#000000",
                    fontWeight: "900",
                  }}
                >
                  Now Learn, Later Earn
                </Title>
                <Title
                  className="i-title-item"
                  style={{
                    fontFamily: "Raleway",
                    color: "#000000",
                    fontWeight: "900",
                  }}
                >
                  Now Learn, Later Earn
                </Title>
                <Title
                  className="i-title-item"
                  style={{
                    fontFamily: "Fredericka The Great",
                    color: "#000000",
                    fontWeight: "900",
                  }}
                >
                  Now Learn, Later Earn
                </Title>
              </div>
            </div>
            <p className="i-desc">
              Hello, friends! It's our team, <span className="usu">USU</span>,
              which consists of 9 members. We are always ready to help and
              support you, just ask!
            </p>
          </div>
        </div>
        <div className="i-right"></div>
        <script src="./sogot" type="text/javascript"></script>
      </div>
    </>
  );
};

export default Intro;
