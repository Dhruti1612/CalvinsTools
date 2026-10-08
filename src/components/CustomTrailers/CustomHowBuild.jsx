
import "./CustomHowBuild.css";

const CustomHowBuild = () => {
  const buildSteps = [
    {
      number: "STEP 01",
      title: "Request & review",
      description:
        "Send your configuration. Our Custom Build team reviews it and calls you to go over the details.",
    },
    {
      number: "STEP 02",
      title: "Drawings & quote",
      description:
        "You get floor-plan drawings and a written quote. Revise until it's right.",
    },
    {
      number: "STEP 03",
      title: "Deposit & production",
      description:
        "Approve the drawings, pay the deposit and your build starts — with photo updates along the way.",
    },
    {
      number: "STEP 04",
      title: "Inspection & handover",
      description:
        "Photo inspection report and compliance documents, then pickup or delivery with a full walk-through.",
    },
  ];

  return (
    <section className="custom-how-build">

      <div className="custom-how-build__container">

        {/* =================================
            TOP AREA
        ================================= */}

        <div className="custom-how-build__top">

          {/* LEFT */}

          <div className="custom-how-build__heading-area">

            <div className="custom-how-build__label">
              <span>04</span>
              <i></i>
              <strong>HOW WE BUILD</strong>
            </div>

            <h2 className="custom-how-build__title">
              From drawing
              <br />
              <em>to handover.</em>
            </h2>

          </div>


          {/* RIGHT */}

          <div className="custom-how-build__intro">

            <p>
              One project manager from first drawing to handover, with
              photo updates from the production floor.
            </p>

            <strong className="custom-how-build__timeline">
              Typical build time: about 6 months from approved drawings.
            </strong>

            <span className="custom-how-build__confirm">
              CONFIRM
            </span>

          </div>

        </div>


        {/* =================================
            BUILD STEPS
        ================================= */}

        <div className="custom-how-build__steps">

          {buildSteps.map((step, index) => (

            <article
              className={`custom-how-build__step ${
                index === 0
                  ? "custom-how-build__step--first"
                  : ""
              }`}
              key={step.number}
            >

              <span className="custom-how-build__step-number">
                {step.number}
              </span>

              <h3 className="custom-how-build__step-title">
                {step.title}
              </h3>

              <p className="custom-how-build__step-description">
                {step.description}
              </p>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
};

export default CustomHowBuild;