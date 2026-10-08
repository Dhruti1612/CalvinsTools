
import { Link } from "react-router-dom";
import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    image: "/Images/truck5.jpg",
    caption: "PHOTO: team on a call / WhatsApp",
    description:
      "Rent, buy or build — share your menu or service, dates and budget by form, phone or WhatsApp.",
  },
  {
    number: "02",
    title: "Choose Your Trailer",
    image: "/Images/truck6.jpg",
    caption: "PHOTO: fleet / stock line-up",
    description:
      "Pick a rental from the current fleet, a standard trailer for sale, or a base model for your custom build.",
  },
  {
    number: "03",
    title: "Inspection & Paperwork",
    image: "/Images/truck10.jpg",
    caption: "PHOTO: QC inspection in progress",
    description:
      "We complete a photo inspection report and provide the compliance documents your local inspector asks for.",
  },
  {
    number: "04",
    title: "Pick Up & Start Serving",
    image: "/Images/truck5.jpg",
    caption: "PHOTO: handover with customer",
    description:
      "A walk-through at handover, then real support while you operate — by phone, WhatsApp or in person.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-it-works__container">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="how-it-works__top">

          <div className="how-it-works__section-label">
            <span className="how-it-works__number">
              02
            </span>

            <span className="how-it-works__line"></span>

            <span className="how-it-works__label">
              HOW IT WORKS
            </span>
          </div>

        </div>


        {/* =====================================================
            HEADING + DESCRIPTION
        ===================================================== */}

        <div className="how-it-works__intro">

          <h2 className="how-it-works__title">
            Choose it.{" "}
            <em>Check it.</em>
            <br />
            <span>Roll with it.</span>
          </h2>


          <div className="how-it-works__intro-text">

            <span className="how-it-works__intro-line"></span>

            <p>
              Rent, buy or build — the process is the same four steps,
              with inspection documents and a photo report before
              every handover.
            </p>

          </div>

        </div>


        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <div className="how-it-works__divider"></div>


        {/* =====================================================
            STEPS
        ===================================================== */}

        <div className="how-it-works__steps">

          {steps.map((step) => (
            <article
              className="how-it-works__step"
              key={step.number}
            >

              {/* IMAGE */}

              <div className="how-it-works__image-wrapper">

                <img
                  src={step.image}
                  alt={step.title}
                  className="how-it-works__image"
                />

                <div className="how-it-works__image-pattern"></div>

                <div className="how-it-works__caption">
                  {step.caption}
                </div>

              </div>


              {/* CONTENT */}

              <div className="how-it-works__content">

                <span className="how-it-works__step-label">
                  STEP {step.number}
                </span>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

              </div>

            </article>
          ))}

        </div>


        {/* =====================================================
            CTA BUTTONS
        ===================================================== */}

        <div className="how-it-works__actions">

          <Link
            to="/trailer-rental"
            className="how-it-works__button how-it-works__button--orange"
          >
            RENT YOUR TRAILER NOW
            <span>→</span>
          </Link>

          <Link
            to="/contact"
            className="how-it-works__button how-it-works__button--dark"
          >
            GET YOUR TRAILER TODAY
            <span>→</span>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;