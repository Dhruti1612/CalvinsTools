import  { useState } from "react";
import "./CustomFAQ.css";

const CustomFAQ = () => {
  const [activeFAQ, setActiveFAQ] = useState(0);

  const faqs = [
    {
      question: "How much does a custom food trailer cost?",
      answer:
        "It depends on size, equipment and finishes. Starting from a base model keeps cost predictable — configure your build online and our team sends a written quote after review.",
    },
    {
      question: "How long does a custom build take?",
      answer:
        "Typical build time is about 6 months from approved drawings.",
    },
    {
      question: "Can I start from one of your trailers and change it?",
      answer:
        "Most builds start from a proven base model. You can change the equipment, layout, finishes and branding from there.",
    },
    {
      question: "Will my trailer pass inspection?",
      answer:
        "Each build is documented for inspection, with compliance documents provided for the applicable requirements.",
    },
    {
      question: "Can I see progress during the build?",
      answer:
        "Yes. Photo updates are provided from the production floor during the build.",
    },
    {
      question: "Do you deliver custom trailers?",
      answer:
        "Pickup or delivery options are available for completed custom trailers.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <section className="custom-build-faq">

      <div className="custom-build-faq__container">

        {/* =================================
            TOP AREA
        ================================= */}

        <div className="custom-build-faq__top">

          {/* LEFT */}

          <div className="custom-build-faq__heading-area">

            <div className="custom-build-faq__label">
              <span>06</span>
              <i></i>
              <strong>CUSTOM BUILD FAQ</strong>
            </div>

            <h2 className="custom-build-faq__title">
              Questions before
              <br />
              <em>you build.</em>
            </h2>

          </div>


          {/* RIGHT */}

          <div className="custom-build-faq__intro">

            <p>
              What custom buyers ask most. Still unsure? Talk to our
              Custom Build team.
            </p>

           

          </div>

        </div>


        {/* =================================
            FAQ LIST
        ================================= */}

        <div className="custom-build-faq__list">

          {faqs.map((faq, index) => {

            const isOpen = activeFAQ === index;

            return (
              <article
                className={`custom-build-faq__item ${
                  isOpen
                    ? "custom-build-faq__item--open"
                    : ""
                }`}
                key={faq.question}
              >

                <button
                  type="button"
                  className="custom-build-faq__question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >

                  <span>
                    {faq.question}
                  </span>

                  <strong>
                    {isOpen ? "−" : "+"}
                  </strong>

                </button>


                <div
                  className={`custom-build-faq__answer ${
                    isOpen
                      ? "custom-build-faq__answer--open"
                      : ""
                  }`}
                >

                  <p>
                    {faq.answer}
                  </p>

                </div>

              </article>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default CustomFAQ;