import React from "react";
import "../styles/about.css";
export default function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="banner">
        <h1 className="quote-text">
          "Accept the challenges so that you can feel the exhilaration of victory"
          <br></br>-George Patton
        </h1>
      </div>
      <div className="who-am-i">
        <div className="who-am-i-text-container about-text-container">
          <h2 className="who-am-i-header">Who am I?</h2>
          <p className="who-am-i-paragraph about-text">
            Hi there! My name is Dylan, and I am a 20 year old who is heavily interested in software development. During my time at
            university, I completed my Bachelor's degree in Finance with a minor in Computer Information Systems in 2 years. Recently,
            I have restarted my learning journey as I am looking to make a shift professionally, from finance to software. I have
            developed a mindset which accepts that I do not know everything, and am willing to learn anything.
          </p>
        </div>
        <div className="who-am-i-image-container about-img-container">
          <img className="who-am-i-image about-img" src="/who-am-i-img.png" />
        </div>
      </div>

      <div className="in-my-freetime">
        <div className="in-my-freetime-image-container about-img-container">
          <img className="in-my-freetime-image about-img" src="/pickleball-player.png" />
        </div>
        <div className="in-my-freetime-text-container about-text-container">
          <h2 className="in-my-freetime-header">In my freetime?</h2>
          <p className="in-my-freetime-paragraph about-text">
            I have always enjoyed playing sports and staying active in my freetime. I believe this is a good mental and physical reset
            after a long day of technical work. Currently, I play pickleball and soccer at my local rec league. Yes - pickleball the
            "old man's sport" - is quite fun even when you're young.
          </p>
        </div>
      </div>
      <div className="portfolio-link">
        <div className="portfolio-link-text-container about-text-container">
          <h2 className="portfolio-link-header">Want to see more?</h2>
          <p className="portfolio-link-paragraph about-text">
            Please feel free to check out my web portfolio at{" "}
            <span>
              <a className="web-portfolio-link" href="https://dylanscriven.netlify.app" target="_blank">
                dylanscriven.netlify.app
              </a>
            </span>
            .
          </p>
          <p className="about-text">Contact Info:</p>
          <p className="about-text">
            LinkedIn:{" "}
            <a className="web-portfolio-link" href="https://linkedin.com/in/dylanscriven" target="_blank">
              @dylanscriven
            </a>
          </p>
          <p className="about-text">Phone: 716-490-5909</p>
          <p className="about-text">Email: dscriven16@gmail.com</p>
        </div>
        <div className="portfolio-link-image-container about-img-container">
          <img className="portfolio-link-image about-img" src="/webportfolio.jpg" />
        </div>
      </div>
    </div>
  );
}
