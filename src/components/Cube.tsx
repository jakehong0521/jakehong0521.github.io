import "./Cube.css"
import { getAssetPath } from "../utils/assetUtils"

const cubeFaces = ["react", "js", "html", "node", "css", "python"]

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
      <img src={getAssetPath(`../static/cube/${logo}.png`)} alt={logo} />
    </div>
  )
}
