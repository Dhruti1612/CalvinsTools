import  { useState } from "react";
import { Link } from "react-router-dom";
import "./RentalFAQ.css";

const RentalFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How much does it cost to rent a food trailer?",
      answer:
        "Pricing depends on the trailer, rental period (daily, weekend, weekly or monthly), delivery and add-ons. Pick a trailer and dates to see your full price instantly — including deposit, delivery and taxes — before you pay.",
    },
    {
      question: "Can you deliver the trailer to my location?",
      answer:
        "Delivery is available based on your location and the trailer you choose. Enter your ZIP code during booking to see the delivery fee.",
    },
    {
      question: "Do I need a special vehicle to tow it?",
      answer:
        "You need a tow vehicle rated for the trailer, or you can choose delivery instead.",
    },
    {
      question: "What documents do I need to rent?",
      answer:
        "You need a valid driver's license. Monthly rentals also require a Certificate of Insurance (COI), along with any local permits required for where you operate.",
    },
    {
      question: "How does the security deposit work?",
      answer:
        "A refundable security deposit is required. The amount is set based on the state and rental type.",
    },
    {
      question: "Can I extend my rental?",
      answer:
        "Rental extensions depend on availability. Contact the team to check whether your trailer can be extended.",
    },
    {
      question: "What if the trailer I want is booked?",
      answer:
        "If a trailer is booked, you can see its next open date or join the waitlist to be notified when it becomes available.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="rental-faq-section">

      <div className="rental-faq-section__container">

        {/* =================================
            TOP AREA
        ================================= */}

        <div className="rental-faq-section__top">

          <div className="rental-faq-section__heading-area">

            <div className="rental-faq-section__label">
              <span>07</span>
              <i></i>
              <strong>RENTAL FAQ</strong>
            </div>

            <h2 className="rental-faq-section__title">
              Questions before
              <br />
              <em>you rent.</em>
            </h2>

          </div>


          <div className="rental-faq-section__intro">

            <p>
              Short answers to what renters ask most. Still unsure? Call or
              WhatsApp us.
            </p>

            

          </div>

        </div>


        {/* =================================
            FAQ LIST
        ================================= */}

        <div className="rental-faq-section__list">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (
              <div
                className={`rental-faq-section__item ${
                  isOpen
                    ? "rental-faq-section__item--open"
                    : ""
                }`}
                key={faq.question}
              >

                <button
                  type="button"
                  className="rental-faq-section__question"
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


                {isOpen && (
                  <div className="rental-faq-section__answer">
                    <p>{faq.answer}</p>
                  </div>
                )}

              </div>
            );
          })}

        </div>


        {/* =================================
            RENT-TO-OWN
        ================================= */}

        <div className="rental-faq-section__rto">

          <div className="rental-faq-section__rto-content">

            <div className="rental-faq-section__rto-label">
              RENT-TO-OWN PROGRAM
            </div>

            <h3>
              Want to own your trailer over time?
            </h3>

            <p>
              Our Rent-to-Own program lets qualified customers make monthly
              payments toward owning a trailer. Apply online in about two
              minutes — our team reviews every application and replies with
              options. Subject to approval.
            </p>

            

          </div>


          <Link
            to="/rent-to-own"
            className="rental-faq-section__rto-button"
          >
            See Rent-to-Own Options →
          </Link>

        </div>

      </div>

    </section>
  );
};

export default RentalFAQ;