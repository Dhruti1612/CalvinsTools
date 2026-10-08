
import { Link } from "react-router-dom";
import "./CustomBuildTypes.css";

const CustomBuildTypes = () => {
  const buildTypes = [
    {
      image: "/Images/truck4.jpg",
      
      title: "Custom Food Trailers",
      description:
        "Mobile kitchens built around your menu — from coffee and desserts to full BBQ and catering kitchens.",
      linkText: "EXPLORE FOOD BUILDS →",
      link: "/custom-trailers",
    },
    {
      image: "/Images/truck7.jpg",
      
      title: "Custom Specialty Trailers",
      description:
        "Nail salon, mobile retail, boutique and mobile bar trailers — laid out for how you work.",
      linkText: "EXPLORE SPECIALTY BUILDS →",
      link: "/custom-trailers",
    },
    {
      image: "/Images/truck10.jpg",
      
      title: "Custom Commercial Trailers",
      description:
        "Office, service and brand-activation trailers for businesses and events.",
      linkText: "EXPLORE COMMERCIAL BUILDS →",
      link: "/custom-trailers",
    },
  ];

  return (
    <section className="custom-build-types">

      <div className="custom-build-types__container">

        {/* =================================
            TOP AREA
        ================================= */}

        <div className="custom-build-types__top">

          {/* LEFT */}

          <div className="custom-build-types__heading-area">

            <div className="custom-build-types__label">
              <span>01</span>
              <i></i>
              <strong>WHAT WE BUILD</strong>
            </div>

            <h2 className="custom-build-types__title">
              Custom Trailers for
              <br />
              <em>every kind of business.</em>
            </h2>

          </div>


          {/* RIGHT */}

          <div className="custom-build-types__intro">

            <p>
              Every Custom Trailer is built to order around your menu or
              service, your equipment and your brand. Tell us what you do
              — we'll design the layout around it.
            </p>

          </div>

        </div>


        {/* =================================
            BUILD TYPE CARDS
        ================================= */}

        <div className="custom-build-types__grid">

          {buildTypes.map((type) => (

            <article
              className="custom-build-types__card"
              key={type.title}
            >

              {/* =================================
                  IMAGE
              ================================= */}

              <div className="custom-build-types__photo">

                <img
                  src={type.image}
                  alt={type.title}
                  className="custom-build-types__photo-image"
                />

                <div className="custom-build-types__photo-overlay"></div>

                

              </div>


              {/* =================================
                  CONTENT
              ================================= */}

              <div className="custom-build-types__card-content">

                <h3 className="custom-build-types__card-title">
                  {type.title}
                </h3>

                <p className="custom-build-types__card-description">
                  {type.description}
                </p>

                <Link
                  to={type.link}
                  className="custom-build-types__card-link"
                >
                  {type.linkText}
                </Link>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
};

export default CustomBuildTypes;