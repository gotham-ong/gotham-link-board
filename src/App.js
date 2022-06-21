import React from "react";
import LinkButton from './components/LinkButton';

const App = () => {

  return (
    <div>
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

    </div>
  )
}


export default App;
