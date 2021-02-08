import React from "react";
import "./Footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="container-fluid section" id="footer">
        <div className="row justify-content-start">
          <div className="col-md-2 offset-md-1 section_title_dark">Contact</div>
        </div>
        <div className="row justify-content-start">
          <div className="col-md-6 offset-md-2 section_content_dark">
            Thank you for visiting my website.
            <br />
            Looking forward to hearing back from you.
          </div>
        </div>
        <div id="social_buttons">
          {socialInfo.map((sns) => (
            <SocialButton
              title={sns.title}
              target={sns.target}
              fa={sns.fa}
              key={sns.title}
            />
          ))}
        </div>
      </div>
    );
  }
}

const SocialButton = ({ title, target, fa }) => (
  <button
    className="social_button"
    title={title}
    onClick={() => window.open(target)}
  >
    <i className={`fa fa-${fa}`} />
  </button>
);

const socialInfo = [
  {
    title: "jakehong0521@berkeley.edu",
    target: "mailto:jakehong0521@berkeley.edu",
    fa: "envelope",
  },
  {
    title: "Github Page",
    target: "https://github.com/jakehong0521/jakehong0521.github.io",
    fa: "github",
  },
  {
    title: "Codepen",
    target: "https://codepen.io/jakehong0521/",
    fa: "codepen",
  },
  {
    title: "LinkedIn",
    target: "https://www.linkedin.com/in/junseong-hong-915398174/",
    fa: "linkedin",
  },
];
