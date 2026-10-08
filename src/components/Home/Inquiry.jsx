
import "./Inquiry.css";

const Inquiry = () => {
  return (
    <section className="inquiry" id="inquiry">

      <div className="inquiry__container">

        {/* =====================================================
            LEFT SIDE
        ===================================================== */}

        <div className="inquiry__intro">

          <div className="inquiry__section-label">

            <span className="inquiry__number">
              07
            </span>

            <span className="inquiry__line"></span>

            <span className="inquiry__label">
              CHECK AVAILABILITY
            </span>

          </div>


          <h2 className="inquiry__title">
            Ready to start?
            <br />
            <em>Let's talk.</em>
          </h2>


          <p className="inquiry__description">
            Tell us whether you want to rent, buy or build.
            We'll reply with availability, pricing and next steps.
          </p>


          <div className="inquiry__contact">

            <div className="inquiry__contact-item">
              WhatsApp · English / Español
            </div>

            <div className="inquiry__contact-item">
              +1 770-746-4733
            </div>

            <div className="inquiry__contact-item">
              info@calvinstools.com
            </div>

          </div>

        </div>


        {/* =====================================================
            FORM
        ===================================================== */}

        <form className="inquiry__form">

          <div className="inquiry__form-grid">

            {/* NAME */}

            <div className="inquiry__field">

              <label htmlFor="name">
                Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
              />

            </div>


            {/* PHONE */}

            <div className="inquiry__field">

              <label htmlFor="phone">
                Phone / WhatsApp
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
              />

            </div>


            {/* WANT TO */}

            <div className="inquiry__field">

              <label htmlFor="intent">
                I want to
              </label>

              <select
                id="intent"
                name="intent"
                defaultValue="Rent a trailer"
              >
                <option>
                  Rent a trailer
                </option>

                <option>
                  Buy a trailer
                </option>

                <option>
                  Build a custom trailer
                </option>
              </select>

            </div>


            {/* TRAILER TYPE */}

            <div className="inquiry__field">

              <label htmlFor="trailerType">
                Trailer type
              </label>

              <select
                id="trailerType"
                name="trailerType"
                defaultValue="Food / concession trailer"
              >
                <option>
                  Food / concession trailer
                </option>

                <option>
                  Specialty trailer
                </option>

                <option>
                  Nail salon trailer
                </option>

                <option>
                  Retail trailer
                </option>

                <option>
                  Custom trailer
                </option>
              </select>

            </div>


            {/* DATE */}

            <div className="inquiry__field">

              <label htmlFor="date">
                When do you need it?
              </label>

              <input
                id="date"
                type="date"
                name="date"
              />

            </div>


            {/* LANGUAGE */}

            <div className="inquiry__field">

              <label htmlFor="language">
                Preferred language
              </label>

              <select
                id="language"
                name="language"
                defaultValue="English"
              >
                <option>
                  English
                </option>

                <option>
                  Español
                </option>

              </select>

            </div>

          </div>


          {/* WHAT WILL YOU SERVE */}

          <div className="inquiry__field inquiry__field--full">

            <label htmlFor="message">
              What will you serve or sell?
            </label>

            <textarea
              id="message"
              name="message"
              rows="4"
            />

          </div>


          {/* SUBMIT */}

          <button
            type="submit"
            className="inquiry__submit"
          >
            GET YOUR TRAILER TODAY →
          </button>

        </form>

      </div>

    </section>
  );
};

export default Inquiry;