
import "./RentalBeforeBook.css";

const RentalBeforeBook = () => {
  const whatYouNeed = [
    "Valid driver's license (uploaded at checkout)",
    "Tow vehicle rated for the trailer — or choose delivery",
    "Refundable security deposit (set by state and rental type)",
    "Certificate of Insurance (COI) for monthly rentals",
    "Local permits for where you operate",
  ];

  const whatsIncluded = [
    "Photo inspection report before handover",
    "Walk-through of equipment, propane, water and power",
    "Operating guides and videos in your customer account",
    "Support by phone or WhatsApp while you operate",
    "Documentation your local inspector may ask for",
  ];

  return (
    <section className="rental-before-book-section">

      <div className="rental-before-book-section__container">

        {/* =================================
            TOP AREA
        ================================= */}

        <div className="rental-before-book-section__top">

          {/* Left */}
          <div className="rental-before-book-section__heading-area">

            <div className="rental-before-book-section__label">
              <span>05</span>
              <i></i>
              <strong>BEFORE YOU BOOK</strong>
            </div>

            <h2 className="rental-before-book-section__title">
              What you need.
              <br />
              <em>What's included.</em>
            </h2>

          </div>


          {/* Right */}
          <div className="rental-before-book-section__intro">

            <p>
              No surprises at pickup. Here's what we ask for — and what
              every rental comes with.
            </p>

          </div>

        </div>


        {/* =================================
            INFORMATION CARDS
        ================================= */}

        <div className="rental-before-book-section__cards">

          {/* WHAT YOU NEED */}
          <article className="rental-before-book-section__card rental-before-book-section__card--need">

            <div className="rental-before-book-section__card-heading">
              WHAT YOU NEED
            </div>

            <ul className="rental-before-book-section__list">

              {whatYouNeed.map((item) => (
                <li key={item}>
                  <span className="rental-before-book-section__check">
                    ✓
                  </span>

                  <span>{item}</span>
                </li>
              ))}

            </ul>

          </article>


          {/* WHAT'S INCLUDED */}
          <article className="rental-before-book-section__card rental-before-book-section__card--included">

            <div className="rental-before-book-section__card-heading">
              WHAT'S INCLUDED
            </div>

            <ul className="rental-before-book-section__list">

              {whatsIncluded.map((item) => (
                <li key={item}>
                  <span className="rental-before-book-section__check">
                    ✓
                  </span>

                  <span>{item}</span>
                </li>
              ))}

            </ul>

          </article>

        </div>


        {/* =================================
            AHJ NOTE
        ================================= */}

        <p className="rental-before-book-section__bottom-note">
          Final health and fire approval is made by your local authority
          having jurisdiction (AHJ); requirements vary by county. We
          provide the documentation your inspector asks for.
        </p>

      </div>

    </section>
  );
};

export default RentalBeforeBook;