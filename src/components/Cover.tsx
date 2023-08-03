import { useEffect, useState } from "react"
import "./Cover.css"
import Cube from "./Cube"

export default function Cover() {
  const [scroll, setScroll] = useState(window.scrollY)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(() => window.scrollY)
    })
  }, [])

  const wiper = {
    opacity: scrolled_amount(0, 500, scroll),
    transform: `translate(-50%, -50%) rotate(${
      180 * scrolled_amount(500, 1500, scroll)
    }deg)`,
    width: ((scroll) => (!scroll ? `150vmax` : `${100.0 * (1 - scroll)}vw`))(
      scrolled_amount(1500, 2000, scroll),
    ),
  }
  const top_arc = describeArc(
    0,
    0,
    radius,
    -90,
    -90 + 180 * scrolled_amount(500, 1500, scroll),
  )
  const bottom_arc = describeArc(
    0,
    0,
    radius,
    90,
    90 + 180 * scrolled_amount(500, 1500, scroll),
  )
  const animation_state =
    scrolled_amount(0, 1500, scroll) === 1 ? "paused" : "running"

  return (
    <div className="cover">
      <div id="welcome-msg">Welcome to JH Studio</div>
      <span id="wiper" style={wiper} />
      <svg>
        <path id="top_arc" fill="rgb(30, 30, 30)" d={top_arc} />
      </svg>
      <svg>
        <path id="bottom_arc" fill="rgb(30, 30, 30)" d={bottom_arc} />
      </svg>
      <div className="cube-positioner">
        <Cube animationState={animation_state} />
      </div>
      <span id="scroll" style={{ animationPlayState: animation_state }}>
        Scroll
        <br />
        Down
      </span>
    </div>
  )
}

const radius =
  1.5 * Math.max(document.body.clientHeight, document.body.clientWidth)

function scrolled_amount(start: number, end: number, scroll: number) {
  if (scroll <= start) {
    return 0
  } else if (end <= scroll) {
    return 1
  } else {
    return (scroll - start) / (end - start)
  }
}

function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number,
) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  }
}

function describeArc(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number,
) {
  const start = polarToCartesian(x, y, radius, endAngle)
  const end = polarToCartesian(x, y, radius, startAngle)
  const arcSweep = endAngle - startAngle <= 180 ? "0" : "1"
  const d = [
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
  ].join(" ")
  return d
}
