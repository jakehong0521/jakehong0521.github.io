import "./Content.css"

const section_items: [string, JSX.Element][] = [
  [
    "About Me",
    <p>
      Hello, I'm <span>Junseong Hong</span>. I'm currently working at{" "}
      <a
        className="highlight"
        href="https://viralspace.ai"
        target="_blank"
        rel="noopener noreferrer"
      >
        Viralspace.ai
      </a>{" "}
      as a <span>full stack engineer</span>. I graduated from{" "}
      <span>UC Berkeley</span> in 2018 as a <span>Cognitive Science</span> major
      with concentration on <span>Computational Modeling</span>.
    </p>,
  ],
  [
    "Skills",
    <p>
      These days, I'm coding for my company's website using <span>React</span>.
      I have used <span>Python, and Java</span> for personal/school projects in
      the past.
    </p>,
  ],
  [
    "Projects",
    <p>
      Please check out my projects at{" "}
      <a
        className="highlight"
        href="https://github.com/jakehong0521/jakehong0521.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github Page
      </a>
    </p>,
  ],
]

function Section(props: {
  title: string | JSX.Element
  description: string | JSX.Element
}) {
  return (
    <div className="container-fluid section">
      <div className="row justify-content-start">
        <div className="col-md-2 offset-md-1 section_title">{props.title}</div>
      </div>
      <div className="row justify-content-start">
        <div className="col-md-6 offset-md-2 section_content">
          {props.description}
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
      {section_items.map((item) => (
        <Section title={item[0]} key={item[0]} description={item[1]} />
      ))}
    </div>
  )
}
