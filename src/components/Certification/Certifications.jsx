
import { Link } from "react-router-dom";
import "./Certifications.css";

const certifications = [
  {
    number: "01",
    title: "NHTSA",
    subtitle: "Vehicle Safety",
    text: "Trailer requirements and applicable vehicle safety standards are considered as part of the trailer specification and documentation process."
  },
  {
    number: "02",
    title: "UL / ETL",
    subtitle: "Electrical Components",
    text: "Applicable electrical components may use recognized UL or ETL listed components, depending on the equipment and configuration."
  },
  {
    number: "03",
    title: "NSF",
    subtitle: "Food Equipment",
    text: "Food-service equipment and components can be selected with applicable NSF requirements in mind for food trailer applications."
  },
  {
    number: "04",
    title: "UL 300",
    subtitle: "Fire Suppression",
    text: "Commercial cooking applications may incorporate fire suppression systems designed around applicable UL 300 requirements."
  }
];

function Certifications() {
  return (
    <div className="certifications-page">

      

      {/* ================= HERO ================= */}

      <section className="certifications-hero">

        <div className="certifications-hero-overlay"></div>

        <div className="certifications-hero-content">

          <span className="certifications-eyebrow">
            QUALITY & COMPLIANCE
          </span>

          <h1>
            Built With
            <br />
            Quality in Mind
          </h1>

          <p>
            Understanding the standards, components, and
            requirements that can apply to food and specialty
            trailer builds.
          </p>

        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="certifications-intro section-padding">

        <div className="certifications-intro-inner">

          <div className="certifications-intro-heading">

            <span className="section-eyebrow">
              OUR APPROACH
            </span>

            <h2>
              Quality Is Part
              <br />
              of the Process
            </h2>

          </div>

          <div className="certifications-intro-text">

            <p>
              Trailer requirements can vary depending on the
              trailer type, equipment, intended use, and location.
              We consider these factors when planning trailer
              solutions for our customers.
            </p>

            <p>
              Certain components and systems may be selected
              according to recognized industry standards and
              applicable requirements.
            </p>

            <p>
              The specific requirements for a trailer should always
              be confirmed for its intended location and use.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CERTIFICATIONS ================= */}

      <section className="certifications-list section-padding">

        <div className="certifications-section-heading">

          <span className="section-eyebrow">
            STANDARDS & COMPONENTS
          </span>

          <h2>
            Compliance
            <br />
            Considerations
          </h2>

        </div>

        <div className="certifications-grid">

          {certifications.map((item) => (

            <article
              className="certification-card"
              key={item.number}
            >

              <span className="certification-number">
                {item.number}
              </span>

              <div className="certification-card-content">

                <h3>
                  {item.title}
                </h3>

                <span className="certification-subtitle">
                  {item.subtitle}
                </span>

                <p>
                  {item.text}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ================= FOOD TRAILER ================= */}

      <section className="certifications-food section-padding">

        <div className="certifications-food-grid">

          <div className="certifications-food-image">

            <img
              src="/images/food-trailer.jpg"
              alt="Food trailer"
            />

          </div>

          <div className="certifications-food-content">

            <span className="section-eyebrow">
              FOOD TRAILER APPLICATIONS
            </span>

            <h2>
              Equipment &
              <br />
              Food-Service Needs
            </h2>

            <p>
              Food trailers can include cooking equipment,
              refrigeration, sinks, electrical systems, and other
              components that may have their own applicable
              requirements.
            </p>

            <p>
              The configuration of each trailer can affect which
              standards, inspections, and approvals apply.
            </p>

            <Link
              to="/custom-trailers"
              className="certifications-text-link"
            >
              Explore Custom Builds →
            </Link>

          </div>

        </div>

      </section>


      {/* ================= FIRE SUPPRESSION ================= */}

      <section className="certifications-fire">

        <div className="certifications-fire-content">

          <span className="section-eyebrow">
            COMMERCIAL COOKING
          </span>

          <h2>
            Fire Suppression
            <br />
            Considerations
          </h2>

          <p>
            Commercial cooking equipment may require an
            appropriate fire suppression system. Systems designed
            around UL 300 requirements can be relevant to
            commercial cooking applications.
          </p>

          <p>
            The required system depends on the equipment and
            configuration of the trailer.
          </p>

        </div>

      </section>


      {/* ================= AHJ ================= */}

      <section className="certifications-ahj section-padding">

        <div className="certifications-ahj-inner">

          <div className="certifications-ahj-heading">

            <span className="section-eyebrow">
              IMPORTANT
            </span>

            <h2>
              Local Requirements
              <br />
              Still Matter
            </h2>

          </div>

          <div className="certifications-ahj-content">

            <p>
              Requirements can differ between cities, counties,
              states, fire authorities, health departments, and
              other local authorities.
            </p>

            <p>
              Customers should confirm applicable requirements
              with their local Authority Having Jurisdiction (AHJ)
              before purchasing, building, or operating a trailer.
            </p>

            <div className="ahj-note">

              <strong>
                Important:
              </strong>

              <span>
                Compliance requirements depend on the specific
                trailer, equipment, intended use, and location.
                Information on this page should not be treated as
                a guarantee of approval by any particular authority.
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROCESS ================= */}

      <section className="certifications-process section-padding">

        <div className="certifications-section-heading">

          <span className="section-eyebrow">
            OUR PROCESS
          </span>

          <h2>
            From Build
            <br />
            to Handover
          </h2>

        </div>

        <div className="certifications-process-grid">

          <div className="process-item">

            <span>01</span>

            <h3>
              Understand
            </h3>

            <p>
              We start by understanding the trailer's intended
              use, equipment, and business requirements.
            </p>

          </div>


          <div className="process-item">

            <span>02</span>

            <h3>
              Configure
            </h3>

            <p>
              Trailer layouts and components are planned around
              the intended application and available options.
            </p>

          </div>


          <div className="process-item">

            <span>03</span>

            <h3>
              Inspect
            </h3>

            <p>
              Applicable inspection and documentation steps are
              considered as part of the process.
            </p>

          </div>


          <div className="process-item">

            <span>04</span>

            <h3>
              Handover
            </h3>

            <p>
              The completed trailer is prepared for the customer
              according to its intended use and configuration.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="certifications-cta">

        <div className="certifications-cta-content">

          <span className="section-eyebrow">
            HAVE QUESTIONS?
          </span>

          <h2>
            Let's Talk About
            <br />
            Your Trailer.
          </h2>

          <p>
            Tell us what you're planning to build, buy, or rent
            and we'll help you understand the options.
          </p>

          <Link
            to="/contact"
            className="certifications-cta-button"
          >
            GET IN TOUCH
          </Link>

        </div>

      </section>


      

    </div>
  );
}

export default Certifications;