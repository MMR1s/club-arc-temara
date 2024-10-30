import React, { useState } from "react";
import "../assets/css/Faq.css";
import FaqPicture from ".././assets/images/faq.jpeg";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, iure.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, iure.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, iure.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, iure.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, iure.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, iure.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <p></p>
        <div className="faq-section">
          <h2>FAQs</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <div className="faq-section-body">
            <div>
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <div
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3>{faq.question}</h3>
                    <span className="faq-toggle">
                      {activeIndex === index ? "-" : "+"}
                    </span>
                  </div>
                  {activeIndex === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                  <hr></hr>
                </div>
              ))}
            </div>
            <img src={FaqPicture} className="faq-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
