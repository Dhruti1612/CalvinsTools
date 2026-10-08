
import { Link } from "react-router-dom";
import "./Trailers.css";

const trailers = [
  {
    number: "01",
    title: "FOOD TRAILERS",
    description:
      "Food and concession trailers, mobile kitchens — 10 to 22 ft.",
    buttons: [
      {
        text: "RENT NOW",
        link: "/trailer-rental",
        type: "orange",
      },
      {
        text: "BUY",
        link: "/trailers-for-sale",
        type: "outline",
      },
    ],
  },
  {
    number: "02",
    title: "SPECIALTY TRAILERS",
    description:
      "Nail salon, mobile retail, mobile bar and refrigerated trailers.",
    buttons: [
      {
        text: "RENT NOW",
        link: "/trailer-rental",
        type: "orange",
      },
      {
        text: "BUY",
        link: "/trailers-for-sale",
        type: "outline",
      },
    ],
  },
  {
    number: "03",
    title: "CUSTOM TRAILERS",
    description:
      "Built to order around your menu, equipment and brand.",
    buttons: [
      {
        text: "START YOUR BUILD",
        link: "/custom-trailers",
        type: "dark",
      },
    ],
  },
];

const Trailers = () => {
  return (
    <section className="trailers">
      <div className="trailers__container">

        <div className="trailers__grid">
          {trailers.map((trailer) => (
            <article
              className="trailers__card"
              key={trailer.number}
            >

              {/* CARD HEADER */}
              <div className="trailers__header">

                <div className="trailers__number">
                  {trailer.number}
                </div>

                <h3 className="trailers__title">
                  {trailer.title}
                </h3>

              </div>


              {/* DESCRIPTION */}
              <p className="trailers__description">
                {trailer.description}
              </p>


              {/* BUTTONS */}
              <div className="trailers__actions">

                {trailer.buttons.map((button) => (
                  <Link
                    key={button.text}
                    to={button.link}
                    className={`trailers__button trailers__button--${button.type}`}
                  >
                    {button.text}
                  </Link>
                ))}

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Trailers;