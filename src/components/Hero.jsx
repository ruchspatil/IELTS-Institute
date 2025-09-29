import React from "react";
import banner from "/banner.jpg"; 

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
        <h1>
  Crack <span className="highlight">IELTS</span> with Confidence
</h1>

          <p>
            Get personalized training and <strong>AI-powered feedback</strong> to boost your band
            score. Achieve your dream score with our expert guidance!
          </p>
          <button className="btn">Join Now</button>
        </div>
        <div className="hero-img">
          <img src={banner} alt="IELTS Training" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
