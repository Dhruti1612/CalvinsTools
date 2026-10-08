import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

/* =========================================================
   MEGA MENU DATA
========================================================= */

/*
  RENTAL FILTER URLS

  category:
  ?category=food
  ?category=nail-salon
  ?category=retail
  ?category=event

  type:
  ?type=latin
  ?type=bbq
  ?type=coffee
  ?type=ice-cream
  ?type=all-purpose

  size:
  ?size=10
  ?size=12
  ?size=14
  ?size=16
  ?size=18
  ?size=20

  Multiple filters can be combined:
  /trailer-rental?category=food&size=14
  /trailer-rental?category=food&type=latin
*/

const RENTAL = "/trailer-rental";

/*
  SALE FILTER URLS

  The sale section already uses this same pattern.
*/

const SALE = "/trailers-for-sale";

const menus = {
  /* =========================================================
     RENT
  ========================================================= */

  rent: {
    label: "Trailers for Rent",

    columns: [
      {
        heading: "Rental Trailers",

        items: [
          [
            "Food & Concession Trailer Rental",
            `${RENTAL}?category=food`,
          ],

          [
            "Nail Salon Trailer Rental",
            `${RENTAL}?category=nail-salon`,
          ],

          [
            "Retail & Boutique Trailer Rental",
            `${RENTAL}?category=retail`,
          ],

          [
            "Event & Pop-Up Trailers",
            `${RENTAL}?category=event`,
          ],
        ],
      },

      {
        heading: "Rental Trailers by Size",

        items: [
          ["10 ft Rental Trailers", `${RENTAL}?size=10`],

          ["12 ft Rental Trailers", `${RENTAL}?size=12`],

          ["14 ft Rental Trailers", `${RENTAL}?size=14`],

          ["16 ft Rental Trailers", `${RENTAL}?size=16`],

          ["18 ft Rental Trailers", `${RENTAL}?size=18`],

          ["20 ft Rental Trailers", `${RENTAL}?size=20`],
        ],
      },

      {
        heading: "Rental Trailers by Type",

        items: [
          [
            "Taco & Latin Street Trailer",
            `${RENTAL}?type=latin`,
          ],

          [
            "BBQ Smokehouse Trailer",
            `${RENTAL}?type=bbq`,
          ],

          [
            "Coffee & Drinks Trailer",
            `${RENTAL}?type=coffee`,
          ],

          [
            "Ice Cream & Sweets Trailer",
            `${RENTAL}?type=ice-cream`,
          ],

          [
            "All-Purpose Food Trailer",
            `${RENTAL}?type=all-purpose`,
          ],

          [
            "View all rental trailers →",
            RENTAL,
          ],
        ],
      },
    ],

    bottomTitle: "Not sure which trailer you need?",

    bottomText:
      "Tell us your menu — we'll match you to the right rental trailer. · Rent-to-Own program →",

    secondaryButton: "How It Works",

    secondaryLink: "/how-it-works",

    primaryButton: "RENT YOUR TRAILER NOW →",

    primaryLink: RENTAL,
  },

  /* =========================================================
     SALE
  ========================================================= */

  sale: {
    label: "Trailers for Sale",

    columns: [
      {
        heading: "Trailers for Sale",

        items: [
          [
            "Food & Concession Trailers for Sale",
            `${SALE}?category=food`,
          ],

          [
            "Specialty Trailers for Sale",
            `${SALE}?category=specialty`,
          ],

          [
            "Nail Salon Trailers for Sale",
            `${SALE}?type=nail-salon`,
          ],

          [
            "Retail & Boutique Trailers for Sale",
            `${SALE}?type=retail`,
          ],
        ],
      },

      {
        heading: "Trailers for Sale by Size",

        items: [
          ["10 ft Trailers for Sale", `${SALE}?size=10`],

          ["12 ft Trailers for Sale", `${SALE}?size=12`],

          ["14 ft Trailers for Sale", `${SALE}?size=14`],

          ["16 ft Trailers for Sale", `${SALE}?size=16`],

          ["18 ft Trailers for Sale", `${SALE}?size=18`],

          ["20 ft Trailers for Sale", `${SALE}?size=20`],

          ["22 ft Trailers for Sale", `${SALE}?size=22`],
        ],
      },

      {
        heading: "Trailers for Sale by Type",

        items: [
          [
            "Taco & Latin Street Trailer",
            `${SALE}?type=latin`,
          ],

          [
            "BBQ Smokehouse Trailer",
            `${SALE}?type=bbq`,
          ],

          [
            "Coffee & Drinks Trailer",
            `${SALE}?type=coffee`,
          ],

          [
            "Ice Cream & Sweets Trailer",
            `${SALE}?type=ice-cream`,
          ],

          [
            "All-Purpose Food Trailer",
            `${SALE}?type=all-purpose`,
          ],

          [
            "Mobile Bar Trailer",
            `${SALE}?type=bar`,
          ],

          [
            "View all trailers for sale →",
            SALE,
          ],
        ],
      },
    ],

    bottomTitle: "Not sure which trailer fits?",

    bottomText:
      "Compare sizes and layouts, or tell us your menu and we'll recommend one.",

    secondaryButton: "Compare Sizes",

    secondaryLink: "/shop-by-size",

    primaryButton: "GET YOUR TRAILER TODAY →",

    primaryLink: SALE,
  },

  /* =========================================================
     CUSTOM
  ========================================================= */

  custom: {
    label: "Custom Trailers",

    columns: [
      {
        heading: "Custom Trailers",

        items: [
          ["Custom Food Trailers", "/custom-trailers"],

          ["Custom Specialty Trailers", "/custom-trailers"],

          ["Custom Nail Salon Trailers", "/custom-trailers"],

          ["Custom Retail & Boutique Trailers", "/custom-trailers"],

          ["Custom Commercial Trailers", "/custom-trailers"],
        ],
      },

      {
        heading: "Start From a Base Model",

        items: [
          [
            "All-Purpose Food Trailer · 16 ft",
            "/custom-trailers",
          ],

          [
            "Latin Street Trailer · 14 ft",
            "/custom-trailers",
          ],

          [
            "BBQ Smokehouse Trailer · 18–20 ft",
            "/custom-trailers",
          ],

          [
            "Coffee & Drinks Trailer · 12 ft",
            "/custom-trailers",
          ],

          [
            "Ice Cream & Sweets Trailer · 14 ft",
            "/custom-trailers",
          ],

          [
            "Nail Studio Trailer · 16 ft",
            "/custom-trailers",
          ],

          [
            "Mobile Retail Trailer · 14 ft",
            "/custom-trailers",
          ],
        ],
      },

      {
        heading: "How We Build",

        items: [
          [
            "Floor Plans & Layouts",
            "/custom-trailers",
          ],

          [
            "Equipment Packages",
            "/custom-trailers",
          ],

          [
            "Branding & Wraps",
            "/custom-trailers",
          ],

          [
            "Certification & Photo Inspection Report",
            "/custom-trailers",
          ],

          [
            "Build Timeline (about 6 months)",
            "/custom-trailers",
          ],
        ],
      },
    ],

    bottomTitle: "Not sure what to build yet?",

    bottomText:
      "Start from one of our base models — we adapt it to your menu, equipment and brand.",

    secondaryButton: "See Floor Plans",

    secondaryLink: "/custom-trailers",

    primaryButton: "START YOUR CUSTOM BUILD →",

    primaryLink: "/custom-trailers",
  },
};


