
import { Link } from "react-router-dom";
import "./Reviews.css";

const reviews = [
  {
    name: "Sarah M.",
    business: "Food Trailer Owner",
    rating: 5,
    text: "The entire process was smooth from start to finish. The team helped us choose the right trailer for our business and made everything incredibly easy.",
  },
  {
    name: "Marcus T.",
    business: "Mobile Food Business",
    rating: 5,
    text: "Great communication and attention to detail. Our trailer arrived exactly how we expected it, and the quality is excellent.",
  },
  {
    name: "Jessica R.",
    business: "Catering Business",
    rating: 5,
    text: "We were looking for a trailer that could fit our specific needs and Calvin's Tools made the process simple. The team was helpful throughout.",
  },
  {
    name: "David L.",
    business: "Food Business Owner",
    rating: 5,
    text: "From the first conversation to getting our trailer, everything was handled professionally. We are very happy with the final result.",
  },
  {
    name: "Emily K.",
    business: "Small Business Owner",
    rating: 5,
    text: "The team took the time to understand what we needed instead of trying to sell us something we didn't need. Really appreciated that.",
  },
  {
    name: "James P.",
    business: "Mobile Vendor",
    rating: 5,
    text: "Our experience was great. The trailer looks fantastic and works perfectly for what we wanted to build our business around.",
  },
];

const Stars = ({ rating }) => {
  return (
    <div className="review-stars" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(rating)}
    </div>
  );
};

function Reviews() {
  return (
    <div className="reviews-page">

     


      {/* HERO */}
      <section className="reviews-hero">
        <div className="reviews-hero-overlay"></div>

        <div className="reviews-hero-content">
          <span className="reviews-eyebrow">
            CUSTOMER REVIEWS
          </span>

          <h1>
            What Our Customers
            <br />
            Have to Say
          </h1>

          <p>
            Real experiences from businesses that chose Calvin's
            Tools for their trailer rental, purchase, and custom
            build needs.
          </p>
        </div>
      </section>


      {/* INTRO */}
      <section className="reviews-intro section-padding">
        <div className="reviews-intro-inner">

          <div className="reviews-intro-heading">
            <span className="section-eyebrow">
              CUSTOMER EXPERIENCES
            </span>

            <h2>
              Built Around
              <br />
              Our Customers
            </h2>
          </div>

          <div className="reviews-intro-text">
            <p>
              Every business has different needs. Whether you're
              renting a trailer for an upcoming event, purchasing
              your next trailer, or creating a completely custom
              build, our goal is to make the process clear and
              straightforward.
            </p>

            <p>
              Here's what some of our customers have shared about
              their experience with Calvin's Tools.
            </p>
          </div>

        </div>
      </section>


      {/* REVIEW SUMMARY */}
      <section className="reviews-summary-section">
        <div className="reviews-summary">

          <div className="summary-rating">
            <strong>5.0</strong>

            <Stars rating={5} />

            <span>Customer Rating</span>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-item">
            <strong>Rent</strong>
            <span>Food & Specialty Trailers</span>
          </div>

          <div className="summary-item">
            <strong>Buy</strong>
            <span>Ready-to-Buy Trailers</span>
          </div>

          <div className="summary-item">
            <strong>Custom</strong>
            <span>Build-to-Order Trailers</span>
          </div>

        </div>
      </section>


      {/* REVIEWS */}
      <section className="reviews-list-section section-padding">

        <div className="reviews-section-heading">
          <span className="section-eyebrow">
            CUSTOMER STORIES
          </span>

          <h2>
            Hear From Our Customers
          </h2>
        </div>

        <div className="reviews-grid">

          {reviews.map((review, index) => (
            <article className="review-card" key={index}>

              <div className="review-card-top">
                <Stars rating={review.rating} />

                <span className="review-mark">
                  “
                </span>
              </div>

              <p className="review-text">
                {review.text}
              </p>

              <div className="review-author">
                <div className="review-avatar">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <strong>{review.name}</strong>
                  <span>{review.business}</span>
                </div>
              </div>

            </article>
          ))}

        </div>

      </section>


      {/* RENT / BUY / CUSTOM */}
      <section className="reviews-options section-padding">

        <div className="reviews-options-heading">
          <span className="section-eyebrow">
            THREE WAYS TO WORK WITH US
          </span>

          <h2>
            Find the Trailer
            <br />
            That Fits Your Business
          </h2>
        </div>

        <div className="reviews-options-grid">

          <Link to="/trailer-rental" className="review-option">
            <span className="option-number">01</span>

            <h3>Rent a Trailer</h3>

            <p>
              Need a trailer for an event, seasonal business,
              or short-term operation? Explore our rental options.
            </p>

            <span className="option-link">
              Explore Rentals →
            </span>
          </Link>


          <Link to="/trailers-for-sale" className="review-option">
            <span className="option-number">02</span>

            <h3>Buy a Trailer</h3>

            <p>
              Browse ready-to-buy food and specialty trailers
              designed for businesses ready to get moving.
            </p>

            <span className="option-link">
              View Trailers →
            </span>
          </Link>


          <Link to="/custom-trailers" className="review-option">
            <span className="option-number">03</span>

            <h3>Build Custom</h3>

            <p>
              Have something specific in mind? Work with us
              to create a trailer around your business needs.
            </p>

            <span className="option-link">
              Start a Build →
            </span>
          </Link>

        </div>

      </section>


      {/* CTA */}
      <section className="reviews-cta">

        <div className="reviews-cta-content">

          <span className="section-eyebrow">
            READY TO GET STARTED?
          </span>

          <h2>
            Let's Build Something
            <br />
            That Works for You.
          </h2>

          <p>
            Tell us what you're looking for and we'll help you
            find the right trailer solution for your business.
          </p>

          <Link to="/contact" className="reviews-cta-button">
            GET IN TOUCH
          </Link>

        </div>

      </section>


     

    </div>
  );
}

export default Reviews;