import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const heroSlides = [
  {
    id: "rent",
    number: "01",
    label: "RENT",

    eyebrow:
      "FOOD TRAILER RENTALS, TRAILERS FOR SALE & CUSTOM BUILDS",

    title: (
      <>
        Rent a Food Trailer.
        <br />
        Start Your Business Now.
      </>
    ),

    description:
      "Certified food, concession, nail salon and retail trailers — ready for your menu, event or season. Tell us your dates and we'll match the right trailer.",

    image: "/Images/truck1.jpeg",

    primaryText: "RENT YOUR TRAILER NOW →",
    primaryLink: "/trailer-rental",

    secondaryText: "Check Availability",
    secondaryLink: "/contact",
  },

  {
    id: "buy",
    number: "02",
    label: "BUY",

    eyebrow:
      "QUALITY TRAILERS FOR SALE — READY TO LAUNCH YOUR BUSINESS",

    title: (
      <>
        Find Your Trailer.
        <br />
        Build Your Business.
      </>
    ),

    description:
      "Explore food, concession and specialty trailers built for real businesses. Find the right setup and get your business moving.",

    image: "/Images/truck2.jpeg",

    primaryText: "VIEW TRAILERS FOR SALE →",
    primaryLink: "/trailers-for-sale",

    secondaryText: "Explore Trailers",
    secondaryLink: "/trailers-for-sale",
  },

  {
    id: "custom",
    number: "03",
    label: "CUSTOM",

    eyebrow:
      "CUSTOM TRAILERS BUILT AROUND YOUR BUSINESS",

    title: (
      <>
        Your Vision.
        <br />
        Our Craft.
      </>
    ),

    description:
      "From layout and equipment to branding and finishes, we'll help create a trailer designed around the way you work.",

    image: "/Images/truck3.jpeg",

    primaryText: "START YOUR CUSTOM BUILD →",
    primaryLink: "/custom-trailers",

    secondaryText: "Explore Custom Builds",
    secondaryLink: "/custom-trailers",
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  /* =========================================
     AUTO SLIDE EVERY 3 SECONDS
  ========================================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) =>
        current === heroSlides.length - 1 ? 0 : current + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[activeSlide];

  const nextSlide = () => {
    setActiveSlide((current) =>
      current === heroSlides.length - 1 ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? heroSlides.length - 1 : current - 1
    );
  };

  return (
    <section className="hero">

      {/* =========================================
          BACKGROUND IMAGE
      ========================================= */}
      <div
        className="hero__background"
        key={slide.id}
        style={{
          backgroundImage: `url(${slide.image})`,
        }}
      />

      {/* Dark overlay */}
      <div className="hero__overlay" />

      {/* Diagonal texture */}
      <div className="hero__texture" />

      {/* =========================================
          MAIN CONTENT
      ========================================= */}
      <div className="hero__container">

        <div className="hero__content">

          {/* Eyebrow */}
          <div className="hero__eyebrow">
            {slide.eyebrow}
          </div>

          {/* Heading */}
          <h1 className="hero__title">
            {slide.title}
          </h1>

          {/* Description */}
          <p className="hero__description">
            {slide.description}
          </p>

          {/* Buttons */}
          <div className="hero__actions">

            <Link
              to={slide.primaryLink}
              className="hero__button hero__button--primary"
            >
              {slide.primaryText}
            </Link>

            <Link
              to={slide.secondaryLink}
              className="hero__button hero__button--secondary"
            >
              {slide.secondaryText}
            </Link>

          </div>

        </div>
      </div>

      {/* =========================================
          BOTTOM CONTROLS
      ========================================= */}
      <div className="hero__bottom">

        {/* Slide navigation */}
        <div className="hero__navigation">

          {/* Progress line */}
          <div className="hero__progress">
            <div
              className="hero__progress-active"
              style={{
                width: `${((activeSlide + 1) / heroSlides.length) * 100}%`,
              }}
            />
          </div>

          {/* Tabs */}
          <div className="hero__tabs">

            {heroSlides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`hero__tab ${
                  activeSlide === index
                    ? "hero__tab--active"
                    : ""
                }`}
                onClick={() => setActiveSlide(index)}
              >
                <span className="hero__tab-number">
                  {item.number}
                </span>

                <span className="hero__tab-separator">
                  ·
                </span>

                <span className="hero__tab-label">
                  {item.label}
                </span>
              </button>
            ))}

          </div>
        </div>

        {/* Arrows */}
        <div className="hero__arrows">

          <button
            type="button"
            className="hero__arrow"
            onClick={previousSlide}
            aria-label="Previous slide"
          >
            ‹
          </button>

          <button
            type="button"
            className="hero__arrow"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            ›
          </button>

        </div>

      </div>
    </section>
  );
};

export default Hero;