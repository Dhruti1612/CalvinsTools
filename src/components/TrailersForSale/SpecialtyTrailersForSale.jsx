
import { Link } from "react-router-dom";
import "./SpecialtyTrailersForSale.css";

const specialtyTypes = [
  {
    image: "/Images/nail.jpg",
    title: "Nail Salon Trailer",
    text: "A mobile specialty trailer concept for businesses looking to bring nail and beauty services directly to their customers.",
  },
  {
    image: "/Images/truck6.jpg",
    title: "Retail Trailer",
    text: "A mobile retail environment for businesses that want to showcase and sell products at different locations.",
  },
  {
    image: "/Images/truck7.jpg",
    title: "Specialty Trailer",
    text: "A flexible starting point for specialty businesses with requirements beyond a traditional food trailer.",
  },
];

const buyingPoints = [
  {
    number: "01",
    title: "Explore Standard Options",
    text: "Start with a standard specialty trailer concept that matches the type of mobile business you want to operate.",
  },
  {
    number: "02",
    title: "Consider Your Layout",
    text: "Think about your workspace, customer flow, equipment, storage, and the way you plan to use the trailer.",
  },
  {
    number: "03",
    title: "Choose Your Size",
    text: "Consider the trailer size that provides the space your operation requires.",
  },
  {
    number: "04",
    title: "Go Custom When Needed",
    text: "If an existing specialty option does not fit your requirements, explore a custom trailer instead.",
  },
];

const sizes = [
  "10 ft",
  "12 ft",
  "14 ft",
  "16 ft",
  "18 ft",
  "20 ft",
  "22 ft",
];

