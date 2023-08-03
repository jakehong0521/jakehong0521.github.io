import "./Footer.css"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import {
  faCodepen,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
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
      <div className="d-flex justify-content-center">
        {socialInfo.map((sns) => (
          <SocialButton
            title={sns.title}
            target={sns.target}
            faIcon={sns.faIcon}
            key={sns.title}
          />
        ))}
      </div>
    </div>
  )
}

const SocialButton = ({
  title,
  target,
  faIcon,
}: {
  title: string
  target: string
  faIcon: IconProp
}) => (
  <button
    className="social_button"
    title={title}
    onClick={() => window.open(target)}
  >
    <FontAwesomeIcon icon={faIcon} size="xl" />
  </button>
)

const socialInfo = [
  {
    faIcon: faEnvelope,
    target: "mailto:jakehong0521@berkeley.edu",
    title: "jakehong0521@berkeley.edu",
  },
  {
    faIcon: faGithub,
    target: "https://github.com/jakehong0521/jakehong0521.github.io",
    title: "Github Page",
  },
  {
    faIcon: faCodepen,
    target: "https://codepen.io/jakehong0521/",
    title: "Codepen",
  },
  {
    faIcon: faLinkedin,
    target: "https://www.linkedin.com/in/junseong-hong-915398174/",
    title: "LinkedIn",
  },
]
