
import { Link } from "react-router-dom";
import "./Compliance.css";

const complianceItems = [
  {
    title: "NHTSA Compliant",
    description: "VIN, lights, brakes, tires & DOT labels",
  },
  {
    title: "UL / ETL Listed Components",
    description: "Listed electrical components",
  },
  {
    title: "NSF Certified Equipment",
    description: "Food-contact surfaces, sinks, refrigeration",
  },
  {
    title: "Fire Suppression System",
    description: "Hood & suppression (UL 300)",
  },
  {
    title: "Designed for Local Inspection",
    description: "Final approval by your local AHJ",
  },
  {
    title: "Title & Registration Docs",
    description: "Documentation provided with every sale",
  },
];

const ShieldIcon = () => {
  return (
    <svg
      className="compliance__icon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 3L19 6V11.2C19 15.7 16.1 19.5 12 21C7.9 19.5 5 15.7 5 11.2V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      <path
        d="M9.2 12L11.2 14L15.2 10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Compliance = () => {
  return (
    <section className="compliance" id="compliance">
      <div className="compliance__container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="compliance__header">

          <div className="compliance__heading-row">

            <div className="compliance__section-label">

              <span className="compliance__number">
                04
              </span>

              <span className="compliance__line"></span>

              <span className="compliance__label">
                COMPLIANCE &amp; QUALITY CONTROL
              </span>

            </div>


            <h2 className="compliance__title">
              Built to U.S. standards.{" "}
              <em>Documented for inspection.</em>
            </h2>

          </div>


          <Link
            to="/documents"
            className="compliance__button"
          >
            SEE DOCUMENTS
            <span>→</span>
          </Link>

        </div>


        {/* =====================================================
            COMPLIANCE CARDS
        ===================================================== */}

        <div className="compliance__grid">

          {complianceItems.map((item) => (
            <article
              className="compliance__card"
              key={item.title}
            >

              <ShieldIcon />

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </article>
          ))}

        </div>


        {/* =====================================================
            FOOTNOTE
        ===================================================== */}

        <div className="compliance__footnote">

          <p>
            Final health and fire approval is made by your local
            authority having jurisdiction (AHJ); requirements vary
            by county. We provide the documentation your inspector
            asks for.
          </p>

          <span>
            CONFIRM: LIST ONLY DOCUMENT-BACKED ITEMS
          </span>

        </div>

      </div>
    </section>
  );
};

export default Compliance;