
import "./RentalAddons.css";

const RentalAddons = () => {
  const addons = [
    "Generators",
    "POS systems",
    "Menu boards",
    "Pizza ovens",
    "Charbroilers",
    "Hot dog rollers",
    "Steam tables",
    "Refrigerators",
    "Freezers",
  ];

  return (
    <section className="rental-addons-section">

      <div className="rental-addons-section__container">

        {/* =================================
            TOP CONTENT
        ================================= */}

        <div className="rental-addons-section__top">

          {/* Left */}
          <div className="rental-addons-section__heading-area">

            <div className="rental-addons-section__label">
              <span>04</span>
              <i></i>
              <strong>ADD-ON EQUIPMENT</strong>
            </div>

            <h2 className="rental-addons-section__title">
              Add what your menu needs.
            </h2>

          </div>


          {/* Right */}
          <div className="rental-addons-section__intro">

            <p>
              Add equipment when you book — priced by the day,
              weekend, week or month, and only shown when it's in stock
              for your dates.
            </p>

           

          </div>

        </div>


        {/* =================================
            ADD-ON CARDS
        ================================= */}

        <div className="rental-addons-section__grid">

          {addons.map((addon) => (

            <article
              className="rental-addons-section__card"
              key={addon}
            >

              <div className="rental-addons-section__icon">
                <span></span>
              </div>

              <h3>
                {addon}
              </h3>

              <p>
                From $— /day
              </p>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
};

export default RentalAddons;