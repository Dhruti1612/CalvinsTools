
import { Link, useSearchParams } from "react-router-dom";
import "./RentalTrailers.css";

const RentalTrailers = () => {
  const [searchParams] = useSearchParams();

  /* =========================================================
     URL FILTERS
  ========================================================= */

  const categoryFromUrl = searchParams.get("category");
  const sizeFromUrl = searchParams.get("size");
  const typeFromUrl = searchParams.get("type");


  /* =========================================================
     CATEGORY MAP
  ========================================================= */

  const categoryMap = {
    food: "Food & Concession",
    "nail-salon": "Nail Salon",
    retail: "Retail & Boutique",
    event: "Event & Pop-Up",
  };


  /* =========================================================
     INITIAL FILTER STATE
  ========================================================= */

 
  const activeCategory =
    categoryMap[categoryFromUrl] || "All Rental Trailers";

  const activeSize =
    sizeFromUrl ? `${sizeFromUrl} ft` : "SIZE";

  const activeType =
    typeFromUrl || "TYPE";



 


  /* =========================================================
     CATEGORY OPTIONS
  ========================================================= */

  const categories = [
    "All Rental Trailers",
    "Food & Concession",
    "Nail Salon",
    "Retail & Boutique",
    "Event & Pop-Up",
  ];


  /* =========================================================
     SIZE OPTIONS
  ========================================================= */

  const sizes = [
    "SIZE",
    "10 ft",
    "12 ft",
    "14 ft",
    "16 ft",
    "18 ft",
    "20 ft",
  ];


  /* =========================================================
     TRAILER DATA
  ========================================================= */

  const trailers = [
    {
      image: "/Images/truck1.jpeg",
      category: "FOOD & CONCESSION",
      filterCategory: "Food & Concession",
      filterType: "all-purpose",
      status: "AVAILABLE NOW",
      statusType: "available",
      size: "16 FT",
      name: "All-Purpose Food Trailer",
      highlights: [
        "Flat-top griddle",
        "Fryers",
        "3-comp sink",
      ],
    },

    {
      image: "/Images/truck6.jpg",
      category: "FOOD & CONCESSION",
      filterCategory: "Food & Concession",
      filterType: "latin",
      status: "AVAILABLE NOW",
      statusType: "available",
      size: "14 FT",
      name: "Latin Street Trailer",
      highlights: [
        "Griddle",
        "Steam table",
        "Prep cooler",
      ],
    },

    {
      image: "/Images/bbq.jpg",
      category: "FOOD & CONCESSION",
      filterCategory: "Food & Concession",
      filterType: "bbq",
      status: "AVAILABLE OCT 12",
      statusType: "soon",
      size: "18 FT",
      name: "BBQ Smokehouse Trailer",
      highlights: [
        "Smoker porch",
        "Warming cabinet",
        "Hood",
      ],
    },

    {
      image: "/Images/coffee.jpg",
      category: "FOOD & CONCESSION",
      filterCategory: "Food & Concession",
      filterType: "coffee",
      status: "AVAILABLE NOW",
      statusType: "available",
      size: "12 FT",
      name: "Coffee & Drinks Trailer",
      highlights: [
        "Espresso-ready",
        "Ice bin",
        "Undercounter fridge",
      ],
    },

    {
      image: "/Images/nail.jpg",
      category: "NAIL SALON",
      filterCategory: "Nail Salon",
      filterType: "nail-salon",
      status: "BOOKED",
      statusType: "booked",
      size: "16 FT",
      name: "Nail Studio Trailer",
      highlights: [
        "2 pedicure stations",
        "Ventilation",
        "Hot water",
      ],
    },

    {
      image: "/Images/truck8.jpg",
      category: "RETAIL & BOUTIQUE",
      filterCategory: "Retail & Boutique",
      filterType: "retail",
      status: "AVAILABLE NOW",
      statusType: "available",
      size: "14 FT",
      name: "Mobile Retail Trailer",
      highlights: [
        "Display walls",
        "Fitting area",
        "Lighting",
      ],
    },
  ];


  /* =========================================================
     FILTER TRAILERS
  ========================================================= */

  const filteredTrailers = trailers.filter((trailer) => {
    const categoryMatch =
      activeCategory === "All Rental Trailers" ||
      trailer.filterCategory === activeCategory;

    const sizeMatch =
      activeSize === "SIZE" ||
      trailer.size === activeSize.toUpperCase();

    const typeMatch =
      activeType === "TYPE" ||
      trailer.filterType === activeType;

    return (
      categoryMatch &&
      sizeMatch &&
      typeMatch
    );
  });


  /* =========================================================
     CATEGORY URLS
  ========================================================= */

  const categoryUrls = {
    "All Rental Trailers":
      "/trailer-rental",

    "Food & Concession":
      "/trailer-rental?category=food",

    "Nail Salon":
      "/trailer-rental?category=nail-salon",

    "Retail & Boutique":
      "/trailer-rental?category=retail",

    "Event & Pop-Up":
      "/trailer-rental?category=event",
  };


  /* =========================================================
     SIZE URLS
  ========================================================= */

  const sizeUrls = {
    "10 ft":
      "/trailer-rental?size=10",

    "12 ft":
      "/trailer-rental?size=12",

    "14 ft":
      "/trailer-rental?size=14",

    "16 ft":
      "/trailer-rental?size=16",

    "18 ft":
      "/trailer-rental?size=18",

    "20 ft":
      "/trailer-rental?size=20",
  };


  return (
    <section className="rental-trailers-section">

      <div className="rental-trailers-section__container">

        {/* =========================================
            TOP SECTION
        ========================================= */}

        <div className="rental-trailers-section__top">

          <div className="rental-trailers-section__heading-area">

            <div className="rental-trailers-section__label">

              <span>02</span>

              <i></i>

              <strong>
                AVAILABLE RENTAL TRAILERS
              </strong>

            </div>


            <h2 className="rental-trailers-section__title">

              Choose your trailer.

              <br />

              <em>
                See live availability.
              </em>

            </h2>

          </div>


          <div className="rental-trailers-section__intro">

            <p>
              Only trailers in our current rental fleet are listed.
              Booked trailers show the next open date — or join the
              waitlist and we'll text you when it frees up.
            </p>


            <Link
              to="/trailer-rental"
              className="rental-trailers-section__availability-link"
            >
              See live availability.
            </Link>

          </div>

        </div>


        {/* =========================================
            FILTERS
        ========================================= */}

        <div className="rental-trailers-section__filters">

          {/* CATEGORY FILTERS */}

          <div className="rental-trailers-section__category-filters">

            {categories.map((category) => (

              <Link
                key={category}
                to={categoryUrls[category]}
                className={`rental-trailers-section__filter-button ${
                  activeCategory === category
                    ? "rental-trailers-section__filter-button--active"
                    : ""
                }`}
              >
                {category}
              </Link>

            ))}

          </div>


          {/* SIZE FILTERS */}

          <div className="rental-trailers-section__size-filters">

            <span className="rental-trailers-section__size-label">
              SIZE
            </span>


            {sizes.slice(1).map((size) => (

              <Link
                key={size}
                to={sizeUrls[size]}
                className={`rental-trailers-section__size-button ${
                  activeSize === size
                    ? "rental-trailers-section__size-button--active"
                    : ""
                }`}
              >
                {size}
              </Link>

            ))}

          </div>

        </div>


        {/* =========================================
            TRAILER GRID
        ========================================= */}

        <div className="rental-trailers-section__grid">

          {filteredTrailers.length > 0 ? (

            filteredTrailers.map((trailer) => (

              <article
                className="rental-trailers-section__card"
                key={trailer.name}
              >

                {/* PHOTO */}

                <div className="rental-trailers-section__photo">

                  <img
                    src={trailer.image}
                    alt={trailer.name}
                    className="rental-trailers-section__photo-image"
                  />

                  <div className="rental-trailers-section__photo-overlay"></div>

                  <div className="rental-trailers-section__category-badge">
                    {trailer.category}
                  </div>

                </div>


                {/* CARD CONTENT */}

                <div className="rental-trailers-section__card-content">

                  <div className="rental-trailers-section__card-meta">

                    <span
                      className={`rental-trailers-section__status rental-trailers-section__status--${trailer.statusType}`}
                    >

                      <i></i>

                      {trailer.status}

                    </span>


                    <span className="rental-trailers-section__size">
                      {trailer.size}
                    </span>

                  </div>


                  <h3 className="rental-trailers-section__card-title">
                    {trailer.name}
                  </h3>


                  <div className="rental-trailers-section__highlights">

                    {trailer.highlights.map((highlight) => (

                      <span key={highlight}>
                        {highlight}
                      </span>

                    ))}

                  </div>


                  <div className="rental-trailers-section__price-row">

                    <span>
                      From
                    </span>

                    <strong>
                      $—
                    </strong>

                    <span>
                      /day · $— /week · $— /month
                    </span>

                  </div>


                  <div className="rental-trailers-section__actions">

                    {trailer.statusType === "booked" ? (

                      <Link
                        to="/trailer-rental"
                        className="rental-trailers-section__rent-button rental-trailers-section__rent-button--waitlist"
                      >
                        JOIN WAITLIST →
                      </Link>

                    ) : (

                      <Link
                        to="/trailer-rental"
                        className="rental-trailers-section__rent-button"
                      >
                        RENT NOW →
                      </Link>

                    )}


                    <Link
                      to="/trailer-rental"
                      className="rental-trailers-section__details-button"
                    >
                      Details
                    </Link>

                  </div>

                </div>

              </article>

            ))

          ) : (

            <div className="rental-trailers-section__empty">
              No trailers available for this selection.
            </div>

          )}

        </div>

      </div>

    </section>
  );
};

export default RentalTrailers;