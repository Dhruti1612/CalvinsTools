import  { useState } from "react";
import { Link } from "react-router-dom";
import "./Rental.css";

const foodOptions = [
  "All-Purpose · 16 ft",
  "Latin Street · 14 ft",
  "BBQ Smokehouse · 18–20 ft",
  "Coffee & Drinks · 12 ft",
  "Ice Cream & Sweets · 14 ft",
];

const specialtyOptions = [
  "Nail Salon · Specialty",
  "Retail & Boutique · Specialty",
  "Mobile Bar · Specialty",
];

const Rental = () => {
  const [rentalTab, setRentalTab] = useState("food");

  const isFood = rentalTab === "food";

  const options = isFood ? foodOptions : specialtyOptions;

  return (
    <section className="rental" id="rent">
      <div className="rental__container">

        {/* =====================================================
            SECTION LABEL
        ===================================================== */}

        <div className="rental__section-top">

          <div className="rental__section-label">
            <span className="rental__number">01</span>

            <span className="rental__line"></span>

            <span className="rental__label">
              TRAILERS FOR RENT
            </span>
          </div>

        </div>


        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="rental__intro">

          <div className="rental__title-wrap">
            <h2 className="rental__title">
              Food Trailer Rental.
              <br />
              <em>Start Sooner.</em>
            </h2>
          </div>


          <div className="rental__intro-right">

            <p className="rental__intro-text">
              Certified rental trailers for your menu, event or season.
              Flexible rental options — ask our team for current
              availability and terms.
            </p>

            <Link
              to="/trailer-rental"
              className="rental__top-button"
            >
              RENT NOW
              <span>→</span>
            </Link>

          </div>

        </div>


        {/* =====================================================
            TABS
        ===================================================== */}

        <div className="rental__tabs">

          <button
            type="button"
            className={`rental__tab ${
              isFood ? "rental__tab--active" : ""
            }`}
            onClick={() => setRentalTab("food")}
          >
            <span className="rental__tab-number">
              01
            </span>

            <span className="rental__tab-title">
              FOOD & CONCESSION TRAILERS
            </span>
          </button>


          <button
            type="button"
            className={`rental__tab ${
              !isFood ? "rental__tab--active" : ""
            }`}
            onClick={() => setRentalTab("specialty")}
          >
            <span className="rental__tab-number">
              02
            </span>

            <span className="rental__tab-title">
              SPECIALTY TRAILERS
            </span>
          </button>

        </div>


        {/* =====================================================
            MAIN RENTAL PANEL
        ===================================================== */}

        <div className="rental__content">

          {/* ===================================================
              IMAGE
          =================================================== */}

          <div className="rental__image-wrapper">

            <img
              src={
                isFood
                  ? "/Images/truck7.jpg"
                  : "/Images/truck6.jpg"
              }
              alt={
                isFood
                  ? "Food and concession trailer rental"
                  : "Specialty trailer rental"
              }
              className="rental__image"
            />

            <div className="rental__image-label">
              MOBILE KITCHEN
            </div>

            <div className="rental__photo-caption">
              PHOTO: rental fleet unit · alt: “Food and concession
              trailer rental — mobile kitchen”
            </div>

          </div>


          {/* ===================================================
              CONTENT
          =================================================== */}

          <div className="rental__copy">

            <span className="rental__mini-label">
              {isFood
                ? "FOOD & CONCESSION TRAILER RENTAL"
                : "SPECIALTY TRAILER RENTAL"}
            </span>


            <h3 className="rental__copy-title">

              {isFood ? (
                <>
                  Food Trailers
                  <br />
                  <em>ready when your business needs them.</em>
                </>
              ) : (
                <>
                  Specialty Trailers
                  <br />
                  <em>ready for your next business move.</em>
                </>
              )}

            </h3>


            <p className="rental__copy-description">
              Fully equipped food and concession trailers for
              restaurants, catering, events and seasonal service —
              set up for your menu.
            </p>


            {/* =================================================
                OPTIONS
            ================================================= */}

            <div className="rental__options">

              {options.map((option) => (
                <span
                  className="rental__option"
                  key={option}
                >
                  {option}
                </span>
              ))}

            </div>


            {/* =================================================
                BUTTONS
            ================================================= */}

            <div className="rental__actions">

              <Link
                to="/trailer-rental"
                className="rental__main-button"
              >
                RENT YOUR TRAILER NOW
                <span>→</span>
              </Link>


              <Link
                to="/contact"
                className="rental__availability-button"
              >
                CHECK AVAILABILITY & PRICING
              </Link>

            </div>


            {/* =================================================
                FOOTNOTE
            ================================================= */}

            <div className="rental__footnote">

              <span>
                Only trailers in the current rental fleet are shown as
                available.
              </span>

              <Link to="/trailers-for-sale">
                CONFIRM FLEET
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Rental;