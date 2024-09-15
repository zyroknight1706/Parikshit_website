"use client";
import React, { useState } from "react";
import "./FAQs.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button onClick={toggleDropdown} className="faq-question">
        {question}
        {isOpen ? <FiChevronUp className="faq-icon" /> : <FiChevronDown className="faq-icon" />}
      </button>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const FAQs = () => {
  const faqData = [
    {
      question: "What is Parikshit?",
      answer: "Parikshit is the official student satellite team of MIT. We’re building a 2U cubesat.",
    },
    {
      question: "What is our payload/satellite meant for?",
      answer: "We have two payloads- primary and secondary. Primary is for thermal imaging for UHI monitoring, cloud detection, ocean detection. Secondary is for tether and deorbiting.",
    },
    {
      question: "What is a nanosatellite?",
      answer: "A nanosatellite is a small satellite with a mass typically between 1 and 10 kilograms. Cubesat is a popular nanosatellite with a standardized design, widely used for educational and research purposes.",
    },
    {
      question: "Why should you join us?",
      answer: "We are the best engineering team on campus, with expertise ranging from plasma physics to ML. If you're interested in space exploration, this is the place for you.",
    },
    {
      question: "Any prerequisites?",
      answer: "Basic physics and maths. We're looking for interesting people with interesting stories and a willingness to learn.",
    },
    {
      question: "Is my branch relevant to this?",
      answer: "Irrespective of your branch, you’re welcome to join us!",
    },
  ];

  return (
    <div className="faqs-container">
      <div className="faqs-content">
        <h1 className="faqs-title">Frequently Asked Questions</h1>
        <div className="faqs-list">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
