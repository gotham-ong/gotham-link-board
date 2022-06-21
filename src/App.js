import React from "react";
import LinkButton from './components/LinkButton';
import TextBanner from './components/TextBanner';
import ProfilePic from './components/ProfilePic';

const App = () => {

  return (
    <div>

      <TextBanner
        title="Gotham"
        text="Build. Evolve. Collaborate."
      />
      <LinkButton
        name="Instagram"
        link="https://www.instagram.com/devpobrerico/"
      />
      <LinkButton
        name="GitHub"
        link="https://github.com/gotham-ong"
      />
      <LinkButton
        name="Discord"
        link="https://discord.gg/gfuDsPbxGj"
      />
      <LinkButton
        name="LinkedIn"
        link="https://www.linkedin.com/company/gotham-ong/"
      />
      <LinkButton
        title="Contribuidores"
        name="GitHub"
        link="https://github.com/ItaloCobains"
      />
      <LinkButton
        name="LinkedIn"
        link="https://www.linkedin.com/in/italo-brandão-80994020b/"
      />
    </div>
  )
}


export default App;
