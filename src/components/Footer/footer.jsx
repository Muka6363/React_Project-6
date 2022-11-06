import "./footer.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer">
      <h3>
        ...This is a 😎 <span>Mustafa Kayikci</span> 😎project...
      </h3>

      <a href="https://github.com/Muka6363" target="_blank">
        <BsGithub style={{ fontSize: "2rem", borderRadius: "50%" }} />
      </a>

      <a href=" https://www.linkedin.com/in/mustafakayikci63/" target="_blank">
        <BsLinkedin style={{ fontSize: "2rem", borderRadius: "50%" }} />
      </a>
    </div>
  );
};
export default Footer;
