import { Link } from "react-router-dom";
import "./WhyCalvins.css";

const reviews = [
  {
    initials: "CA",
    name: "Cassie Albritton",
    stars: "★★★★★",
    category: "FOOD TRAILER RENTAL",
    text: `“Worked with Mark at Calvin's Tools to start the process of renting a food trailer. While we haven't picked the trailer up yet, the process has been very easy and they have been extremely helpful.”`,
  },
  {
    initials: "BL",
    name: "Brendon Lobo",
    stars: "★★★★★",
    category: "CUSTOMER REVIEW",
    text: `“Great service. Went above and beyond.”`,
  },
];

const stats = [
  {
    value: "5.0 ★",
    description: "120+ Google reviews from business owners",
  },
  {
    value: "21",
    description: "Rental trailers in our fleet",
  },
  {
    value: "1 report",
    description: "Photo inspection report with every trailer",
  },
  {
    value: "10–22 ft",
    description: "Food, specialty & custom trailer sizes",
  },
];

const reasons = [
  {
    number: "01",
    title: "Rent, Buy or Build",
    description:
      "One team for all three — rent for the season, buy a standard trailer, or build to order.",
  },
  {
    number: "02",
    title: "Documented Compliance",
    description:
      "NHTSA-compliant chassis, UL/ETL listed components, NSF equipment — with documents you can check.",
  },
  {
    number: "03",
    title: "Photo Inspection Report",
    description:
      "Welds, wiring, gas and plumbing — every trailer ships with a signed, photo-by-photo quality report.",
  },
  {
    number: "04",
    title: "Proven Base Models",
    description:
      "Custom builds start from layouts that already work, so quoting is faster and the result fits better.",
  },
  {
    number: "05",
    title: "Hablamos Español",
    description:
      "Talk to our team in Spanish or English, by phone or WhatsApp. Clear contracts, no surprises.",
  },
  {
    number: "06",
    title: "Real People, Real Support",
    description:
      "Our team and technicians support you before, during and after handover.",
  },
];

const WhyCalvins = () => {
  return (
    <section className="why-calvins" id="why-calvins">

      {/* =====================================================
          REVIEWS
      ===================================================== */}

      <div className="why-calvins__reviews">

        <div className="why-calvins__reviews-header">

          <div className="why-calvins__reviews-heading">

            <h2>
              What Our{" "}
              <em>Customers</em>{" "}
              Have To Say
            </h2>

            <p>
              Real Google reviews from the people we've worked with.
            </p>

          </div>

          <div className="why-calvins__rating">

            <div className="why-calvins__rating-score">
              5.0
            </div>

            <div className="why-calvins__rating-info">

              <div className="why-calvins__rating-stars">
                ★★★★★
              </div>

              <span>
                120+ Google reviews
              </span>

            </div>

            <div className="why-calvins__rating-actions">

              <Link
                to="/reviews"
                className="why-calvins__review-button why-calvins__review-button--outline"
              >
                VIEW ALL REVIEWS
              </Link>

              <Link
                to="/reviews"
                className="why-calvins__review-button why-calvins__review-button--orange"
              >
                WRITE A REVIEW
              </Link>

            </div>

          </div>

        </div>

        {/* =====================================================
            REVIEW CARDS
            Desktop = normal grid
            Mobile = auto sliding
        ===================================================== */}

        <div className="why-calvins__reviews-slider">

          <div className="why-calvins__reviews-grid">

            <div className="why-calvins__reviews-track">

              {reviews.map((review) => (
                <article
                  className="why-calvins__review-card"
                  key={review.name}
                >

                  <div className="why-calvins__review-person">

                    <div className="why-calvins__review-avatar">
                      {review.initials}
                    </div>

                    <div>

                      <h3>
                        {review.name}
                      </h3>

                      <div className="why-calvins__review-stars">
                        {review.stars}
                      </div>

                    </div>

                  </div>

                  <p className="why-calvins__review-text">
                    {review.text}
                  </p>

                  <span className="why-calvins__review-category">
                    {review.category}
                  </span>

                </article>
              ))}

              {/* NEXT REVIEW */}

              <article className="why-calvins__next-review">

                <h3>
                  Next real Google review
                </h3>

                <p>
                  [Pull live from Google — ideally a buyer or
                  custom-build customer, with a real photo.]
                </p>

              </article>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          WHY CALVIN'S
      ===================================================== */}

      <div className="why-calvins__main">

        <div className="why-calvins__container">

          {/* SECTION LABEL */}

          <div className="why-calvins__section-label">

            <span>
              06
            </span>

            <i></i>

            <strong>
              WHY CALVIN'S TOOLS
            </strong>

          </div>


          {/* HEADER */}

          <div className="why-calvins__header">

            <h2>
              Built around
              <br />
              <em>your business.</em>
            </h2>

            <div className="why-calvins__header-copy">

              <p>
                Calvin's Tools rents, sells and custom-builds food,
                specialty and commercial trailers — documented for
                inspection and backed by a real team from first call
                to handover.
              </p>

              <Link to="/about">
                About Calvin's Tools →
              </Link>

            </div>

          </div>


          {/* DIVIDER */}

          <div className="why-calvins__divider"></div>


          {/* =====================================================
              STATS
          ===================================================== */}

          <div className="why-calvins__stats">

            {stats.map((stat) => (
              <div
                className="why-calvins__stat"
                key={stat.value}
              >

                <strong>
                  {stat.value}
                </strong>

                <p>
                  {stat.description}
                </p>

              </div>
            ))}

          </div>


          {/* =====================================================
              REASONS
          ===================================================== */}

          <div className="why-calvins__reasons">

            {reasons.map((reason) => (
              <article
                className={`why-calvins__reason ${
                  reason.number === "01"
                    ? "why-calvins__reason--first"
                    : ""
                }`}
                key={reason.number}
              >

                <span className="why-calvins__reason-number">
                  {reason.number}
                </span>

                <h3>
                  {reason.title}
                </h3>

                <p>
                  {reason.description}
                </p>

              </article>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyCalvins;