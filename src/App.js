import React from "react";
import LinkButton from "./components/LinkButton";
import TextBanner from "./components/TextBanner";
import Contact from "./components/Contact";
import ProfilePic from "./components/ProfilePic";
import Footer from "./components/Footer";
import picture from "./logoGotham.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <ProfilePic
        name="Gotham"
        picture={picture}
        alt="Build. Evolve. Collaborate."
      />
      <TextBanner title="Desenvolvimento de software" />
      <Contact />
      <div style={{ marginBottom: "50px" }}>
        <LinkButton
          name="Instagram"
          logo={<FontAwesomeIcon size="2x" icon={faInstagram} />}
          link="https://www.instagram.com/devpobrerico/"
        />
        <LinkButton
          name="GitHub"
          logo={<FontAwesomeIcon size="2x" icon={faGithub} />}
          link="https://github.com/gotham-ong"
        />
        <LinkButton
          name="LinkdIn"
          logo={<FontAwesomeIcon size="2x" icon={faLinkedin} />}
          link="https://www.linkedin.com/company/gotham-ong/"
        />
        <LinkButton
          title="Dev"
          name="ItaloCobains"
          link="https://github.com/ItaloCobains"
        />
      </div>
      <Footer
        text="Projeto Open Source"
        text2="Pagina feita em ReactJs"
      />
    </div>
  );
}

export default App;

