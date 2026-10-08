
import "./RentalOptions.css";

const RentalOptions = () => {
  return (
    <section className="rental-options-section">

      <div className="rental-options-section__container">

        {/* =================================
            TOP CONTENT
        ================================= */}

        <div className="rental-options-section__top">

          {/* Left Heading */}
          <div className="rental-options-section__heading-area">

            <div className="rental-options-section__label">
              <span>01</span>
              <i></i>
              <strong>RENTAL OPTIONS</strong>
            </div>

            <h2 className="rental-options-section__title">
              Rent by the day,
              <br />
              <em>the weekend or the month.</em>
            </h2>

          </div>


          {/* Right Description */}
          <div className="rental-options-section__intro">

            <p>
              Choose the rental period that fits your event or season.
              Longer rentals cost less per day, and the booking calendar
              reserves the full period for you automatically.
            </p>

            

          </div>

        </div>


        {/* =================================
            RENTAL CARDS
        ================================= */}

        <div className="rental-options-section__cards">

          {/* Daily */}
          <article className="rental-options-section__card">

            <div className="rental-options-section__card-type">
              DAILY
            </div>

            <h3>One day</h3>

            <p>
              Pick any open day. Only that day is reserved.
            </p>

            <div className="rental-options-section__price">
              From <strong>$—</strong>
            </div>

          </article>


          {/* Weekend */}
          <article className="rental-options-section__card">

            <div className="rental-options-section__card-type">
              WEEKEND
            </div>

            <h3>Friday – Sunday</h3>

            <p>
              Click any weekend day — the whole weekend is reserved for you.
            </p>

            <div className="rental-options-section__price">
              From <strong>$—</strong>
            </div>

          </article>


          {/* Weekly */}
          <article className="rental-options-section__card">

            <div className="rental-options-section__card-type">
              WEEKLY
            </div>

            <h3>7 days</h3>

            <p>
              Start any day. Seven days in a row are reserved automatically.
            </p>

            <div className="rental-options-section__price">
              From <strong>$—</strong>
            </div>

          </article>


          {/* Monthly */}
          <article className="rental-options-section__card">

            <div className="rental-options-section__card-type">
              MONTHLY
            </div>

            <h3>Monthly term</h3>

            <p>
              Pick a start date. Best rate for longer seasons. COI required.
            </p>

            <div className="rental-options-section__price">
              From <strong>$—</strong>
            </div>

          </article>

        </div>

      </div>

    </section>
  );
};

export default RentalOptions;