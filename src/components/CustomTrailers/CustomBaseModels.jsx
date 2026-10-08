
import { Link } from "react-router-dom";
import "./CustomBaseModels.css";

const CustomBaseModels = () => {
  const baseModels = [
    {
      image: "/Images/truck2.jpeg",
      size: "16 ft",
      title: "All-Purpose Food Trailer",
    },
    {
      image: "/Images/latin.jpg",
      size: "14 ft",
      title: "Latin Street Trailer",
    },
    {
      image: "/Images/bbq.jpg",
      size: "18–20 ft",
      title: "BBQ Smokehouse Trailer",
    },
    {
      image: "/Images/coffee.jpg",
      size: "12 ft",
      title: "Coffee & Drinks Trailer",
    },
    {
      image: "/Images/icecream.jpg",
      size: "14 ft",
      title: "Ice Cream & Sweets Trailer",
    },
    {
      image: "/Images/nail.jpg",
      size: "16 ft",
      title: "Nail Studio Trailer",
    },
    {
      image: "/Images/truck5.jpg",
      size: "14 ft",
      title: "Mobile Retail Trailer",
    },
  ];

  return (
    <section className="custom-base-models">

      <div className="custom-base-models__container">

        {/* =================================
            TOP AREA
        ================================= */}

        <div className="custom-base-models__top">

          <div className="custom-base-models__heading-area">

            <div className="custom-base-models__label">
              <span>02</span>
              <i></i>
              <strong>START FROM A BASE MODEL</strong>
            </div>

            <h2 className="custom-base-models__title">
              Proven layouts,
              <br />
              <em>made yours.</em>
            </h2>

          </div>


          <div className="custom-base-models__intro">

            <p>
              Most builds start from a base model that already works —
              faster to quote, and the result fits better. Change the
              equipment, layout, finishes and branding from there.
            </p>

            
          </div>

        </div>


        {/* =================================
            BASE MODEL GRID
        ================================= */}

        <div className="custom-base-models__grid">

          {baseModels.map((model) => (

            <article
              className="custom-base-models__card"
              key={model.title}
            >

              {/* IMAGE */}

              <div className="custom-base-models__photo">

                <img
                  src={model.image}
                  alt={model.title}
                  className="custom-base-models__photo-image"
                />

                <div className="custom-base-models__photo-overlay"></div>

               

              </div>


              {/* CONTENT */}

              <div className="custom-base-models__card-content">

                <div className="custom-base-models__size">
                  {model.size}
                </div>

                <h3 className="custom-base-models__card-title">
                  {model.title}
                </h3>

                <Link
                  to="/custom-trailers"
                  className="custom-base-models__card-link"
                >
                  START FROM THIS MODEL →
                </Link>

              </div>

            </article>

          ))}


          {/* =================================
              START FROM SCRATCH CARD
          ================================= */}

          <article className="custom-base-models__scratch-card">

            <h3>
              Starting from scratch?
            </h3>

            <p>
              Any size, any layout. Tell us your menu and we'll draw it.
            </p>

            <Link
              to="/custom-trailers"
              className="custom-base-models__scratch-link"
            >
              START YOUR CUSTOM BUILD →
            </Link>

          </article>

        </div>

      </div>

    </section>
  );
};

export default CustomBaseModels;