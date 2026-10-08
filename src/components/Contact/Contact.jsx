
import { Link } from "react-router-dom";
import "./Contact.css";
import CTA from "../Home/CTA";

function Contact() {
  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">

        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">

          <span className="contact-label">
            CONTACT CALVIN'S TOOLS
          </span>

          <h1>
            Let's talk
            <br />
            trailers.
          </h1>

          <p>
            Whether you're looking to rent, buy or build,
            tell us what you need and our team will help
            you find the right next step.
          </p>

        </div>

      </section>


      {/* CONTACT DETAILS */}
      <section className="contact-main">

        <div className="contact-info">

          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h2>
            Tell us what
            <br />
            you're looking for.
          </h2>

          <p>
            Have a question about a rental, a standard trailer
            for sale or a custom build? Get in touch with our team.
          </p>


          <div className="contact-details">

            <div className="contact-detail">

              <span>PHONE</span>

              <a href="tel:+17707464733">
                +1 770-746-4733
              </a>

            </div>


            <div className="contact-detail">

              <span>EMAIL</span>

              <a href="mailto:info@calvinstools.com">
                info@calvinstools.com
              </a>

            </div>


            <div className="contact-detail">

              <span>WHATSAPP</span>

              <a
                href="https://wa.me/17707464733"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp →
              </a>

            </div>


            <div className="contact-detail">

              <span>LANGUAGES</span>

              <p>
                English / Español
              </p>

            </div>


            <div className="contact-detail">

              <span>LOCATION</span>

              <p>
                2066 Joseph E. Boone Blvd NW
                <br />
                Atlanta, GA 30314
                <br />
                United States
              </p>

            </div>

          </div>

        </div>


        {/* FORM */}
        <div className="contact-form-wrapper">

          <h3>
            Start a conversation
          </h3>

          <p>
            Tell us a little about what you need.
          </p>

          <form className="contact-form">

            <div className="contact-form-row">

              <div className="contact-field">

                <label>
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                />

              </div>


              <div className="contact-field">

                <label>
                  Phone / WhatsApp
                </label>

                <input
                  type="tel"
                  placeholder="Your phone number"
                />

              </div>

            </div>


            <div className="contact-field">

              <label>
                Email
              </label>

              <input
                type="email"
                placeholder="Your email address"
              />

            </div>


            <div className="contact-field">

              <label>
                I want to
              </label>

              <select defaultValue="rent">

                <option value="rent">
                  Rent a trailer
                </option>

                <option value="buy">
                  Buy a trailer
                </option>

                <option value="custom">
                  Build a custom trailer
                </option>

                <option value="question">
                  Ask a question
                </option>

              </select>

            </div>


            <div className="contact-field">

              <label>
                Trailer type
              </label>

              <select defaultValue="food">

                <option value="food">
                  Food / concession trailer
                </option>

                <option value="specialty">
                  Specialty trailer
                </option>

                <option value="custom">
                  Custom trailer
                </option>

                <option value="not-sure">
                  Not sure yet
                </option>

              </select>

            </div>


            <div className="contact-field">

              <label>
                Tell us about your needs
              </label>

              <textarea
                rows="7"
                placeholder="Tell us about your menu, business, preferred size, timing or anything else we should know..."
              ></textarea>

            </div>


            <button
              type="submit"
              className="contact-submit"
            >
              GET IN TOUCH →
            </button>

          </form>

        </div>

      </section>


      {/* THREE OPTIONS */}
      <section className="contact-options">

        <div className="contact-options-heading">

          <span className="contact-label">
            WHAT ARE YOU LOOKING FOR?
          </span>

          <h2>
            Start with
            <br />
            the right path.
          </h2>

        </div>


        <div className="contact-options-grid">

          <Link
            to="/trailer-rental"
            className="contact-option"
          >

            <span>01</span>

            <h3>
              Rent a Trailer
            </h3>

            <p>
              Explore food, concession and specialty rental
              trailers from the current fleet.
            </p>

            <strong>
              EXPLORE RENTALS →
            </strong>

          </Link>


          <Link
            to="/trailers-for-sale"
            className="contact-option"
          >

            <span>02</span>

            <h3>
              Buy a Trailer
            </h3>

            <p>
              Browse standard trailer configurations
              available for sale.
            </p>

            <strong>
              VIEW TRAILERS FOR SALE →
            </strong>

          </Link>


          <Link
            to="/custom-trailers"
            className="contact-option"
          >

            <span>03</span>

            <h3>
              Build a Trailer
            </h3>

            <p>
              Start from a proven base model and adapt
              it around your business.
            </p>

            <strong>
              START YOUR BUILD →
            </strong>

          </Link>

        </div>

      </section>


      
      <CTA />

      

    </div>
  );
}

export default Contact;