// src/components/FAQs.tsx
import React, { useState } from 'react';

// Define the FAQ item structure
interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'How does URL shortening work?',
    answer:
      'URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.',
  },
  {
    question: 'Is it necessary to create an account to use the URL shortening service?',
    answer:
      'No, it is not necessary to create an account to use the URL shortening service. However, creating an account provides additional features like tracking and analytics.',
  },
  {
    question: 'Are the shortened links permanent? Will they expire?',
    answer:
      'The permanence of shortened links depends on the service provider. Some shortened links may expire after a set period, while others can remain active indefinitely.',
  },
  {
    question: 'Are there any limitations on the number of URLs I can shorten?',
    answer:
      'There may be limitations based on the plan you select. Free users might have a limit, while premium plans generally allow unlimited URL shortening.',
  },
  {
    question: 'Can I customize the shortened URLs to reflect my brand or content?',
    answer:
      'Yes, with Scissors, you can create custom URLs that reflect your brand or content for better user engagement and recognition.',
  },
  {
    question: 'Can I track the performance of my shortened URLs?',
    answer:
      'Yes, Scissors provides advanced analytics to track the performance of your shortened URLs, including click-through rates and geographic data.',
  },
  {
    question: 'How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?',
    answer:
      'Scissors takes security seriously and implements measures to protect against spam and malicious activity. We offer advanced security features depending on your plan.',
  },
  {
    question: 'What is a QR code and what can it do?',
    answer:
      'A QR code is a type of matrix barcode that can be scanned by a device to quickly access a URL or other information. Scissors allows you to generate QR codes for your URLs.',
  },
  {
    question: 'Is there an API available for integrating the URL shortening service into my own applications or websites?',
    answer:
      'Yes, Scissors provides an API for developers to integrate URL shortening and management features into their own applications or websites.',
  },
];

const FAQs: React.FC = () => {
  // Store the index of the currently active question
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Toggle active question
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active state
  };

  return (
    <section className="questions" id="questions">
      <div className="question-title-container">
        <div className="section-title-bar"></div>
        <h1 className="question-title">FAQs</h1>
      </div>
      <div className="section-center question-center">
        {faqData.map((faq, index) => (
          <article
            key={index}
            className={`question ${activeIndex === index ? 'active' : ''}`}
          >
            <div className="question-header">
              <h2 className="question-header-title">{faq.question}</h2>
              <button
                className="question-btn"
                onClick={() => toggleFAQ(index)}
              >
                <i
                  className={`fa-solid ${
                    activeIndex === index ? 'fa-minus' : 'fa-plus'
                  } fa-lg`}
                ></i>
              </button>
            </div>
            {activeIndex === index && (
              <p className="question-body">{faq.answer}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
export {}; // This ensures the file is treated as a module
