
import { Link } from "react-router-dom";
import "./ShopBySize.css";

const sizes = [
  {
    size: "10",
    title: "10 FT Food Trailer",
    description: "Coffee, drinks, desserts",
    rent: true,
    buy: true,
  },
  {
    size: "12",
    title: "12 FT Food Trailer",
    description: "Coffee & drinks, ice cream",
    rent: true,
    buy: true,
  },
  {
    size: "14",
    title: "14 FT Food Trailer",
    description: "Tacos, sweets, retail",
    rent: true,
    buy: true,
  },
  {
    size: "16",
    title: "16 FT Food Trailer",
    description: "Burgers & fried food, nail studio",
    rent: true,
    buy: true,
  },
  {
    size: "18",
    title: "18 FT Food Trailer",
    description: "BBQ smokehouse, everyday service",
    rent: true,
    buy: true,
  },
  {
    size: "20",
    title: "20 FT Food Trailer",
    description: "BBQ, catering, large events",
    rent: true,
    buy: true,
  },
  {
    size: "22",
    title: "22 FT Food Trailer",
    description: "Full kitchen, high-volume service",
    rent: false,
    buy: true,
  },
];

const ShopBySize = () => {
  return (
    <section className="shop-size" id="shop-by-size">
      <div className="shop-size__container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="shop-size__header">

          <div className="shop-size__header-left">

            <div className="shop-size__section-label">
              05 / SHOP BY SIZE
            </div>

            <h2 className="shop-size__title">
              Find Your{" "}
              <em>Trailer Size</em>
            </h2>

          </div>


          <div className="shop-size__header-right">

            <p>
              Compare food trailer sizes by menu, crew and workspace.
              <br />
              Rent 10–20 ft, buy 10–22 ft, or build any size.
            </p>

            <Link
              to="/size-guide"
              className="shop-size__guide-button"
            >
              READ THE SIZE GUIDE →
            </Link>

          </div>

        </div>


        {/* =====================================================
            SIZE GRID
        ===================================================== */}

        <div className="shop-size__grid">

          {sizes.map((item) => (
            <article
              className="shop-size__card"
              key={item.size}
            >

              <div className="shop-size__size">
                <strong>{item.size}</strong>
                <span>FT</span>
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

              <div className="shop-size__actions">

                {item.rent && (
                  <Link
                    to="/trailer-rental"
                    className="shop-size__rent-button"
                  >
                    RENT NOW
                  </Link>
                )}

                {item.buy && (
                  <Link
                    to="/trailers-for-sale"
                    className="shop-size__buy-button"
                  >
                    BUY
                  </Link>
                )}

              </div>

            </article>
          ))}


          {/* ===================================================
              CUSTOM SIZE CARD
          =================================================== */}

          <article className="shop-size__custom">

            <h3>
              Need a custom size?
            </h3>

            <Link
              to="/custom-trailers"
              className="shop-size__custom-link"
            >
              START YOUR CUSTOM BUILD →
            </Link>

          </article>

        </div>

      </div>
    </section>
  );
};

export default ShopBySize;