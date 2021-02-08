import React from "react";
import "./Cover.css";
import Cube from "./Cube.js";

export default class Cover extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scroll: window.scrollY };
  }

  render() {
    var text1 = {
      transform: `translateY(${
        100 * scrolled_amount(0, 500, this.state.scroll)
      }%)`,
    };
    var wiper = {
      opacity: scrolled_amount(0, 500, this.state.scroll),
      transform: `translate(-50%, -50%) rotate(${
        180 * scrolled_amount(500, 1500, this.state.scroll)
      }deg)`,
      width: ((scroll) => (!scroll ? `150vmax` : `${100.0 * (1 - scroll)}vw`))(
        scrolled_amount(1500, 2000, this.state.scroll)
      ),
    };
    var top_arc = describeArc(
      0,
      0,
      radius,
      -90,
      -90 + 180 * scrolled_amount(500, 1500, this.state.scroll)
    );
    var bottom_arc = describeArc(
      0,
      0,
      radius,
      90,
      90 + 180 * scrolled_amount(500, 1500, this.state.scroll)
    );
    var animation_state =
      scrolled_amount(0, 1500, this.state.scroll) === 1 ? "paused" : "running";

    return (
      <div className="cover">
        <span id="logo">JH</span>
        <div id="text0">
          Concise Yet
          <br />
          Elegant
        </div>
        <div id="text1_wrap">
          <div id="text1" style={text1}>
            For Everything I do
          </div>
        </div>
        <div id="text2">Welcome to JH Studio</div>
        <span id="wiper" style={wiper} />
        <svg>
          <path id="top_arc" fill="rgb(30, 30, 30)" d={top_arc} />
        </svg>
        <svg>
          <path id="bottom_arc" fill="rgb(30, 30, 30)" d={bottom_arc} />
        </svg>
        <Cube playing={animation_state} />
        <span id="scroll" style={{ animationPlayState: animation_state }}>
          Scroll
          <br />
          Down
        </span>
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.setState({ scroll: window.scrollY });
    });
  }
}

const radius =
  1.5 * Math.max(document.body.clientHeight, document.body.clientWidth);

function scrolled_amount(start, end, scroll) {
  if (scroll <= start) {
    return 0;
  } else if (end <= scroll) {
    return 1;
  } else {
    return (scroll - start) / (end - start);
  }
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);
  var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    arcSweep,
    0,
    end.x,
    end.y,
    "L",
    x,
    y,
    "L",
    start.x,
    start.y,
  ].join(" ");
  return d;
}
