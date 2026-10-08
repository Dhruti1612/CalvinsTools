
import { Link } from "react-router-dom";
import "./FoodTrailersForSale.css";

const trailerTypes = [
  {
    image: "/Images/truck1.jpeg",
    title: "All-Purpose Food Trailer",
    text: "A flexible food trailer option for businesses looking for a practical mobile food operation.",
  },
  {
    image: "/Images/latin.jpg",
    title: "Latin Street Food Trailer",
    text: "A food trailer concept suited to street-food operations and mobile service.",
  },
  {
    image: "/Images/bbq.jpg",
    title: "BBQ Trailer",
    text: "A mobile setup for businesses built around BBQ and outdoor food service.",
  },
  {
    image: "/Images/coffee.jpg",
    title: "Coffee Trailer",
    text: "A compact mobile concept for coffee and beverage-focused operations.",
  },
  {
    image: "/Images/icecream.jpg",
    title: "Ice Cream Trailer",
    text: "A mobile retail and service environment for ice cream and frozen treats.",
  },
];

const buyingPoints = [
  {
    number: "01",
    title: "Standard Options",
    text: "Explore standard food trailer concepts designed for different types of mobile food businesses.",
  },
  {
    number: "02",
    title: "Choose Your Size",
    text: "Consider the trailer size that makes sense for your operation, menu, equipment, and workflow.",
  },
  {
    number: "03",
    title: "Ready to Own",
    text: "Buying gives you a trailer you can make part of your long-term mobile business operation.",
  },
  {
    number: "04",
    title: "Need Something Different?",
    text: "If a standard trailer does not fit your requirements, explore a custom build instead.",
  },
];

const sizes = ["10 ft", "12 ft", "14 ft", "16 ft", "18 ft", "20 ft", "22 ft"];

function FoodTrailersForSale() {
  return (
    <div className="food-sale-page">

      {/* HERO */}
      <section className="food-sale-hero">
        <img
          src="/Images/truck4.jpg"
          alt="Food trailer for sale"
          className="food-sale-hero-image"
        />

        <div className="food-sale-hero-overlay"></div>

        <div className="food-sale-container food-sale-hero-content">
          <span className="food-sale-eyebrow">
            TRAILERS FOR SALE
          </span>

          <h1>
            Food Trailers for Sale
          </h1>

          <p>
            Explore standard food trailer options for building your mobile
            food business.
          </p>

          <div className="food-sale-hero-actions">
            <a
              href="#food-trailer-for-sale"
              className="food-sale-btn food-sale-btn-primary"
            >
              VIEW FOOD TRAILERS
            </a>

            <Link
              to="/custom-trailers"
              className="food-sale-btn food-sale-btn-outline"
            >
              EXPLORE CUSTOM BUILDS
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="food-sale-section">
        <div className="food-sale-container food-sale-two-column">

          <div>
            <span className="food-sale-section-label">
              FOOD TRAILERS
            </span>

            <h2>
              Find a Trailer That Fits Your Food Business
            </h2>
          </div>

          <div className="food-sale-intro-text">
            <p>
              Standard food trailers give you a starting point for building
              a mobile food operation without starting with a completely
              custom build.
            </p>

            <p>
              Explore the available food trailer concepts and consider the
              size, layout, menu, equipment, and workflow that fit your
              business.
            </p>

            <Link
              to="/contact"
              className="food-sale-text-link"
            >
              Ask about a food trailer →
            </Link>
          </div>

        </div>
      </section>

      {/* TRAILER GRID */}
      <section
        className="food-sale-section food-sale-alt"
        id="food-trailer-for-sale"
      >
        <div className="food-sale-container">

          <div className="food-sale-heading">
            <span className="food-sale-section-label">
              STANDARD FOOD TRAILERS
            </span>

            <h2>
              Explore Food Trailer Options
            </h2>

            <p>
              These standard concepts give you a starting point for your
              mobile food business.
            </p>
          </div>

          <div className="food-sale-trailer-grid">
            {trailerTypes.map((trailer) => (
              <article
                className="food-sale-trailer-card"
                key={trailer.title}
              >
                <div className="food-sale-card-image">
                  <img
                    src={trailer.image}
                    alt={trailer.title}
                  />
                </div>

                <div className="food-sale-card-content">
                  <span className="food-sale-card-label">
                    FOOD TRAILER
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

      {/* BUYING BENEFITS */}
      <section className="food-sale-section">
        <div className="food-sale-container">

          <div className="food-sale-heading">
            <span className="food-sale-section-label">
              BUYING A TRAILER
            </span>

            <h2>
              Start With a Standard Trailer
            </h2>

            <p>
              A standard trailer can be a practical starting point when
              your business needs fit an existing concept.
            </p>
          </div>

          <div className="food-sale-buy-grid">
            {buyingPoints.map((point) => (
              <article
                className="food-sale-buy-card"
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
      <section className="food-sale-section food-sale-alt">
        <div className="food-sale-container food-sale-size-section">

          <div>
            <span className="food-sale-section-label">
              SHOP BY SIZE
            </span>

            <h2>
              Choose Your Trailer Size
            </h2>

            <p>
              Trailer size can affect your available workspace, equipment,
              storage, and overall workflow.
            </p>
          </div>

          <div className="food-sale-size-grid">
            {sizes.map((size) => (
              <Link
                to="/contact"
                className="food-sale-size-card"
                key={size}
              >
                <span>{size}</span>
                <small>View Options →</small>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* STANDARD VS CUSTOM */}
      <section className="food-sale-section">
        <div className="food-sale-container food-sale-compare">

          <div className="food-sale-compare-image">
            <img
              src="/Images/truck6.jpg"
              alt="Custom trailer build"
            />
          </div>

          <div className="food-sale-compare-content">
            <span className="food-sale-section-label">
              STANDARD OR CUSTOM?
            </span>

            <h2>
              Need Something Built Around Your Business?
            </h2>

            <p>
              Standard food trailers are designed as ready-to-buy options.
              If your business requires a different layout, workflow, or
              configuration, a custom trailer may be the better path.
            </p>

            <div className="food-sale-compare-list">

              <div>
                <strong>Buy</strong>
                <span>
                  Choose from standard trailer options.
                </span>
              </div>

              <div>
                <strong>Custom</strong>
                <span>
                  Build around your specific requirements.
                </span>
              </div>

            </div>

            <Link
              to="/custom-trailers"
              className="food-sale-btn food-sale-btn-dark"
            >
              EXPLORE CUSTOM TRAILERS
            </Link>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="food-sale-cta">
        <div className="food-sale-container">

          <span className="food-sale-section-label">
            READY TO START?
          </span>

          <h2>
            Find the Right Food Trailer for Your Business
          </h2>

          <p>
            Tell us what you are looking for and we'll help you understand
            the next steps.
          </p>

          <Link
            to="/contact"
            className="food-sale-btn food-sale-btn-light"
          >
            START AN INQUIRY
          </Link>

        </div>
      </section>

      

    </div>
  );
}

export default FoodTrailersForSale;