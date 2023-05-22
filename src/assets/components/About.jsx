import React from "react";
import "../styles/about.css";
export default function Berries() {
  return (
    <div className="page-container">
      <div className="left-box">
        <div className="img-container">
          <img
            alt="picture of creator"
            className="dylan-image"
            src="https://i.ibb.co/wRYM5Wp/IMG-3714.png"
          />
        </div>
        <div className="div-one">
          <h1>Who Am I?</h1>
          <p>
            I am a self-taught programmer who has built this website with no
            guide or hand-holding. This is a complete bottoms-up project that
            showcases my knowledge of web development. Anyone can copy a project
            they code along with from youtube, but I thought it would be much
            more valuable to display my true, confident, and genuine skills with
            this handcrafted project.
          </p>
        </div>
      </div>
      <div className="right-box">
        <div className="div-two">
          <h1>What's My Goal?</h1>
          <p>
            I am attempting to imporove my design and programming skills by
            building projects that introduce me to new technologies and
            reinforce familiar ones. This will set me up to become the best
            developer I can be.
          </p>
        </div>

        <div className="div-three">
          <h1>What's Next</h1>
          <p>
            If you are a potential employer I would be very excited to hear from
            you at one of the following contact points!
          </p>
          <ul>
            <li>Email: dscriven16@gmail.com</li>
            <li>Phone: 716-490-5909</li>
            <li>
              LinkedIn:{" "}
              <a href="https://linkedin.com/in/dylanscriven">
                linkedin.com/in/dylanscriven
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
