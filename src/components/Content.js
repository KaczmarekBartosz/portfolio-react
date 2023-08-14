import React from "react";
import "./Content.css";
import { TypeAnimation } from "react-type-animation";

function Content() {
  return (
    <div className="content" id="content">
      <div className="left-content">
        <p>Hello, my name is</p>
        <h1>Bartosz Kaczmarek</h1>
        <p className="who-am-i">
          <TypeAnimation
            sequence={[
              "I'm passionate about coding websites to their fullest potential.",
              1000,
              "An ambitious entrepreneur on an exciting coding journey.",
              1000,
              "Currently, I am self-employed and proudly own a diet catering company that I established from scratch a few years ago.",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </p>
        {/* <p>
          Passionate about<span> coding websites</span> to their fullest
          potential.
        </p>
        <p>An ambitious entrepreneur on an exciting coding journey.</p>
        <p>
          Currently, I am self-employed and proudly own a diet catering company
          that I established from scratch a few years ago.
          <br />
          Here is a link:
          <a href="https://www.fit-x.pl" target="_blank">
            Catering Dietetyczny FIT-X
          </a> */}
        {/* </p> */}
      </div>
    </div>
  );
}

export default Content;
