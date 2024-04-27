
import React from "react";
import { image } from '../data/user';


function About() {
  return (
    <div id="about">
      <h2>About</h2>
      <p>I Made This</p>
      <img src={image} alt="I am Him" />
    </div>
  );
}

export default About;
