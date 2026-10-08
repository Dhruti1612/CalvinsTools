
import "./CustomRecentBuilds.css";

const CustomRecentBuilds = () => {
  const builds = [
    {
      image: "./Images/truck1.jpeg",
      caption: "PHOTO: real completed build #1 · caption type · size",
    },
    {
      image: "./Images/truck2.jpeg",
      caption: "PHOTO: real completed build #2 · caption type · size",
    },
    {
      image: "./Images/truck3.jpeg",
      caption: "PHOTO: real completed build #3 · caption type · size",
    },
    {
      image: "./Images/truck5.jpg",
      caption: "PHOTO: real completed build #4 · caption type · size",
    },
  ];

  return (
    <section className="custom-recent-builds">

      <div className="custom-recent-builds__container">

        {/* =================================
            TOP AREA
        ================================= */}

        <div className="custom-recent-builds__top">

          {/* LEFT */}

          <div className="custom-recent-builds__heading-area">

            <div className="custom-recent-builds__label">
              <span>05</span>
              <i></i>
              <strong>RECENT CUSTOM BUILDS</strong>
            </div>

            <h2 className="custom-recent-builds__title">
              Built for real
              <br />
              <em>businesses.</em>
            </h2>

          </div>


          {/* RIGHT */}

          <div className="custom-recent-builds__intro">

            <p>
              A few recent Custom Trailers and the businesses they were
              built for.
            </p>

            

          </div>

        </div>


        {/* =================================
            GALLERY
        ================================= */}

        <div className="custom-recent-builds__grid">

          {builds.map((build, index) => (

            <article
              className="custom-recent-builds__card"
              key={index}
            >

              <div className="custom-recent-builds__image">

                {build.image ? (
                  <img
                    src={build.image}
                    alt={`Recent custom build ${index + 1}`}
                  />
                ) : (
                  <div className="custom-recent-builds__image-placeholder">
                    <span>{build.caption}</span>
                  </div>
                )}

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
};

export default CustomRecentBuilds;