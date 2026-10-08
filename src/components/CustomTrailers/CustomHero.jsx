
import { Link } from "react-router-dom";
import "./CustomHero.css";

const CustomHero = () => {
  return (
    <section className="custom-trailer-hero">

      {/* Background Overlay */}
      <div className="custom-trailer-hero__overlay"></div>

      <div className="custom-trailer-hero__container">

        {/* =================================
            BREADCRUMB
        ================================= */}

        <div className="custom-trailer-hero__breadcrumb">
          <span>Home</span>
          <span>/</span>
          <strong>Custom Trailers</strong>
        </div>


        {/* =================================
            HERO CONTENT
        ================================= */}

        <div className="custom-trailer-hero__content">

          {/* Eyebrow */}

          <div className="custom-trailer-hero__eyebrow">
            CUSTOM TRAILERS — BUILT TO ORDER
          </div>


          {/* Heading */}

          <h1 className="custom-trailer-hero__title">
            Custom Food Trailers.
            <br />
            Built Around Your Menu.
          </h1>


          {/* Description */}

          <p className="custom-trailer-hero__description">
            Choose your size, layout, equipment and branding online, then
            request a quote. We build Custom Food Trailers and Custom
            Specialty Trailers from proven base models — documented for
            inspection.
          </p>


          {/* Buttons */}

          <div className="custom-trailer-hero__actions">

            <Link
              to="/custom-trailers"
              className="custom-trailer-hero__button custom-trailer-hero__button--primary"
            >
              START YOUR CUSTOM BUILD →
            </Link>

            <Link
              to="/custom-trailers"
              className="custom-trailer-hero__button custom-trailer-hero__button--secondary"
            >
              See Floor Plans
            </Link>

          </div>


          {/* Quick Info */}

          <div className="custom-trailer-hero__quick-info">

            <div className="custom-trailer-hero__quick-item">
              <i></i>
              <strong>Configure online</strong>
            </div>

            <div className="custom-trailer-hero__quick-item">
              <i></i>
              <strong>Start from a proven base model</strong>
            </div>

            <div className="custom-trailer-hero__quick-item">
              <i></i>
              <strong>Photo updates during the build</strong>
            </div>

          </div>

        </div>


        {/* =================================
            IMAGE DESCRIPTION BOX
        ================================= */}

       

      </div>

    </section>
  );
};

export default CustomHero;