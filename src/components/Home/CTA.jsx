
import { Link } from "react-router-dom";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta">

      <div className="cta__container">

        {/* LEFT CONTENT */}

        <div className="cta__content">

          <h2>
            Ready to roll?
            <br />
            Get your trailer today.
          </h2>

          <p>
            Rent, buy or build — tell us what you need and we'll reply
            with availability and pricing.
          </p>

        </div>


        {/* ACTIONS */}

        <div className="cta__actions">

          <Link
            to="/trailer-rental"
            className="cta__button cta__button--light"
          >
            RENT NOW →
          </Link>

          <Link
            to="/trailers-for-sale"
            className="cta__button cta__button--dark"
          >
            GET YOUR TRAILER TODAY →
          </Link>

        </div>

      </div>

    </section>
  );
};

export default CTA;