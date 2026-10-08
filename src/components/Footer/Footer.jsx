
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer__container">

        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}

        <div className="footer__main">

          {/* ===================================================
              BRAND
          =================================================== */}

          <div className="footer__brand">

            <div className="footer__eyebrow">
              <span className="footer__eyebrow-line"></span>

              <span>
                MOBILE BUSINESS, MADE SIMPLE
              </span>
            </div>


            <h2 className="footer__title">
              Take your
              <br />
              business
              <br />
              anywhere.
            </h2>


            <p className="footer__description">
              Food trailer rentals, trailers for sale and
              custom builds.
            </p>


            <Link
              to="/trailer-rental"
              className="footer__rent-button"
            >
              RENT NOW →
            </Link>

          </div>


          {/* ===================================================
              RENT
          =================================================== */}

          <div className="footer__column">

            <h3>
              RENT
            </h3>

            <Link to="/trailer-rental">
              Food &amp; Concession
            </Link>

            <Link to="/trailer-rental/nail-salon">
              Nail Salon Trailers
            </Link>

            <Link to="/trailer-rental/retail">
              Retail Trailers
            </Link>

            <Link to="/rent-to-own">
              Rent-to-Own
            </Link>

          </div>


          {/* ===================================================
              BUY & BUILD
          =================================================== */}

          <div className="footer__column">

            <h3>
              BUY &amp; BUILD
            </h3>

            <Link to="/trailers-for-sale">
              Food Trailers
            </Link>

            <Link to="/trailers-for-sale/specialty">
              Specialty Trailers
            </Link>

            <Link to="/custom-trailers">
              Custom Trailers
            </Link>

          </div>


          {/* ===================================================
              BLOG
          =================================================== */}

          <div className="footer__column">

            <h3>
              BLOG
            </h3>

            <Link to="/blog/size-guide">
              Size Guide
            </Link>

            <Link to="/blog/food-trailer-cost">
              Food Trailer Cost
            </Link>

            <Link to="/blog/permits-inspection">
              Permits &amp; Inspection
            </Link>

            <Link
              to="/blog"
              className="footer__arrow-link"
            >
              All Articles →
            </Link>

          </div>


          {/* ===================================================
              COMPANY
          =================================================== */}

          <div className="footer__column">

            <h3>
              COMPANY
            </h3>

            <Link to="/about">
              About
            </Link>

            <Link to="/about#why-calvins">
              Why Calvin's
            </Link>

            <Link to="/reviews">
              Reviews
            </Link>

            <Link to="/certifications">
              Certifications
            </Link>

            <Link to="/contact">
              Contact Us
            </Link>

          </div>


          {/* ===================================================
              GET IN TOUCH
          =================================================== */}

          <div className="footer__column footer__contact">

            <h3>
              GET IN TOUCH
            </h3>

            <a href="mailto:info@calvinstools.com">
              info@calvinstools.com
            </a>

            <a href="tel:+17707464733">
              +1 770-746-4733
            </a>

            <p>
              2066 Joseph E. Boone Blvd
              <br />
              NW, Atlanta, GA 30314,
              <br />
              United States
            </p>

          </div>

        </div>


        {/* =====================================================
            FOOTER BOTTOM
        ===================================================== */}

        <div className="footer__bottom">

          {/* BRAND NAME */}

          <div className="footer__copyright-brand">
            CALVIN'S TOOLS
          </div>


          {/* SOCIAL ICONS */}

          <div className="footer__socials">

            <a
              href="#"
              aria-label="Instagram"
              className="footer__social"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="4"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="3.5"
                />

                <circle
                  cx="17.3"
                  cy="6.8"
                  r="1"
                  className="footer__social-dot"
                />
              </svg>
            </a>


            <a
              href="#"
              aria-label="LinkedIn"
              className="footer__social"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="2"
                />

                <line
                  x1="8"
                  y1="10"
                  x2="8"
                  y2="17"
                />

                <circle
                  cx="8"
                  cy="7.5"
                  r="1"
                  className="footer__social-dot"
                />

                <path
                  d="M11 17V10M11 13.5C11 11.5 12 10 13.8 10C15.6 10 16 11.4 16 13.2V17"
                />
              </svg>
            </a>


            <a
              href="#"
              aria-label="YouTube"
              className="footer__social"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect
                  x="3.5"
                  y="6"
                  width="17"
                  height="12"
                  rx="3"
                />

                <path
                  d="M10 9L16 12L10 15V9Z"
                />
              </svg>
            </a>

          </div>


          {/* COPYRIGHT */}

          <div className="footer__legal">

            <span>
              © 2026 Calvin's Tools. All rights reserved.
            </span>

            <Link to="/privacy">
              Privacy
            </Link>

            <Link to="/terms">
              Terms
            </Link>

          </div>

        </div>


        {/* =====================================================
            CREDIT
        ===================================================== */}

        <div className="footer__credit">

          <span>
            Website designed, developed &amp; maintained by{" "}
            <a href="#">
              Syteos Labs
            </a>
          </span>

        </div>

      </div>

    </footer>
  );
};

export default Footer;