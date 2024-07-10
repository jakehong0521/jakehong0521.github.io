import "./Cube.css"
import React from "../static/cube/react.png"
import Js from "../static/cube/js.png"
import Html from "../static/cube/html.png"
import Node from "../static/cube/node.png"
import Css from "../static/cube/css.png"
import Python from "../static/cube/python.png"

const cubeFaces = ["react", "js", "html", "node", "css", "python"]
const imgPathByCubeFace: Record<string, string> = {
  react: React,
  js: Js,
  html: Html,
  node: Node,
  css: Css,
  python: Python,
}

export default function Cube(props: { animationState: "paused" | "running" }) {
  return (
    <div className="cube_wrapper">
      <div
        className="cube"
        style={{ animationPlayState: props.animationState }}
      >
        {cubeFaces.map((face) => (
          <Cubeface logo={face} key={face} />
        ))}
      </div>
    </div>
  )
}

function Cubeface({ logo }: { logo: string }) {
  return (
    <div className="cube_face">
      <img src={imgPathByCubeFace[logo]} alt={logo} />
    </div>
  )
}
