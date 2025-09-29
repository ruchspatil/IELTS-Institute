import React from "react";

const testimonials = [
  {
    name: "Ananya Sharma",
    review: "The mock tests felt just like the real exam. I improved my score!",
  },
  {
    name: "Ravi Kumar",
    review: "Amazing speaking practice sessions. Boosted my confidence a lot.",
  },
  {
    name: "Sophia D’Souza",
    review: "The AI Band Score feedback was spot-on. Very helpful!",
  },
  {
    name: "Ananya Sharma",
    review: "The mock tests felt just like the real exam. I improved my score!",
  },
  {
    name: "Ravi Kumar",
    review: "Amazing speaking practice sessions. Boosted my confidence a lot.",
  },
  {
    name: "Ananya Sharma",
    review: "The mock tests felt just like the real exam. I improved my score!",
  },
  {
    name: "Ravi Kumar",
    review: "Amazing speaking practice sessions. Boosted my confidence a lot.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="about">
      <h2>What Our Students Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <p>"{t.review}"</p>
            <h4>- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
