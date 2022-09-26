import React from "react";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/hamednasr" target="_blank">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/hamed-nasr-60802677" target="_blank">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <BsTwitter />
    </div>
  </div>
);

export default SocialMedia;
