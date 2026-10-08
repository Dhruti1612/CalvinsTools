
import "./Trust.css";

const trustItems = [
  {
    title: "★★★★★",
    text: "5.0 · 120+ Google reviews",
  },
  {
    title: "U.S.",
    text: "Built to U.S. standards",
  },
  {
    title: "QC",
    text: "Photo inspection report",
  },
  {
    title: "10–22 FT",
    text: "Food, specialty & custom sizes",
  },
];

const Trust = () => {
  return (
    <section className="trust">

      <div className="trust__container">

        {trustItems.map((item, index) => (
          <div
            className="trust__item"
            key={index}
          >
            <strong className="trust__title">
              {item.title}
            </strong>

            <span className="trust__text">
              {item.text}
            </span>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Trust;