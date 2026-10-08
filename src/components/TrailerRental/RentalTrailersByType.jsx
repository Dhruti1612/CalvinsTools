import { Link } from "react-router-dom";
import "./RentalTrailersByType.css";

const RentalTrailersByType = () => {
  const trailerTypes = [
    {
      image: "/Images/truck4.jpg",
      
      title: "Food & Concession Trailer Rental",
      description:
        "Mobile kitchens and concession trailers for restaurants, catering and events.",
    },
    {
      image: "/Images/nail.jpg",
      
      title: "Nail Salon Trailer Rental",
      description:
        "Mobile nail studio trailers with stations, ventilation and hot water.",
    },
    {
      image: "/Images/truck10.jpg",
     
      title: "Retail & Boutique Trailer Rental",
      description:
        "Mobile boutique trailers for pop-ups, markets and brand tours.",
    },
    {
      image: "/Images/truck6.jpg",
      title: "Event & Pop-Up Trailer Rental",
      description:
        "Short rentals for festivals, weekends and one-day events.",
    },
  ];

  const trailerSizes = [
    "10 ft Rental Trailers",
    "12 ft Rental Trailers",
    "14 ft Rental Trailers",
    "16 ft Rental Trailers",
    "18 ft Rental Trailers",
    "20 ft Rental Trailers",
  ];

  return (
    <section className="rental-trailers-type-section">

      <div className="rental-trailers-type-section__container">

        {/* =================================
            TOP AREA
        ================================= */}

        <div className="rental-trailers-type-section__top">

          <div className="rental-trailers-type-section__heading-area">

            <div className="rental-trailers-type-section__label">
              <span>06</span>
              <i></i>
              <strong>RENTAL TRAILERS BY TYPE</strong>
            </div>

            <h2 className="rental-trailers-type-section__title">
              Food Trailers and
              <br />
              <em>Specialty Trailers for rent.</em>
            </h2>

          </div>


          <div className="rental-trailers-type-section__intro">

            <p>
              Browse by what you serve or sell. Each type has its own page
              with sizes, equipment and live availability.
            </p>

          </div>

        </div>


        {/* =================================
            TRAILER TYPE CARDS
        ================================= */}

        <div className="rental-trailers-type-section__grid">

          {trailerTypes.map((type) => (

            <article
              className="rental-trailers-type-section__card"
              key={type.title}
            >

              {/* =================================
                  PHOTO
              ================================= */}

              <div className="rental-trailers-type-section__photo">

                <img
                  src={type.image}
                  alt={type.title}
                  className="rental-trailers-type-section__photo-image"
                />

                <div className="rental-trailers-type-section__photo-overlay"></div>

                

              </div>


              {/* =================================
                  CONTENT
              ================================= */}

              <div className="rental-trailers-type-section__card-content">

                <h3 className="rental-trailers-type-section__card-title">
                  {type.title}
                </h3>

                <p className="rental-trailers-type-section__card-description">
                  {type.description}
                </p>

                <Link
                  to="/trailer-rental"
                  className="rental-trailers-type-section__rent-link"
                >
                  RENT NOW →
                </Link>

              </div>

            </article>

          ))}

        </div>


        {/* =================================
            BY SIZE
        ================================= */}

        <div className="rental-trailers-type-section__sizes">

          <span className="rental-trailers-type-section__sizes-label">
            BY SIZE
          </span>

          <div className="rental-trailers-type-section__sizes-list">

            {trailerSizes.map((size) => (

              <Link
                key={size}
                to="/trailer-rental"
                className="rental-trailers-type-section__size-link"
              >
                {size}
              </Link>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default RentalTrailersByType;