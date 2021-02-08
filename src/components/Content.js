import React from "react";
import "./Content.css";

const section_items = [
  [
    "About Me",
    <p>
      Hello, I'm <span>Junseong Hong</span>. I recently graduated from{" "}
      <span>UC Berkeley</span> on August, 2018 as a{" "}
      <span>Cognitive Science</span> major with a concentration on{" "}
      <span>Computational Modeling</span>.
    </p>,
  ],
  [
    "Skills",
    <p>
      Starting from my college career, I have been mastering languages such as{" "}
      <span>Python, Java, SQL, HTML, CSS, and Javascript</span>.<br />
      <br />
      Besides those languages, I also have experience working with numerous
      libraries such as <span>ReactJS, Redux, Hammer, and D3</span>. Moreover, I
      got to work with many productivity softwares such as{" "}
      <span>Adobe Illustrator, Xd, Photoshop and Inkscape</span>.
    </p>,
  ],
  [
    "Projects",
    <p>
      These are some of the projects I have worked on. The topic of my projects
      includes{" "}
      <span>
        Object-Oriented Programming, Database Management System, Data
        Structures, Artificial Intelligence, Data Science, UX/UI and more
      </span>
      .<br />
      <br />
      Please check out my{" "}
      <a
        className="highlight"
        href="https://github.com/jakehong0521/jakehong0521.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github Page
      </a>{" "}
      for more projects.
    </p>,
  ],
];

class Section extends React.Component {
  render() {
    return (
      <div className="container-fluid section">
        <div className="row justify-content-start">
          <div className="col-md-2 offset-md-1 section_title">
            {this.props.title}
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-md-6 offset-md-2 section_content">
            {this.props.description}
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default class Content extends React.Component {
  render() {
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
    );
  }
}
