
import { Link } from "react-router-dom";
import "./Blog.css";
import CTA from "../Home/CTA";

const articles = [
  {
    category: "FOOD TRAILERS",
    title: "What to Consider When Starting a Food Trailer Business",
    excerpt:
      "From choosing the right trailer size to thinking about your workflow, there are several things to consider before getting started.",
    image: "/images/food-trailer.jpg",
  },
  {
    category: "TRAILER BUYING",
    title: "How to Choose the Right Trailer for Your Business",
    excerpt:
      "The right trailer depends on your menu, equipment, workspace, storage needs, and the way you plan to operate.",
    image: "/images/trailer-sale.jpg",
  },
  {
    category: "CUSTOM BUILDS",
    title: "When Does a Custom Trailer Make Sense?",
    excerpt:
      "A custom build can be useful when an existing trailer doesn't provide the layout or functionality your business requires.",
    image: "/images/custom-build.jpg",
  },
  {
    category: "TRAILER RENTALS",
    title: "Why Rent a Food Trailer?",
    excerpt:
      "Renting can give businesses a flexible way to explore mobile operations, events, and short-term opportunities.",
    image: "/images/rental-food.jpg",
  },
  {
    category: "BUSINESS TIPS",
    title: "Planning Your Mobile Business Workflow",
    excerpt:
      "A thoughtful trailer layout can help create a more practical workflow for preparation, service, storage, and cleanup.",
    image: "/images/all-purpose.jpg",
  },
  {
    category: "SPECIALTY TRAILERS",
    title: "Beyond Food: Specialty Trailer Ideas",
    excerpt:
      "Trailers can support many different types of mobile businesses, from retail concepts to service-based operations.",
    image: "/images/specialty-trailer.jpg",
  },
];

function Blog() {
  return (
    <div className="blog-page">

    

      {/* ================= HERO ================= */}

      <section className="blog-hero">

        <div className="blog-hero-overlay"></div>

        <div className="blog-hero-content">

          <span className="blog-eyebrow">
            CALVIN'S TOOLS JOURNAL
          </span>

          <h1>
            Ideas, Tips &
            <br />
            Trailer Insights
          </h1>

          <p>
            Helpful information for businesses exploring food
            trailers, specialty trailers, rentals, purchases,
            and custom builds.
          </p>

        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="blog-intro section-padding">

        <div className="blog-intro-inner">

          <div className="blog-intro-heading">

            <span className="section-eyebrow">
              FROM THE JOURNAL
            </span>

            <h2>
              Useful Information
              <br />
              for Your Next Step
            </h2>

          </div>

          <div className="blog-intro-text">

            <p>
              Choosing a trailer is an important decision for any
              mobile business. There are many factors to consider,
              from size and layout to equipment and intended use.
            </p>

            <p>
              Browse our articles for ideas and practical
              information as you plan your rental, purchase,
              or custom trailer.
            </p>

          </div>

        </div>

      </section>


      {/* ================= FEATURED ARTICLE ================= */}

      <section className="blog-featured section-padding">

        <div className="blog-featured-card">

          <div className="blog-featured-image">

            <img
              src="/images/food-trailer.jpg"
              alt="Food trailer"
            />

          </div>

          <div className="blog-featured-content">

            <span className="article-category">
              FEATURED · FOOD TRAILERS
            </span>

            <h2>
              What to Consider Before
              <br />
              Starting a Food Trailer
            </h2>

            <p>
              Starting a mobile food business involves more than
              choosing a trailer. Think about your menu, equipment,
              workflow, storage, service area, and where you plan
              to operate.
            </p>

            <Link
              to="/blog/starting-food-trailer"
              className="article-link"
            >
              READ ARTICLE →
            </Link>

          </div>

        </div>

      </section>


      {/* ================= CATEGORIES ================= */}

      <section className="blog-categories">

        <div className="blog-categories-inner">

          <span className="section-eyebrow">
            EXPLORE TOPICS
          </span>

          <div className="blog-category-links">

            <button className="category-active">
              All
            </button>

            <button>
              Food Trailers
            </button>

            <button>
              Rentals
            </button>

            <button>
              Buying
            </button>

            <button>
              Custom Builds
            </button>

            <button>
              Business Tips
            </button>

          </div>

        </div>

      </section>


      {/* ================= ARTICLES ================= */}

      <section className="blog-articles section-padding">

        <div className="blog-section-heading">

          <span className="section-eyebrow">
            LATEST ARTICLES
          </span>

          <h2>
            From Calvin's Tools
          </h2>

        </div>

        <div className="blog-grid">

          {articles.map((article, index) => (

            <article
              className="blog-card"
              key={index}
            >

              <Link
                to={`/blog/article-${index + 1}`}
                className="blog-card-image"
              >

                <img
                  src={article.image}
                  alt={article.title}
                />

              </Link>

              <div className="blog-card-content">

                <span className="article-category">
                  {article.category}
                </span>

                <h3>
                  {article.title}
                </h3>

                <p>
                  {article.excerpt}
                </p>

                <Link
                  to={`/blog/article-${index + 1}`}
                  className="article-link"
                >
                  READ MORE →
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ================= RENT / BUY / CUSTOM ================= */}

      <section className="blog-options section-padding">

        <div className="blog-section-heading">

          <span className="section-eyebrow">
            READY TO TAKE THE NEXT STEP?
          </span>

          <h2>
            Explore Your
            <br />
            Trailer Options
          </h2>

        </div>

        <div className="blog-options-grid">

          <Link
            to="/trailer-rental"
            className="blog-option"
          >

            <span>01</span>

            <h3>
              Rent
            </h3>

            <p>
              Explore food and specialty trailers available
              for rental.
            </p>

            <strong>
              EXPLORE RENTALS →
            </strong>

          </Link>


          <Link
            to="/trailers-for-sale"
            className="blog-option"
          >

            <span>02</span>

            <h3>
              Buy
            </h3>

            <p>
              Browse ready-to-buy trailers for your business.
            </p>

            <strong>
              VIEW TRAILERS →
            </strong>

          </Link>


          <Link
            to="/custom-trailers"
            className="blog-option"
          >

            <span>03</span>

            <h3>
              Custom
            </h3>

            <p>
              Build a trailer around your specific requirements.
            </p>

            <strong>
              START A BUILD →
            </strong>

          </Link>

        </div>

      </section>


     <CTA />



    </div>
  );
}

export default Blog;