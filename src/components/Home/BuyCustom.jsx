import { useState } from "react";
import { Link } from "react-router-dom";
import "./BuyCustom.css";

const tabs = [
  {
    id: "food",
    number: "01",
    title: "FOOD TRAILERS",
  },
  {
    id: "specialty",
    number: "02",
    title: "SPECIALTY TRAILERS",
  },
  {
    id: "custom",
    number: "03",
    title: "CUSTOM TRAILERS",
  },
];

const foodTrailers = [
  "Taco Trailer",
  "BBQ Trailer",
  "Coffee Trailer",
  "Ice Cream Trailer",
  "Concession Trailer",
  "Mobile Kitchen",
];

const BuyCustom = () => {
  const [activeTab, setActiveTab] = useState("food");

  const isFood = activeTab === "food";
  const isSpecialty = activeTab === "specialty";
  const isCustom = activeTab === "custom";

  return (
    <section className="buy-custom" id="buy-custom">

      <div className="buy-custom__container">

        {/* =====================================================
            SECTION LABEL
        ===================================================== */}

        <div className="buy-custom__section-label">

          <span className="buy-custom__number">
            03
          </span>

          <span className="buy-custom__line"></span>

          <span className="buy-custom__label">
            TRAILERS FOR SALE &amp; CUSTOM BUILDS
          </span>

        </div>


        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="buy-custom__intro">

          <h2 className="buy-custom__title">
            Buy a Trailer.
            <br />
            <em>Or Build Your Own.</em>
          </h2>


          <div className="buy-custom__intro-right">

            <p className="buy-custom__intro-text">
              <strong>For sale:</strong> standard, ready-to-buy
              configurations. <strong>Custom:</strong> built to order
              around your menu, equipment and brand.
            </p>

            <Link
              to="/trailers-for-sale"
              className="buy-custom__top-button"
            >
              GET YOUR TRAILER TODAY →
            </Link>

          </div>

        </div>


        {/* =====================================================
            TABS
        ===================================================== */}

        <div className="buy-custom__tabs">

          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`buy-custom__tab ${
                activeTab === tab.id
                  ? "buy-custom__tab--active"
                  : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >

              <span className="buy-custom__tab-number">
                {tab.number}
              </span>

              <span className="buy-custom__tab-title">
                {tab.title}
              </span>

            </button>
          ))}

        </div>


        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="buy-custom__content">

          {/* ===================================================
              IMAGE
          =================================================== */}

          <div className="buy-custom__image-wrapper">

            <img
              src={
                isFood
                  ? "/Images/truck5.jpg"
                  : isSpecialty
                  ? "/Images/truck1.jpeg"
                  : "/Images/truck3.jpeg"
              }
              alt={
                isFood
                  ? "Food trailer for sale — standard configuration"
                  : isSpecialty
                  ? "Specialty trailer"
                  : "Custom food trailer build"
              }
              className="buy-custom__image"
            />


            {/* Subtle diagonal texture */}

            <div className="buy-custom__image-pattern"></div>


            {/* Top-left label */}

            <div className="buy-custom__image-label">

              {isFood
                ? "READY TO BUY"
                : isSpecialty
                ? "SPECIALTY TRAILER"
                : "CUSTOM BUILD"}

            </div>


            {/* Bottom-left caption */}

            <div className="buy-custom__photo-caption">

              {isFood
                ? 'PHOTO: a standard food trailer for sale · alt: "Food trailer for sale — standard configuration"'
                : isSpecialty
                ? 'PHOTO: specialty trailer · alt: "Specialty trailer configuration"'
                : 'PHOTO: custom trailer build · alt: "Custom food trailer build"'}

            </div>

          </div>


          {/* ===================================================
              RIGHT CONTENT
          =================================================== */}

          <div className="buy-custom__copy">

            {/* MINI LABEL */}

            <span className="buy-custom__mini-label">

              {isFood
                ? "FOOD TRAILERS FOR SALE"
                : isSpecialty
                ? "SPECIALTY TRAILERS"
                : "CUSTOM TRAILERS"}

            </span>


            {/* TITLE */}

            <h3 className="buy-custom__copy-title">

              {isFood ? (
                <>
                  Food Trailers
                  <br />
                  <em>in standard configurations.</em>
                </>
              ) : isSpecialty ? (
                <>
                  Specialty Trailers
                  <br />
                  <em>ready for your business.</em>
                </>
              ) : (
                <>
                  Build a trailer
                  <br />
                  <em>around your business.</em>
                </>
              )}

            </h3>


            {/* DESCRIPTION */}

            <p className="buy-custom__description">

              {isFood
                ? "Proven layouts from compact 10 ft concession trailers to 22 ft mobile kitchens — documented for inspection and shipped with a photo inspection report."
                : isSpecialty
                ? "Explore specialty trailer configurations designed for retail, mobile services and other commercial uses."
                : "Start from a proven base model and adapt the layout, equipment and branding around your business."}

            </p>


            {/* =================================================
                OPTIONS
            ================================================= */}

            {isFood && (
              <div className="buy-custom__options">

                {foodTrailers.map((item) => (
                  <span
                    className="buy-custom__option"
                    key={item}
                  >
                    {item}
                  </span>
                ))}

              </div>
            )}


            {isCustom && (
              <div className="buy-custom__options">

                <span className="buy-custom__option">
                  Floor Plans &amp; Layouts
                </span>

                <span className="buy-custom__option">
                  Equipment Packages
                </span>

                <span className="buy-custom__option">
                  Branding &amp; Wraps
                </span>

                <span className="buy-custom__option">
                  Certification &amp; Inspection
                </span>

                <span className="buy-custom__option">
                  Base Model Options
                </span>

              </div>
            )}


            {isSpecialty && (
              <div className="buy-custom__options">

                <span className="buy-custom__option">
                  Nail Salon Trailers
                </span>

                <span className="buy-custom__option">
                  Retail Trailers
                </span>

                <span className="buy-custom__option">
                  Mobile Bar
                </span>

                <span className="buy-custom__option">
                  Specialty Builds
                </span>

              </div>
            )}


            {/* =================================================
                ACTIONS
            ================================================= */}

            <div className="buy-custom__actions">

              <Link
                to={
                  isFood
                    ? "/trailers-for-sale"
                    : isCustom
                    ? "/custom-trailers"
                    : "/trailers-for-sale"
                }
                className="buy-custom__main-button"
              >

                {isFood
                  ? "GET YOUR TRAILER TODAY →"
                  : isCustom
                  ? "START YOUR CUSTOM BUILD →"
                  : "EXPLORE SPECIALTY TRAILERS →"}

              </Link>


              {isFood && (
                <Link
                  to="/contact"
                  className="buy-custom__quote-button"
                >
                  Get a Quote
                </Link>
              )}

            </div>


            {/* =================================================
                BOTTOM NOTE
            ================================================= */}

            {isFood && (
              <p className="buy-custom__bottom-note">

                Need something different?{" "}

                <Link to="/custom-trailers">
                  Start your custom build →
                </Link>

              </p>
            )}

          </div>

        </div>

      </div>

    </section>
  );
};

export default BuyCustom;