function SpecialtyTrailersForSale() {
  return (
    <div className="specialty-sale-page">

      {/* HERO */}
      <section className="specialty-sale-hero">
        <img
          src="/Images/truck5.jpg"
          alt="Specialty trailer for sale"
          className="specialty-sale-hero-image"
        />

        <div className="specialty-sale-hero-overlay"></div>

        <div className="specialty-sale-container specialty-sale-hero-content">
          <span className="specialty-sale-eyebrow">
            TRAILERS FOR SALE
          </span>

          <h1>
            Specialty Trailers for Sale
          </h1>

          <p>
            Explore standard specialty trailer options for mobile businesses
            beyond traditional food service.
          </p>

          <div className="specialty-sale-hero-actions">
            <a
              href="#specialty-trailers"
              className="specialty-sale-btn specialty-sale-btn-primary"
            >
              VIEW SPECIALTY TRAILERS
            </a>

            <Link
              to="/custom-trailers"
              className="specialty-sale-btn specialty-sale-btn-outline"
            >
              EXPLORE CUSTOM BUILDS
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="specialty-sale-section">
        <div className="specialty-sale-container specialty-sale-two-column">

          <div>
            <span className="specialty-sale-section-label">
              SPECIALTY TRAILERS
            </span>

            <h2>
              A Mobile Space for More Than Food
            </h2>
          </div>

          <div className="specialty-sale-intro-text">
            <p>
              Specialty trailers give businesses another way to take their
              services or products directly to customers.
            </p>

            <p>
              Whether you are building a mobile beauty business, retail
              operation, or another specialty concept, the right trailer
              starts with understanding how you plan to use the space.
            </p>

            <Link
              to="/contact"
              className="specialty-sale-text-link"
            >
              Ask about a specialty trailer →
            </Link>
          </div>

        </div>
      </section>

      {/* SPECIALTY TRAILERS */}
      <section
        className="specialty-sale-section specialty-sale-alt"
        id="specialty-trailers"
      >
        <div className="specialty-sale-container">

          <div className="specialty-sale-heading">
            <span className="specialty-sale-section-label">
              STANDARD SPECIALTY TRAILERS
            </span>

            <h2>
              Explore Specialty Options
            </h2>

            <p>
              Explore standard concepts that can serve as a starting point
              for different types of mobile businesses.
            </p>
          </div>

          <div className="specialty-sale-trailer-grid">

            {specialtyTypes.map((trailer) => (
              <article
                className="specialty-sale-trailer-card"
                key={trailer.title}
              >
                <div className="specialty-sale-card-image">
                  <img
                    src={trailer.image}
                    alt={trailer.title}
                  />
                </div>

                <div className="specialty-sale-card-content">
                  <span className="specialty-sale-card-label">
                    SPECIALTY TRAILER
                  </span>

                  <h3>{trailer.title}</h3>

                  <p>{trailer.text}</p>

                  <Link to="/contact">
                    Inquire About This Trailer →
                  </Link>
                </div>
              </article>
            ))}

          </div>

        </div>
      </section>

      {/* BUYING POINTS */}
      <section className="specialty-sale-section">
        <div className="specialty-sale-container">

          <div className="specialty-sale-heading">
            <span className="specialty-sale-section-label">
              BUYING A SPECIALTY TRAILER
            </span>

            <h2>
              Start With the Right Foundation
            </h2>

            <p>
              A standard specialty trailer can provide a starting point for
              your mobile business when an existing concept fits your needs.
            </p>
          </div>

          <div className="specialty-sale-buy-grid">

            {buyingPoints.map((point) => (
              <article
                className="specialty-sale-buy-card"
                key={point.number}
              >
                <span>{point.number}</span>

                <h3>{point.title}</h3>

                <p>{point.text}</p>
              </article>
            ))}

          </div>

        </div>
      </section>

      {/* SIZES */}
      <section className="specialty-sale-section specialty-sale-alt">
        <div className="specialty-sale-container specialty-sale-size-section">

          <div>
            <span className="specialty-sale-section-label">
              SHOP BY SIZE
            </span>

            <h2>
              Find the Right Trailer Size
            </h2>

            <p>
              Consider your services, equipment, storage, customer space,
              and workflow when choosing a trailer size.
            </p>
          </div>

          <div className="specialty-sale-size-grid">

            {sizes.map((size) => (
              <Link
                to="/contact"
                className="specialty-sale-size-card"
                key={size}
              >
                <span>{size}</span>
                <small>View Options →</small>
              </Link>
            ))}

          </div>

        </div>
      </section>

      {/* SPECIALTY EXAMPLES */}
      <section className="specialty-sale-section">
        <div className="specialty-sale-container specialty-sale-examples">

          <div className="specialty-sale-examples-image">
            <img
              src="/Images/truck3.jpeg"
              alt="Specialty trailer"
            />
          </div>

          <div className="specialty-sale-examples-content">

            <span className="specialty-sale-section-label">
              MOBILE BUSINESS IDEAS
            </span>

            <h2>
              Build Your Business Beyond a Traditional Storefront
            </h2>

            <p>
              Specialty trailers can be used for different mobile business
              concepts. The right setup depends on what you offer and how
              you want customers to interact with your business.
            </p>

            <div className="specialty-sale-example-list">

              <div>
                <strong>Beauty</strong>
                <span>
                  Mobile nail and beauty service concepts.
                </span>
              </div>

              <div>
                <strong>Retail</strong>
                <span>
                  Mobile product displays and retail operations.
                </span>
              </div>

              <div>
                <strong>Specialty</strong>
                <span>
                  Other business concepts requiring a dedicated mobile space.
                </span>
              </div>

            </div>

            <Link
              to="/custom-trailers"
              className="specialty-sale-btn specialty-sale-btn-dark"
            >
              EXPLORE CUSTOM TRAILERS
            </Link>

          </div>

        </div>
      </section>

      {/* STANDARD VS CUSTOM */}
      <section className="specialty-sale-section specialty-sale-alt">
        <div className="specialty-sale-container specialty-sale-compare">

          <div className="specialty-sale-compare-content">

            <span className="specialty-sale-section-label">
              STANDARD OR CUSTOM?
            </span>

            <h2>
              Need a Trailer Built Around Your Exact Concept?
            </h2>

            <p>
              Standard specialty trailers provide established options for
              different mobile businesses. If your requirements are more
              specific, a custom trailer gives you a separate path for
              building around your operation.
            </p>

            <div className="specialty-sale-compare-list">

              <div>
                <strong>Buy</strong>
                <span>
                  Choose from standard specialty trailer options.
                </span>
              </div>

              <div>
                <strong>Custom</strong>
                <span>
                  Build around your specific business requirements.
                </span>
              </div>

            </div>

            <Link
              to="/custom-trailers"
              className="specialty-sale-btn specialty-sale-btn-dark"
            >
              EXPLORE CUSTOM BUILDS
            </Link>

          </div>

          <div className="specialty-sale-compare-image">
            <img
              src="/Images/truck7.jpg"
              alt="Custom trailer build"
            />
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="specialty-sale-cta">
        <div className="specialty-sale-container">

          <span className="specialty-sale-section-label">
            READY TO START?
          </span>

          <h2>
            Find the Right Specialty Trailer for Your Business
          </h2>

          <p>
            Tell us what you are looking for and we'll help you understand
            the next steps.
          </p>

          <Link
            to="/contact"
            className="specialty-sale-btn specialty-sale-btn-light"
          >
            START AN INQUIRY
          </Link>

        </div>
      </section>

      

    </div>
  );
}

export default SpecialtyTrailersForSale;