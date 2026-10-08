
import { Link } from "react-router-dom";
import "./About.css";

const values = [
  {
    number: "01",
    title: "Quality First",
    text: "We focus on building and providing trailer solutions with quality, functionality, and attention to detail at every stage."
  },
  {
    number: "02",
    title: "Built Around You",
    text: "Every business has different requirements. We help you find or create a trailer that fits the way you plan to operate."
  },
  {
    number: "03",
    title: "Straightforward Service",
    text: "From your first inquiry to pickup or delivery, our goal is to keep the process clear, organized, and easy to understand."
  },
  {
    number: "04",
    title: "Business Focused",
    text: "Whether you're starting something new or expanding an existing operation, our trailer solutions are designed around real business needs."
  }
];

function About() {
  return (
    <div className="about-page">

      


      {/* ================= HERO ================= */}

      <section className="about-hero">

        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">

          <span className="about-eyebrow">
            ABOUT CALVIN'S TOOLS
          </span>

          <h1>
            Trailers Built
            <br />
            Around Your Business
          </h1>

          <p>
            From rentals to ready-to-buy trailers and custom builds,
            we provide practical trailer solutions for businesses
            ready to get moving.
          </p>

        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="about-intro section-padding">

        <div className="about-intro-inner">

          <div className="about-intro-heading">

            <span className="section-eyebrow">
              WHO WE ARE
            </span>

            <h2>
              More Than
              <br />
              Just a Trailer
            </h2>

          </div>

          <div className="about-intro-text">

            <p>
              At Calvin's Tools, we provide trailer solutions for
              businesses that need flexibility, functionality, and
              a straightforward way to get started.
            </p>

            <p>
              Whether you need a trailer for a short-term event,
              are ready to purchase your next trailer, or have a
              specific idea that requires a custom build, we offer
              three ways to work with us: Rent, Buy, and Custom.
            </p>

            <p>
              Our focus is on understanding what you need and
              helping you find a solution that works for your
              business.
            </p>

          </div>

        </div>

      </section>


      {/* ================= THREE WAYS ================= */}

      <section className="about-services section-padding">

        <div className="about-section-heading">

          <span className="section-eyebrow">
            WHAT WE DO
          </span>

          <h2>
            Three Ways
            <br />
            to Get Moving
          </h2>

        </div>

        <div className="about-services-grid">

          <Link
            to="/trailer-rental"
            className="about-service-card"
          >

            <span className="service-number">
              01
            </span>

            <div className="service-image">
              <img
                src="/images/rental-food.jpg"
                alt="Food trailer rental"
              />
            </div>

            <div className="service-content">

              <h3>Rent</h3>

              <p>
                Flexible food and specialty trailer rentals
                for businesses, events, and short-term needs.
              </p>

              <span className="service-link">
                Explore Rentals →
              </span>

            </div>

          </Link>


          <Link
            to="/trailers-for-sale"
            className="about-service-card"
          >

            <span className="service-number">
              02
            </span>

            <div className="service-image">
              <img
                src="/images/trailer-sale.jpg"
                alt="Trailer for sale"
              />
            </div>

            <div className="service-content">

              <h3>Buy</h3>

              <p>
                Ready-to-buy trailers for businesses looking
                for a standard trailer solution.
              </p>

              <span className="service-link">
                View Trailers →
              </span>

            </div>

          </Link>


          <Link
            to="/custom-trailers"
            className="about-service-card"
          >

            <span className="service-number">
              03
            </span>

            <div className="service-image">
              <img
                src="/images/custom-build.jpg"
                alt="Custom trailer build"
              />
            </div>

            <div className="service-content">

              <h3>Custom</h3>

              <p>
                Build-to-order trailer solutions designed
                around your specific business requirements.
              </p>

              <span className="service-link">
                Start a Build →
              </span>

            </div>

          </Link>

        </div>

      </section>


      {/* ================= IMAGE + STORY ================= */}

      <section className="about-story section-padding">

        <div className="about-story-grid">

          <div className="about-story-image">

            <img
              src="/images/hero-custom.jpg"
              alt="Custom trailer"
            />

          </div>

          <div className="about-story-content">

            <span className="section-eyebrow">
              OUR APPROACH
            </span>

            <h2>
              Designed With
              <br />
              Your Business in Mind
            </h2>

            <p>
              Choosing a trailer is an important decision for
              any mobile business. The right layout, equipment,
              size, and functionality can make a difference in
              how efficiently you operate.
            </p>

            <p>
              That's why our approach starts with understanding
              what you're trying to accomplish. From there, we
              can help you explore an existing trailer or discuss
              a custom solution.
            </p>

            <Link
              to="/how-it-works"
              className="about-text-link"
            >
              See How It Works →
            </Link>

          </div>

        </div>

      </section>


      {/* ================= VALUES ================= */}

      <section className="about-values section-padding">

        <div className="about-section-heading">

          <span className="section-eyebrow">
            WHAT MATTERS TO US
          </span>

          <h2>
            Our Approach
          </h2>

        </div>

        <div className="about-values-grid">

          {values.map((value) => (

            <div
              className="about-value-card"
              key={value.number}
            >

              <span className="value-number">
                {value.number}
              </span>

              <h3>
                {value.title}
              </h3>

              <p>
                {value.text}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* ================= QUALITY ================= */}

      <section className="about-quality">

        <div className="about-quality-content">

          <span className="section-eyebrow">
            QUALITY & COMPLIANCE
          </span>

          <h2>
            Built With
            <br />
            Quality in Mind
          </h2>

          <p>
            We take quality and compliance seriously. Trailer
            components and systems are selected with safety,
            functionality, and applicable requirements in mind.
          </p>

          <Link
            to="/certifications"
            className="about-quality-button"
          >
            VIEW CERTIFICATIONS
          </Link>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="about-cta">

        <div className="about-cta-content">

          <span className="section-eyebrow">
            READY TO GET STARTED?
          </span>

          <h2>
            Let's Find the Right
            <br />
            Trailer for You.
          </h2>

          <p>
            Tell us what you're looking for and we'll help you
            explore the right rental, purchase, or custom option.
          </p>

          <Link
            to="/contact"
            className="about-cta-button"
          >
            GET IN TOUCH
          </Link>

        </div>

      </section>


      

    </div>
  );
}

export default About;