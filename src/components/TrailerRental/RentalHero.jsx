
import { Link } from "react-router-dom";
import "./RentalHero.css";

const RentalHero = () => {
  return (
    <section className="rental-hero">

      {/* Background Overlay */}
      <div className="rental-hero__overlay"></div>

      <div className="rental-hero__container">

        {/* Breadcrumb */}
        <div className="rental-hero__breadcrumb">
          <span>Home</span>
          <span>/</span>
          <strong>Trailers for Rent</strong>
        </div>

        {/* Hero Content */}
        <div className="rental-hero__content">

          <div className="rental-hero__eyebrow">
            TRAILERS FOR RENT · BOOK ONLINE
          </div>

          <h1 className="rental-hero__title">
            Food Trailer Rental.
            <br />
            <span>Book Online. Start Serving.</span>
          </h1>

          <p className="rental-hero__description">
            Rent Food Trailers and Specialty Trailers by the day,
            weekend, week or month. Pick your trailer, choose pickup
            or delivery and book in minutes — every trailer ships
            with a photo inspection report.
          </p>

          <div className="rental-hero__actions">

            <Link
              to="/trailer-rental"
              className="rental-hero__button rental-hero__button--primary"
            >
              RENT YOUR TRAILER NOW →
            </Link>

            <Link
              to="/trailer-rental"
              className="rental-hero__button rental-hero__button--secondary"
            >
              Check Availability
            </Link>

          </div>

          <div className="rental-hero__quick-info">

            <div className="rental-hero__quick-item">
              <i></i>
              <strong>Daily · Weekend · Weekly · Monthly</strong>
            </div>

            <div className="rental-hero__quick-item">
              <i></i>
              <strong>Pickup or delivery</strong>
            </div>

            <div className="rental-hero__quick-item">
              <i></i>
              <strong>Instant online booking</strong>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default RentalHero;