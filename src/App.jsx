import { useEffect, useState } from "react";
import Shape from "./Shape";
import "./App.css";

function App() {
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setShowToast(false);
      } else {
        setShowToast(true);
      }
      return () => window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const toast = !showToast ? null : (
    <a href="#about" className="toast">
      <p>Scroll down</p>
    </a>
  );

  return (
    <div className="container">
      {toast}
      <div className="shapeContainer">
        <div className="shape">
          <Shape />
        </div>
      </div>
      <div className="textContainer" id="about">
        <div className="textContainer__section">
          <div className="textContainer__title">
            <p>About</p>
          </div>
          <div className="textContainer__body">
            <p>
              Hello world, I'm Joey Steigelman. I'm a frontend developer at a
              leading financial institution in New York City. With a robust
              background in art, I bring a unique blend of creativity and
              technical skill to my work, focusing on creating digital solutions
              that are not only effective but also intuitive and engaging. My
              commitment is to ensure that each project I'm involved with is
              developed to the highest standards, combining smooth functionality
              with a user-friendly interface, to deliver a superior digital
              experience.
            </p>
            <p>
              Check out my latest project,{" "}
              <a
                href="https://apps.apple.com/us/app/leo-art/id1668017685"
                target="_blank"
                id="link"
              >
                Leo,
              </a>{" "}
              now available for download on The App Store!{" "}
            </p>
          </div>
        </div>
        <div className="textContainer__section">
          <div className="textContainer__title">
            <p>Contact</p>
          </div>
          <div className="textContainer__body">
            <p>
              Interested in connecting?{" "}
              <a id="link" href="mailto:joey.steigelman@gmail.com">
                Get in touch here.
              </a>{" "}
              Or, explore my{" "}
              <a
                id="link"
                href="https://github.com/jsteigelman"
                target="_blank"
              >
                projects on GitHub.
              </a>
            </p>
          </div>
        </div>
        <div className="textContainer__section">
          <p id="copyright">
            Copyright © 2024 Joey Steigelman. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
