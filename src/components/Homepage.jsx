import React from 'react';
import { FaJs, FaNodeJs, FaReact, FaSass, FaGit } from "react-icons/fa";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-overlay">
        <div className="homepage-content">
          <div className="homepage-content-inner">
            <p className="homepage-bio">
              A software engineer with a genuine interest in the hows and whys of programming. I strive to improve my knowledge and ability at any opportunity given to me.
            </p>
            <p className="homepage-bio">
              I have a background in the arts, particularly in music and sound design. I am continuously on the lookout for new challenges and experiences.
            </p>
            <p className="homepage-bio-icons">
              <FaJs />
              <FaNodeJs />
              <FaReact />
              <FaSass />
              <FaGit/>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