/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  const [mobileOpen, setMobileOpen] = useState(false);

  const [mobileSubmenu, setMobileSubmenu] = useState(null);


  /* =========================================================
     CLOSE EVERYTHING
  ========================================================= */

  const closeMenu = () => {
    setActiveMenu(null);
    setMobileOpen(false);
    setMobileSubmenu(null);
  };


  /* =========================================================
     TOGGLE DESKTOP MENU
  ========================================================= */

  const toggleMenu = (key) => {
    setActiveMenu((current) =>
      current === key ? null : key
    );
  };


  /* =========================================================
     NAV DROPDOWNS
  ========================================================= */

  const menuButtons = [
    {
      label: "Trailers for Rent",
      key: "rent",
    },

    {
      label: "Trailers for Sale",
      key: "sale",
    },

    {
      label: "Custom Trailers",
      key: "custom",
    },
  ];


  return (
    <header
      className="calvin-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeMenu();
        }
      }}
    >

      {/* ===================================================
          TOP BAR
      =================================================== */}

      <div className="calvin-topbar">

        <div className="calvin-topbar-inner">

          <Link
            to="/reviews"
            className="calvin-rating"
          >
            <span
              className="calvin-stars"
              aria-label="Customer reviews"
            >
              ★★★★★
            </span>

            <span>
              5.0 · 120+ GOOGLE REVIEWS
            </span>
          </Link>


          <div className="calvin-trust">
            BUILT TO U.S. STANDARDS · DOCUMENTED FOR INSPECTION
          </div>


          <div className="calvin-top-contact">

            <a href="tel:+17707464733">
              +1 770-746-4733
            </a>

            <a
              href="https://wa.me/17707464733"
              target="_blank"
              rel="noreferrer"
            >
              WHATSAPP
            </a>

            <Link to="/contact">
              HABLAMOS ESPAÑOL
            </Link>

          </div>

        </div>

      </div>


      {/* ===================================================
          MAIN NAVIGATION
      =================================================== */}

      <div className="calvin-nav-wrap">

        <div className="calvin-nav-inner">

          {/* LOGO */}

          <Link
            to="/"
            className="calvin-logo"
            aria-label="Calvin's Tools home"
            onClick={closeMenu}
          >

            <img
              src="/Images/logo.png"
              alt="Calvin's Tools"
              className="calvin-logo-image"
            />

            <span className="calvin-logo-text">

              <strong>
                CALVIN'S
              </strong>

              <small>
                TOOLS
              </small>

            </span>

          </Link>


          {/* MOBILE TOGGLE */}

          <button
            className={`calvin-mobile-toggle ${
              mobileOpen ? "is-open" : ""
            }`}
            aria-label={
              mobileOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={mobileOpen}
            onClick={() =>
              setMobileOpen((open) => !open)
            }
          >

            <span />
            <span />
            <span />

          </button>


          {/* NAVIGATION */}

          <nav
            className={`calvin-navigation ${
              mobileOpen ? "mobile-visible" : ""
            }`}
            aria-label="Main navigation"
          >

            <div className="calvin-nav-links">

              {/* DROPDOWN LINKS */}

              {menuButtons.map((item) => (

                <div
                  className={`calvin-nav-item ${
                    activeMenu === item.key
                      ? "menu-active"
                      : ""
                  }`}
                  key={item.key}

                  onMouseEnter={() => {
                    if (window.innerWidth > 900) {
                      setActiveMenu(item.key);
                    }
                  }}

                  onMouseLeave={() => {
                    if (window.innerWidth > 900) {
                      setActiveMenu(null);
                    }
                  }}
                >

                  <button
                    className="calvin-nav-trigger"

                    aria-expanded={
                      window.innerWidth > 900
                        ? activeMenu === item.key
                        : mobileSubmenu === item.key
                    }

                    onClick={() => {

                      if (window.innerWidth <= 900) {

                        setMobileSubmenu((current) =>
                          current === item.key
                            ? null
                            : item.key
                        );

                      } else {

                        toggleMenu(item.key);

                      }

                    }}
                  >

                    {item.label}

                    <span className="calvin-chevron">
                      ▾
                    </span>

                  </button>


                  {/* DESKTOP MEGA MENU */}

                  {activeMenu === item.key && (

                    <div className="calvin-mega-menu">

                      <div className="calvin-mega-inner">

                        {/* THREE COLUMNS */}

                        <div className="calvin-mega-columns">

                          {menus[item.key].columns.map(
                            (column, index) => (

                              <div
                                className="calvin-mega-column"
                                key={column.heading}
                              >

                                <h3>
                                  {column.heading}
                                </h3>


                                <div className="calvin-mega-items">

                                  {column.items.map(
                                    ([label, to]) => (

                                      <Link
                                        key={label}
                                        to={to}
                                        className="calvin-mega-link"
                                        onClick={closeMenu}
                                      >

                                        <span className="calvin-mega-icon">

                                          {index === 0
                                            ? "▱"
                                            : index === 1
                                            ? "▤"
                                            : "▱"}

                                        </span>

                                        <span>
                                          {label}
                                        </span>

                                      </Link>

                                    )
                                  )}

                                </div>

                              </div>

                            )
                          )}

                        </div>


                        {/* BOTTOM CTA */}

                        <div className="calvin-mega-bottom">

                          <div className="calvin-mega-bottom-copy">

                            <strong>
                              {menus[item.key].bottomTitle}
                            </strong>

                            <span>
                              {menus[item.key].bottomText}
                            </span>

                          </div>


                          <div className="calvin-mega-bottom-actions">

                            <Link
                              to={
                                menus[item.key].secondaryLink
                              }
                              className="calvin-mega-secondary"
                              onClick={closeMenu}
                            >
                              {
                                menus[item.key]
                                  .secondaryButton
                              }
                            </Link>


                            <Link
                              to={
                                menus[item.key].primaryLink
                              }
                              className="calvin-mega-primary"
                              onClick={closeMenu}
                            >
                              {
                                menus[item.key]
                                  .primaryButton
                              }
                            </Link>

                          </div>

                        </div>

                      </div>

                    </div>

                  )}


                  {/* MOBILE SUBMENU */}

                  {mobileSubmenu === item.key && (

                    <div className="calvin-mobile-submenu">

                      {menus[item.key].columns.map(
                        (column) => (

                          <div
                            key={column.heading}
                            className="calvin-mobile-submenu-group"
                          >

                            <p>
                              {column.heading}
                            </p>


                            {column.items.map(
                              ([label, to]) => (

                                <Link
                                  key={label}
                                  to={to}
                                  onClick={closeMenu}
                                >
                                  {label}
                                </Link>

                              )
                            )}

                          </div>

                        )
                      )}

                    </div>

                  )}

                </div>

              ))}


              {/* NORMAL LINKS */}

              <NavLink
                to="/how-it-works"
                className="calvin-plain-link"
                onClick={closeMenu}
              >
                How It Works
              </NavLink>


              <NavLink
                to="/blog"
                className="calvin-plain-link"
                onClick={closeMenu}
              >
                Blog
              </NavLink>


              <NavLink
                to="/contact"
                className="calvin-plain-link"
                onClick={closeMenu}
              >
                Contact Us
              </NavLink>

            </div>


            {/* RENT BUTTON */}

            <Link
              to="/trailer-rental"
              className="calvin-rent-button"
              onClick={closeMenu}
            >
              RENT NOW
              <span>→</span>
            </Link>

          </nav>

        </div>

      </div>


      {/* DESKTOP SCRIM */}

      {activeMenu && (

        <button
          className="calvin-menu-scrim"
          aria-label="Close navigation dropdown"
          onClick={() => setActiveMenu(null)}
        />

      )}

    </header>
  );
}

export default Navbar;