
import { Link } from "react-router-dom";
import "./RentalHowItWorks.css";

const RentalHowItWorks = () => {
  return (
    <section className="rental-how-it-works-section">

      <div className="rental-how-it-works-section__container">

        {/* =================================
            TOP AREA
        ================================= */}

        <div className="rental-how-it-works-section__top">

          {/* Left */}
          <div className="rental-how-it-works-section__heading-area">

            <div className="rental-how-it-works-section__label">
              <span>03</span>
              <i></i>
              <strong>HOW ONLINE RENTAL WORKS</strong>
            </div>

            <h2 className="rental-how-it-works-section__title">
              Booked in minutes.
              <br />
              <em>Ready when you are.</em>
            </h2>

          </div>


          {/* Right */}
          <div className="rental-how-it-works-section__intro">

            <p>
              Everything happens online — quote, booking, deposit,
              contract and documents. Our team confirms every
              reservation and walks you through the trailer at handover.
            </p>

          </div>

        </div>


        {/* =================================
            FOUR STEPS
        ================================= */}

        <div className="rental-how-it-works-section__steps">

          {/* STEP 01 */}
          <article className="rental-how-it-works-section__step rental-how-it-works-section__step--first">

            <div className="rental-how-it-works-section__step-number">
              STEP 01
            </div>

            <h3>
              Pick your trailer &amp; dates
            </h3>

            <p>
              Choose a rental period and a start day. The calendar blocks
              the full period so no one else can book it.
            </p>

          </article>


          {/* STEP 02 */}
          <article className="rental-how-it-works-section__step">

            <div className="rental-how-it-works-section__step-number">
              STEP 02
            </div>

            <h3>
              Pickup or delivery
            </h3>

            <p>
              Pick up for free, or enter your ZIP code — the delivery fee
              is calculated instantly.
            </p>

          </article>


          {/* STEP 03 */}
          <article className="rental-how-it-works-section__step">

            <div className="rental-how-it-works-section__step-number">
              STEP 03
            </div>

            <h3>
              Add equipment &amp; pay
            </h3>

            <p>
              Add generators, POS or extra equipment, then pay the deposit
              only or pay in full. Your quote is saved to your account.
            </p>

          </article>


          {/* STEP 04 */}
          <article className="rental-how-it-works-section__step">

            <div className="rental-how-it-works-section__step-number">
              STEP 04
            </div>

            <h3>
              Sign, upload &amp; roll
            </h3>

            <p>
              Sign your rental agreement online, upload your driver's
              license (and COI for monthly rentals), then pick up or
              receive your trailer.
            </p>

          </article>

        </div>


        {/* =================================
            BOTTOM ACTIONS
        ================================= */}

        <div className="rental-how-it-works-section__bottom">

          <div className="rental-how-it-works-section__buttons">

            <Link
              to="/trailer-rental"
              className="rental-how-it-works-section__button rental-how-it-works-section__button--orange"
            >
              RENT YOUR TRAILER NOW →
            </Link>

            <Link
              to="/trailer-rental"
              className="rental-how-it-works-section__button rental-how-it-works-section__button--black"
            >
              GET YOUR TRAILER TODAY →
            </Link>

          </div>


          

        </div>

      </div>

    </section>
  );
};

export default RentalHowItWorks;