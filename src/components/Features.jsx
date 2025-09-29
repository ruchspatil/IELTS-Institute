import React from "react";

const features = [
  {
    title: "Speaking Practice",
    desc: "Improve fluency with live practice sessions.",
  },
  {
    title: "Mock Tests",
    desc: "Simulate real IELTS exams and track progress.",
  },
  {
    title: "AI Band Score",
    desc: "Instant feedback on your writing & speaking.",
  },
  {
    title: "Study Materials",
    desc: "Access premium resources and practice sets.",
  },
];

function Features() {
  return (
    <section className="features" id="courses">
      <h2>Our Features</h2>
      <div className="feature-grid">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
