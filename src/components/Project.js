import React from "react";
import "./Project.css";

const projects = [
  {
    name: "Life as Someone Else",
    id: "las",
    description:
      "Web application designed to help users read about daily lives of working professionals",
    link: "http://django-env.cmi95gspuf.us-west-1.elasticbeanstalk.com/las/",
    github: "https://github.com/jakehong0521/las",
    stacks: ["html", "css", "js", "django"],
  },
  {
    name: "Bear Maps",
    id: "bearmaps",
    description:
      "A web mapping application of Berkeley city with routing and location data computed using A* search algorithm",
    link: "",
    github: "https://github.com/jakehong0521/bearmaps",
    stacks: ["java"],
  },
  {
    name: "Lock Manager",
    id: "lockmanager",
    description:
      "API for the lock manager, transaction, and request objects that are managed by a single-threaded service which handles requests sequentially and atomically",
    link: "",
    github: "https://github.com/jakehong0521/lock_manager",
    stacks: ["java"],
  },
  {
    name: "Yelp Maps",
    id: "yelp",
    description:
      "Visualization of restaurant ratings using simple machine learning and Yelp academic dataset",
    link: "",
    github: "https://github.com/jakehong0521/yelp_maps",
    stacks: ["python"],
  },
  {
    name: "Ants vs Some Bees",
    id: "ants",
    description: `A tower defense game, similar to 'Plants vs Zombies, which combines functional and object-oriented programming paradigms.`,
    link: "",
    github: "https://github.com/jakehong0521/ants",
    stacks: ["python"],
  },
  {
    name: "Game of Hog",
    id: "hog",
    description:
      "Dice game, similar to Pig, with slightly different rules. The fun of the game is whether or not to jeopardize previous gains by rolling for potential points.",
    link: "",
    github: "https://github.com/jakehong0521/hog",
    stacks: ["python"],
  },
  {
    name: "Personal Website",
    id: "jh",
    description: "My personal website that is being viewed right now",
    link: "https://jakehong0521.github.io",
    github: "https://github.com/jakehong0521/jakehong0521.github.io",
    stacks: ["react", "css"],
  },
];

export default class Project extends React.Component {
  render() {
    return (
      <div className="row justify-content-center" style={{ width: "100%" }}>
        {projects.map((project) => (
          <ProjectTile {...project} />
        ))}
      </div>
    );
  }
}

class ProjectTile extends React.Component {
  render() {
    return (
      <div className="flipcard_wrapper col-sm-6 col-md-4 col-lg-3">
        <div className="flipcard">
          <div className="flipcard_front">
            <img
              src={require(`static/projects/${this.props.id}.png`).default}
            />
          </div>
          <div className="flipcard_back">
            <div className="flipcard_description">
              <h4>{this.props.name}</h4>
              {this.props.stacks.map((stack) => (
                <img
                  src={require(`static/cube/${stack}.png`).default}
                  key={stack}
                  alt={stack}
                />
              ))}
              <p>{this.props.description}</p>
              {this.props.link && (
                <button
                  title="Github Page"
                  onClick={() => window.open(this.props.link)}
                >
                  <i class="fa fa-external-link" />
                </button>
              )}
              <button
                title="Github Page"
                onClick={() => window.open(this.props.github)}
              >
                <i class="fa fa-github" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
