
import { Link } from "react-router-dom";
import "./HowItWorks.css";
import CTA from "../Home/CTA";

const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Rent, buy or build — share your menu or service, dates and budget by form, phone or WhatsApp.",
    image: "/Images/truck2.jpeg",
  },
  {
    number: "02",
    title: "Choose Your Trailer",
    description:
      "Pick a rental from the current fleet, a standard trailer for sale, or a base model for your custom build.",
    image: "/Images/truck7.jpg",
  },
  {
    number: "03",
    title: "Inspection & Paperwork",
    description:
      "We complete a photo inspection report and hand you the compliance documents your local inspector asks for.",
    image: "/Images/truck10.jpg",
  },
  {
    number: "04",
    title: "Pick Up & Start Serving",
    description:
      "A walk-through at handover, then real support while you operate — by phone, WhatsApp or in person.",
    image: "/Images/truck1.jpeg",
  },
];

const options = [
  {
    number: "01",
    title: "Rent",
    description:
      "Choose from the current rental fleet for your menu, event or season.",
    link: "/trailer-rental",
    button: "EXPLORE RENTALS →",
  },
  {
    number: "02",
    title: "Buy",
    description:
      "Choose a standard, ready-to-buy trailer configuration.",
    link: "/trailers-for-sale",
    button: "VIEW TRAILERS FOR SALE →",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Start from a base model and adapt it around your menu, equipment and brand.",
    link: "/custom-trailers",
    button: "START YOUR CUSTOM BUILD →",
  },
];

function HowItWorks() {
  return (
    <div className="how-page">

     


      {/* HERO */}
      <section className="how-hero">

        <div className="how-hero-overlay"></div>

        <div className="how-hero-content">

          <span className="how-label">
            HOW IT WORKS
          </span>

          <h1>
            Choose it.
            <br />
            Check it.
            <br />
            Roll with it.
          </h1>

          <p>
            Rent, buy or build — the process is the same four
            steps, with inspection documents and a photo report
            before every handover.
          </p>

          <a
            href="#steps"
            className="how-btn-primary"
          >
            SEE THE PROCESS ↓
          </a>

        </div>

      </section>


      {/* INTRO */}
      <section className="how-intro">

        <div>

          <span className="how-label">
            ONE SIMPLE PROCESS
          </span>

          <h2>
            From your idea
            <br />
            to the road.
          </h2>

        </div>

        <div className="how-intro-text">

          <p>
            Whether you want to rent for a season, buy a standard
            trailer or create a custom build, the process starts
            with understanding what your business needs.
          </p>

          <p>
            Our team helps you choose the right trailer, complete
            the inspection and paperwork, and prepare for handover.
          </p>

        </div>

      </section>


      {/* FOUR STEPS */}
      <section
        className="how-steps"
        id="steps"
      >

        <div className="how-section-heading">

          <span className="how-label">
            THE FOUR STEPS
          </span>

          <h2>
            A clear path
            <br />
            forward.
          </h2>

        </div>


        <div className="how-step-list">

          {steps.map((step) => (

            <article
              className="how-step"
              key={step.number}
            >

              <div className="how-step-image">

                <img
                  src={step.image}
                  alt={step.title}
                />

              </div>

              <div className="how-step-content">

                <span className="how-step-number">
                  {step.number}
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

      </section>


      {/* CHOOSE YOUR PATH */}
      <section className="how-options">

        <div className="how-options-heading">

          <span className="how-label">
            RENT · BUY · BUILD
          </span>

          <h2>
            Three ways
            <br />
            to get moving.
          </h2>

          <p>
            Choose the path that fits your business today.
          </p>

        </div>


        <div className="how-options-grid">

          {options.map((option) => (

            <article
              className="how-option"
              key={option.number}
            >

              <span>
                {option.number}
              </span>

              <h3>
                {option.title}
              </h3>

              <p>
                {option.description}
              </p>

              <Link to={option.link}>
                {option.button}
              </Link>

            </article>

          ))}

        </div>

      </section>


      {/* INSPECTION */}
      <section className="how-inspection">

        <div className="how-inspection-image">

          <img
            src="/Images/truck3.jpeg"
            alt="Trailer inspection"
          />

        </div>

        <div className="how-inspection-content">

          <span className="how-label">
            INSPECTION & PAPERWORK
          </span>

          <h2>
            Know what you're
            <br />
            getting.
          </h2>

          <p>
            Before handover, the trailer goes through the inspection
            and documentation process. A photo inspection report
            accompanies the trailer along with the compliance
            documents your local inspector asks for.
          </p>

          <div className="inspection-points">

            <div>
              <span>01</span>
              <strong>
                Photo Inspection Report
              </strong>
              <p>
                A photo-by-photo record is provided as part of
                the handover process.
              </p>
            </div>

            <div>
              <span>02</span>
              <strong>
                Compliance Documents
              </strong>
              <p>
                Documentation is provided for the inspection
                requirements applicable to your trailer.
              </p>
            </div>

            <div>
              <span>03</span>
              <strong>
                Local Approval
              </strong>
              <p>
                Final health and fire approval is made by your
                local authority having jurisdiction.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* HANDOVER */}
      <section className="how-handover">

        <div className="how-handover-content">

          <span className="how-label">
            FINAL STEP
          </span>

          <h2>
            Pick up.
            <br />
            Start serving.
          </h2>

          <p>
            At handover, you'll get a walk-through of the trailer.
            Once you're on the road, our team remains available
            by phone, WhatsApp or in person.
          </p>

          <div className="how-handover-links">

            <Link
              to="/trailer-rental"
              className="how-btn-primary"
            >
              RENT YOUR TRAILER NOW →
            </Link>

            <Link
              to="/trailers-for-sale"
              className="how-btn-dark"
            >
              GET YOUR TRAILER TODAY →
            </Link>

          </div>

        </div>

      </section>


      {/* FAQ-STYLE INFO */}
      <section className="how-info">

        <div className="how-info-heading">

          <span className="how-label">
            BEFORE YOU START
          </span>

          <h2>
            What should
            <br />
            you have ready?
          </h2>

        </div>

        <div className="how-info-list">

          <div className="how-info-item">

            <span>01</span>

            <div>
              <h3>
                Your menu or service
              </h3>

              <p>
                Tell us what you plan to serve, sell or offer
                from the trailer.
              </p>
            </div>

          </div>


          <div className="how-info-item">

            <span>02</span>

            <div>
              <h3>
                Your preferred trailer type
              </h3>

              <p>
                If you're not sure, our team can help you
                determine a suitable starting point.
              </p>
            </div>

          </div>


          <div className="how-info-item">

            <span>03</span>

            <div>
              <h3>
                Your timing and budget
              </h3>

              <p>
                Share the dates you're considering and your
                budget so the team can understand your requirements.
              </p>
            </div>

          </div>

        </div>

      </section>


      <CTA />

      

    </div>
  );
}

export default HowItWorks;