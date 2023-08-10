import "./Content.css"

const sectionInfoArr: { content: React.ReactNode; title: string }[] = [
  {
    title: "About me",
    content: (
      <p>
        Hello, I'm <span>Jake Hong</span>. I'm currently working as a{" "}
        <span>fullstack engineer</span> in Creative AI Lab team at{" "}
        <a
          className="highlight"
          href="https://smartly.io"
          rel="noopener noreferrer"
          target="_blank"
        >
          Smartly.io
        </a>{" "}
        I graduated from <span>UC Berkeley</span> in 2018 with a B.S. in{" "}
        <span>Cognitive Science</span> with a concentration on{" "}
        <span>Computational Modeling</span>.
      </p>
    ),
  },
  {
    title: "Skills",
    content: (
      <p>
        I've been working as a fullstack engineer for sligtly more than{" "}
        <span>4 years</span>. I always used <span>React</span> to build company
        websites. I built backend using <span>Python</span> for most of the time
        but recently switched to <span>Node.js</span>. I've also used{" "}
        <span>Java</span> for several school projects in the past.
      </p>
    ),
  },
  {
    title: "Projects",
    content: (
      <p>
        Please take a look at my{" "}
        <a
          className="highlight"
          href="https://codepen.io/jakehong0521/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Codepen
        </a>{" "}
        page for projects that I worked on outside of school to learn Frontend
        development.
        <br />
        For school projects, please take a look at my{" "}
        <a
          className="highlight"
          href="https://github.com/jakehong0521/jakehong0521.github.io"
          rel="noopener noreferrer"
          target="_blank"
        >
          Github Page
        </a>
        .
      </p>
    ),
  },
]

function Section(props: { title: string; content: React.ReactNode }) {
  return (
    <div className="container-fluid section">
      <div className="row justify-content-start">
        <div className="col-md-2 offset-md-1 section_title">{props.title}</div>
      </div>
      <div className="row justify-content-start">
        <div className="col-md-6 offset-md-2 section_content">
          {props.content}
        </div>
      </div>
      <br />
    </div>
  )
}

export default function Content() {
  return (
    <div>
      <div
        style={{
          height: "100vh",
          background: "linear-gradient(rgb(30, 30, 30), #fff)",
        }}
      />
      {sectionInfoArr.map((sectionInfo) => (
        <Section key={sectionInfo.title} {...sectionInfo} />
      ))}
    </div>
  )
}
