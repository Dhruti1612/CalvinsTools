import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./TrailersForSale.css";

// NOTE: items 4–8 are sample entries so every header filter shows something.
// Replace them with your real inventory.

const stockTrailers = [
  {
    id: "stock-1",
    slug: "all-purpose-food-trailer",
    name: "All-Purpose Food Trailer",
    category: "food",
    type: "all-purpose",
    condition: "new",
    conditionLabel: "NEW",
    size: 16,
    tags: ["Griddle", "Fryers", "Hood & suppression"],
    image: "/Images/truck3.jpeg",
  },
  {
    id: "stock-2",
    slug: "bbq-smokehouse-trailer",
    name: "BBQ Smokehouse Trailer",
    category: "food",
    type: "bbq",
    condition: "new",
    conditionLabel: "NEW",
    size: 20,
    tags: ["Smoker porch", "Warming cabinet", "3-comp sink"],
    image: "/Images/bbq.jpg",
  },
  {
    id: "stock-3",
    slug: "coffee-drinks-trailer",
    name: "Coffee & Drinks Trailer",
    category: "food",
    type: "coffee",
    condition: "preowned",
    conditionLabel: "PRE-OWNED · EX-RENTAL",
    size: 12,
    tags: ["Espresso-ready", "Ice bin", "Fridge"],
    image: "/Images/coffee.jpg",
  },
  {
    id: "stock-4",
    slug: "latin-street-trailer",
    name: "Latin Street Trailer",
    category: "food",
    type: "latin",
    condition: "new",
    conditionLabel: "NEW",
    size: 14,
    tags: ["Flat-top", "Prep station", "Hood & suppression"],
    image: "/Images/latin.jpg",
  },
  {
    id: "stock-5",
    slug: "ice-cream-and-sweets-trailer",
    name: "Ice Cream & Sweets Trailer",
    category: "food",
    type: "ice-cream",
    condition: "new",
    conditionLabel: "NEW",
    size: 14,
    tags: ["Freezer", "Serving window", "Hand sink"],
    image: "/Images/icecream.jpg",
  },
  {
    id: "stock-6",
    slug: "nail-salon-trailer",
    name: "Nail Salon Trailer",
    category: "specialty",
    type: "nail-salon",
    condition: "new",
    conditionLabel: "NEW",
    size: 16,
    tags: ["Pedicure stations", "Vented workspace", "Hand sink"],
    image: "/Images/nail.jpg",
  },
  {
    id: "stock-7",
    slug: "retail-and-boutique-trailer",
    name: "Retail & Boutique Trailer",
    category: "specialty",
    type: "retail",
    condition: "new",
    conditionLabel: "NEW",
    size: 14,
    tags: ["Display shelving", "Fitting area", "A/C"],
    image: "/Images/truck6.jpg",
  },
  {
    id: "stock-8",
    slug: "specialty-trailer",
    name: "Specialty Trailer",
    category: "specialty",
    type: "specialty",
    condition: "preowned",
    conditionLabel: "PRE-OWNED · EX-RENTAL",
    size: 18,
    tags: ["Flexible layout", "Custom-ready", "A/C"],
    image: "/Images/truck7.jpg",
  },
];

const standardTrailers = [
  {
    size: "16 ft",
    name: "All-Purpose Food Trailer",
    use: "Burgers, fried food, breakfast",
    image: "/Images/truck3.jpeg",
  },
  {
    size: "14 ft",
    name: "Latin Street Trailer",
    use: "Tacos, pupusas, arepas",
    image: "/Images/latin.jpg",
  },
  {
    size: "18–20 ft",
    name: "BBQ Smokehouse Trailer",
    use: "Smoked meats, catering",
    image: "/Images/bbq.jpg",
  },
  {
    size: "12 ft",
    name: "Coffee & Drinks Trailer",
    use: "Coffee, smoothies, drinks",
    image: "/Images/coffee.jpg",
  },
  {
    size: "14 ft",
    name: "Ice Cream & Sweets Trailer",
    use: "Ice cream, churros, desserts",
    image: "/Images/icecream.jpg",
  },
];

const includedItems = [
  {
    title: "Photo inspection report",
    text: "Welds, wiring, gas and plumbing — photographed and signed before handover.",
  },
  {
    title: "NHTSA-compliant chassis",
    text: "VIN, lights, brakes, tires & DOT labels.",
  },
  {
    title: "UL / ETL listed components",
    text: "Listed electrical components.",
  },
  {
    title: "NSF certified equipment",
    text: "Food-contact surfaces, sinks, refrigeration.",
  },
  {
    title: "Title & registration docs",
    text: "Paperwork provided with every sale.",
  },
  {
    title: "Handover walk-through",
    text: "Equipment, propane, water and power — plus support after you roll.",
  },
];

const buyingSteps = [
  {
    step: "STEP 01",
    title: "Choose & ask",
    text: "Pick a trailer in stock or a standard configuration. Send a quote request — a salesperson replies the same business day.",
  },
  {
    step: "STEP 02",
    title: "Quote & hold",
    text: "Get a written quote. A deposit reserves the trailer in your name.",
  },
  {
    step: "STEP 03",
    title: "Inspection & paperwork",
    text: "We complete the photo inspection report and prepare the title, registration and compliance documents.",
  },
  {
    step: "STEP 04",
    title: "Pickup or delivery",
    text: "Pay the balance, sign the sales agreement online, then pick up or receive your trailer with a full walk-through.",
  },
];

const sizeGuide = [
  {
    length: 10,
    crew: "1–2",
    best: "Coffee, drinks, desserts, hot dogs",
    range: "10-14",
  },
  {
    length: 12,
    crew: "2",
    best: "Coffee & drinks, ice cream, snacks",
    range: "10-14",
  },
  {
    length: 14,
    crew: "2–3",
    best: "Tacos, sweets, street food",
    range: "10-14",
  },
  {
    length: 16,
    crew: "3",
    best: "Burgers, fried food, full menus",
    range: "16-18",
  },
  {
    length: 18,
    crew: "3–4",
    best: "BBQ, catering, high volume",
    range: "16-18",
  },
  {
    length: 20,
    crew: "4",
    best: "BBQ smokehouse, events",
    range: "20-22",
  },
  {
    length: 22,
    crew: "4–5",
    best: "Full kitchen, high-volume service",
    range: "20-22",
  },
];

const faqs = [
  {
    q: "How much does a food trailer cost?",
    a: 'Price depends on size, condition and equipment. Every trailer in stock shows its price or "call for price"; send a quote request for a written price including delivery and any options.',
  },
  {
    q: "Do you sell used food trailers?",
    a: "Yes. We list pre-owned and ex-rental trailers alongside new units, each with a photo inspection report so you know exactly what you are buying.",
  },
  {
    q: "Can you deliver the trailer to my state?",
    a: "We can arrange delivery to most states. Tell us your delivery location in the quote form and we will include delivery in your written quote.",
  },
  {
    q: "What paperwork comes with the trailer?",
    a: "Every sale includes the title and registration documents, the photo inspection report, and the compliance documents your local inspector asks for.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes — you can pay in full, finance, or choose Rent-to-Own. Select your preferred option in the quote form and our team will explain the next steps.",
  },
  {
    q: "Can I change the equipment on a trailer in stock?",
    a: "Units in stock are sold as listed. If you want a different layout or equipment, that is a Custom Trailer — start your custom build and we will quote it.",
  },
];

const shieldIcon = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

// Hero background image (public/Images/truck3.jpeg -> /Images/truck3.jpeg)
const HERO_IMAGE = "/Images/truck3.jpeg";

const CATEGORY_LABELS = {
  food: "FOOD TRAILER",
  specialty: "SPECIALTY TRAILER",
};

const CATEGORY_FILTERS = [
  { key: "all", label: "All Trailers for Sale" },
  { key: "food", label: "Food Trailers" },
  { key: "specialty", label: "Specialty Trailers" },
];

// Used by header menu links: /trailers-for-sale?type=bbq, ?size=16, ?category=food
const TYPE_META = {
  "all-purpose": {
    label: "All-Purpose Food Trailer",
    category: "food",
  },
  latin: {
    label: "Taco & Latin Street Trailer",
    category: "food",
  },
  bbq: {
    label: "BBQ Smokehouse Trailer",
    category: "food",
  },
  coffee: {
    label: "Coffee & Drinks Trailer",
    category: "food",
  },
  "ice-cream": {
    label: "Ice Cream & Sweets Trailer",
    category: "food",
  },
  bar: {
    label: "Mobile Bar Trailer",
    category: "food",
  },
  "nail-salon": {
    label: "Nail Salon Trailer",
    category: "specialty",
  },
  retail: {
    label: "Retail & Boutique Trailer",
    category: "specialty",
  },
  specialty: {
    label: "Specialty Trailer",
    category: "specialty",
  },
};

const SIZE_OPTIONS = [10, 12, 14, 16, 18, 20, 22];

const CHIP_FILTERS = [
  {
    key: "new",
    label: "New",
    test: (t) => t.condition === "new",
  },
  {
    key: "preowned",
    label: "Pre-owned",
    test: (t) => t.condition === "preowned",
  },
  {
    key: "10-14",
    label: "10–14 ft",
    test: (t) => t.size >= 10 && t.size <= 14,
  },
  {
    key: "16-18",
    label: "16–18 ft",
    test: (t) => t.size >= 16 && t.size <= 18,
  },
  {
    key: "20-22",
    label: "20–22 ft",
    test: (t) => t.size >= 20 && t.size <= 22,
  },
];

/* =====================================================
   SEO (Sale hub -> /trailers-for-sale/)
===================================================== */

const SITE_URL = "https://www.calvinstools.com"; // Replace with your real domain
const PAGE_PATH = "/trailers-for-sale/";

const SEO = {
  title: "Food Trailers for Sale in Atlanta, GA | New & Pre-Owned | Calvin's Tools",
  h1: "Food Trailers for Sale. Get Your Trailer Today.",
  description:
    "Browse new and pre-owned food trailers for sale in Atlanta, GA. 10–22 ft food, concession and specialty trailers, VIN-documented with a photo inspection report. Get a quote today.",
  keywords:
    "food trailers for sale, concession trailer for sale, used food trailer for sale, food trailer for sale georgia",
};

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// Create or update a <meta>/<link> tag in <head> and return an undo function.
function upsertHeadTag(tag, matchSelector, attrs) {
  let el = document.head.querySelector(matchSelector);
  let created = false;
  const previous = {};

  if (!el) {
    el = document.createElement(tag);
    document.head.appendChild(el);
    created = true;
  } else {
    Object.keys(attrs).forEach((key) => {
      previous[key] = el.getAttribute(key);
    });
  }

  Object.entries(attrs).forEach(([key, value]) => {
    el.setAttribute(key, value);
  });

  return () => {
    if (created) {
      el.remove();
    } else {
      Object.entries(previous).forEach(([key, value]) => {
        if (value === null) {
          el.removeAttribute(key);
        } else {
          el.setAttribute(key, value);
        }
      });
    }
  };
}

function buildJsonLd(trailers, questions) {
  const pageUrl = SITE_URL + PAGE_PATH;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL + "/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Trailers for Sale",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Food Trailers for Sale",
        url: pageUrl,
        numberOfItems: trailers.length,
        itemListElement: trailers.map((t, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}${PAGE_PATH}${t.slug}/`,
          name: `${t.name} for Sale – ${t.size} ft`,
          image: SITE_URL + t.image,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: questions.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };
}

export default function TrailersForSale() {
  const [chip, setChip] = useState(null);

  // Filters come from the URL so header links can open the right list.
  const [params, setParams] = useSearchParams();

  const typeParam = params.get("type");
  const categoryParam = params.get("category");
  const sizeParam = Number(params.get("size"));

  const type = TYPE_META[typeParam] ? typeParam : null;

  const category = type
    ? TYPE_META[type].category
    : categoryParam === "food" || categoryParam === "specialty"
      ? categoryParam
      : "all";

  const sizeFilter = SIZE_OPTIONS.includes(sizeParam) ? sizeParam : null;

  const updateParams = (next) => {
    const clean = {};

    Object.entries(next).forEach(([key, value]) => {
      if (value) {
        clean[key] = String(value);
      }
    });

    setParams(clean);
  };

  const selectCategory = (key) =>
    updateParams({
      category: key === "all" ? null : key,
      size: sizeFilter,
    });

  const clearFilters = () => {
    setChip(null);
    updateParams({});
  };

  const [openFaq, setOpenFaq] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [sent, setSent] = useState(false);

  // Read the selected trailer from the detail page's quote URL.
  const [form, setForm] = useState(() => {
    const requestedTrailer = new URLSearchParams(
      window.location.search
    ).get("trailer");

    const validTrailer = stockTrailers.some(
      (trailer) => trailer.id === requestedTrailer
    );

    return {
      name: "",
      phone: "",
      email: "",
      trailer: validTrailer ? requestedTrailer : stockTrailers[0].id,
      when: "30",
      pay: "full",
      lang: "both",
      budget: "",
      notes: "",
    };
  });

  const setField = (key) => (event) => {
    setForm({
      ...form,
      [key]: event.target.value,
    });
  };

  const showSizes = (length) => {
    setChip(null);
    updateParams({ size: length });

    document.getElementById("stock")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Connect your backend / WhatsApp / email logic here.
    console.log("Trailer quote lead:", form);
    setSent(true);
  };

  const visible = useMemo(() => {
    const chipFilter = CHIP_FILTERS.find((item) => item.key === chip);

    return stockTrailers.filter(
      (trailer) =>
        (category === "all" || trailer.category === category) &&
        (!type || trailer.type === type) &&
        (!sizeFilter || trailer.size === sizeFilter) &&
        (!chipFilter || chipFilter.test(trailer))
    );
  }, [category, type, sizeFilter, chip]);

  // Labels for the "Showing..." bar.
  const chipLabel = CHIP_FILTERS.find((item) => item.key === chip)?.label;

  const activeLabels = [
    type
      ? TYPE_META[type].label
      : category !== "all"
        ? CATEGORY_FILTERS.find((item) => item.key === category)?.label
        : null,
    sizeFilter ? `${sizeFilter} ft` : null,
    chipLabel || null,
  ].filter(Boolean);

  // SEO: title, meta tags, canonical, Open Graph, JSON-LD.
  useEffect(() => {
    const pageUrl = SITE_URL + PAGE_PATH;
    const previousTitle = document.title;

    document.title = SEO.title;

    const undo = [
      upsertHeadTag("meta", 'meta[name="description"]', {
        name: "description",
        content: SEO.description,
      }),
      upsertHeadTag("meta", 'meta[name="keywords"]', {
        name: "keywords",
        content: SEO.keywords,
      }),
      upsertHeadTag("link", 'link[rel="canonical"]', {
        rel: "canonical",
        href: pageUrl,
      }),
      upsertHeadTag("meta", 'meta[property="og:type"]', {
        property: "og:type",
        content: "website",
      }),
      upsertHeadTag("meta", 'meta[property="og:title"]', {
        property: "og:title",
        content: SEO.title,
      }),
      upsertHeadTag("meta", 'meta[property="og:description"]', {
        property: "og:description",
        content: SEO.description,
      }),
      upsertHeadTag("meta", 'meta[property="og:url"]', {
        property: "og:url",
        content: pageUrl,
      }),
      upsertHeadTag("meta", 'meta[property="og:image"]', {
        property: "og:image",
        content: SITE_URL + HERO_IMAGE,
      }),
      upsertHeadTag("meta", 'meta[name="twitter:card"]', {
        name: "twitter:card",
        content: "summary_large_image",
      }),
    ];

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "tfs-jsonld";
    script.text = JSON.stringify(buildJsonLd(stockTrailers, faqs));
    document.head.appendChild(script);

    return () => {
      document.title = previousTitle;
      undo.forEach((undoTag) => undoTag());
      script.remove();
    };
  }, []);

  // Filtered lists are noindex; canonical always points to the hub.
  const isFiltered =
    category !== "all" || Boolean(type) || Boolean(sizeFilter) || chip !== null;

  useEffect(() => {
    return upsertHeadTag("meta", 'meta[name="robots"]', {
      name: "robots",
      content: isFiltered ? "noindex, follow" : "index, follow",
    });
  }, [isFiltered]);

  return (
    <div className="tfs">
      {/* HERO */}
      <section
        className="tfs-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(20, 18, 16, 0.9) 0%, rgba(20, 18, 16, 0.72) 50%, rgba(20, 18, 16, 0.4) 100%), url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="tfs-container tfs-hero-inner">
          <div className="tfs-hero-copy">
            <div className="tfs-breadcrumb">
              <a href="/">Home</a> / <strong>Trailers for Sale</strong>
            </div>

            <p className="tfs-eyebrow">
              FOOD TRAILERS &amp; SPECIALTY TRAILERS FOR SALE
            </p>

            <h1>
              Food Trailers for Sale.
              <br />
              Get Your Trailer Today.
            </h1>

            <p className="tfs-hero-text">
              Ready-to-buy Food Trailers and Specialty Trailers from 10 to 22
              ft — new and pre-owned, documented for inspection, with a photo
              inspection report on every trailer.
            </p>

            <div className="tfs-hero-actions">
              <a
                href="#stock"
                className="tfs-btn tfs-btn-primary tfs-btn-lg"
              >
                GET YOUR TRAILER TODAY →
              </a>

              <a
                href="#quote"
                className="tfs-btn tfs-btn-outline tfs-btn-lg"
              >
                Get a Quote
              </a>
            </div>

            <ul className="tfs-hero-bullets">
              <li>In stock &amp; ready to roll</li>
              <li>New and pre-owned</li>
              <li>Documented for inspection</li>
            </ul>
          </div>
        </div>
      </section>

      {/* LISTING */}
      <section className="tfs-listing tfs-section" id="stock">
        <div className="tfs-container">
          <div className="tfs-listing-head">
            <div className="tfs-listing-title">
              <div className="tfs-section-label">
                <span className="tfs-section-num">01</span>
                <span className="tfs-section-line" />
                <span className="tfs-section-text">IN STOCK NOW</span>
              </div>

              <h2>
                Trailers for sale,
                <br />
                <em>ready when you are.</em>
              </h2>
            </div>

            <div className="tfs-listing-side">
              <p>
                Every trailer listed here is on our lot and ready to buy.
                Reserved trailers stay listed until sold — join the waitlist to
                hear about similar units.
              </p>
            </div>
          </div>

          {/* FILTER BAR */}
          <div className="tfs-filters">
            <div className="tfs-filter-group">
              {CATEGORY_FILTERS.map((filter) => (
                <button
                  key={filter.key}
                  type="button"
                  className={`tfs-pill tfs-pill-lg ${
                    category === filter.key ? "is-active" : ""
                  }`}
                  onClick={() => selectCategory(filter.key)}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="tfs-filter-group">
              {CHIP_FILTERS.map((filter) => (
                <button
                  key={filter.key}
                  type="button"
                  className={`tfs-pill tfs-pill-sm ${
                    chip === filter.key ? "is-active" : ""
                  }`}
                  onClick={() =>
                    setChip(chip === filter.key ? null : filter.key)
                  }
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* RESULTS BAR */}
          <div className="tfs-results">
            <p>
              Showing <strong>{visible.length}</strong>{" "}
              {visible.length === 1 ? "trailer" : "trailers"}

              {activeLabels.map((label) => (
                <span className="tfs-result-chip" key={label}>
                  {label}
                </span>
              ))}
            </p>

            {activeLabels.length > 0 && (
              <button
                type="button"
                className="tfs-clear"
                onClick={clearFilters}
              >
                Clear filters ×
              </button>
            )}
          </div>

          {/* GRID */}
          <div className="tfs-grid">
            {visible.map((trailer) => (
              <article className="tfs-card" key={trailer.id}>
                <div className="tfs-card-photo">
                  <img
                    src={trailer.image}
                    alt={trailer.name}
                    loading="lazy"
                  />
                  <span className="tfs-card-tag">
                    {CATEGORY_LABELS[trailer.category]}
                  </span>
                </div>

                <div className="tfs-card-body">
                  <div className="tfs-card-meta">
                    <div className="tfs-badges">
                      <span
                        className={`tfs-badge ${
                          trailer.condition === "new"
                            ? "tfs-badge-new"
                            : "tfs-badge-used"
                        }`}
                      >
                        {trailer.conditionLabel}
                      </span>

                      <span className="tfs-badge tfs-badge-stock">
                        <i className="tfs-dot" /> IN STOCK
                      </span>
                    </div>

                    <span className="tfs-card-length">
                      {trailer.size} FT
                    </span>
                  </div>

                  <h3>{trailer.name}</h3>

                  <ul className="tfs-features">
                    {trailer.tags.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <div className="tfs-card-price">
                    <span className="tfs-price">$—</span>
                    <span className="tfs-price-note">
                      VIN-documented · inspection report
                    </span>
                  </div>

                  <div className="tfs-card-actions">
                    <Link
                      to={`/trailers-for-sale/${trailer.slug}`}
                      className="tfs-btn tfs-btn-primary"
                    >
                      GET YOUR TRAILER TODAY →
                    </Link>

                    <Link
                      to={`/trailers-for-sale/${trailer.slug}`}
                      className="tfs-btn tfs-btn-outline-dark"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </article>
            ))}

            {visible.length === 0 && (
              <div className="tfs-empty">
                <p>No trailers match these filters right now.</p>

                <div className="tfs-empty-actions">
                  <button
                    type="button"
                    className="tfs-btn tfs-btn-primary"
                    onClick={clearFilters}
                  >
                    SHOW ALL TRAILERS
                  </button>

                  <a
                    href="#quote"
                    className="tfs-btn tfs-btn-outline-dark"
                  >
                    Ask about this trailer →
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 02 STANDARD CONFIGURATIONS */}
      <section className="tfs-section tfs-bg-soft">
        <div className="tfs-container">
          <div className="tfs-head">
            <div>
              <div className="tfs-section-label">
                <span className="tfs-section-num">02</span>
                <span className="tfs-section-line" />
                <span className="tfs-section-text">
                  STANDARD CONFIGURATIONS
                </span>
              </div>

              <h2>
                Proven layouts.
                <br />
                <em>Ordered as standard.</em>
              </h2>
            </div>

            <div className="tfs-head-side">
              <p>
                Don't see it in stock? Order one of our standard Food Trailers
                — a fixed, proven layout with a set equipment list. Want to
                change the layout or equipment? That's a Custom Trailer.
              </p>

              <a href="#" className="tfs-text-link">
                Start your custom build →
              </a>
            </div>
          </div>

          <div className="tfs-std-grid">
            {standardTrailers.map((trailer) => (
              <article className="tfs-std-card" key={trailer.name}>
                <div className="tfs-std-photo">
                  <img
                    src={trailer.image}
                    alt={trailer.name}
                    loading="lazy"
                  />
                </div>

                <div className="tfs-std-body">
                  <span className="tfs-std-size">{trailer.size}</span>
                  <h3>{trailer.name}</h3>
                  <p>{trailer.use}</p>
                  <a
                    href="#quote"
                    className="tfs-text-link tfs-text-link-sm"
                  >
                    GET A QUOTE →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 03 WHAT COMES WITH EVERY TRAILER */}
      <section className="tfs-section tfs-bg-dark">
        <div className="tfs-container">
          <div className="tfs-head tfs-head-center">
            <div>
              <div className="tfs-section-label">
                <span className="tfs-section-num">03</span>
                <span className="tfs-section-line" />
                <span className="tfs-section-text">
                  WHAT COMES WITH EVERY TRAILER
                </span>
              </div>

              <h2>
                Built to U.S. standards.{" "}
                <em>Documented for inspection.</em>
              </h2>
            </div>

            <div className="tfs-head-side tfs-head-side-btn">
              <a href="#" className="tfs-btn tfs-btn-white">
                SEE DOCUMENTS →
              </a>
            </div>
          </div>

          <div className="tfs-included">
            {includedItems.map((item) => (
              <div className="tfs-included-item" key={item.title}>
                <span className="tfs-included-icon">{shieldIcon}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <p className="tfs-ahj-note">
            Final health and fire approval is made by your local authority
            having jurisdiction (AHJ); requirements vary by county. We provide
            the documentation your inspector asks for.
          </p>
        </div>
      </section>

      {/* 04 HOW BUYING WORKS */}
      <section className="tfs-section tfs-bg-soft">
        <div className="tfs-container">
          <div className="tfs-head">
            <div>
              <div className="tfs-section-label">
                <span className="tfs-section-num">04</span>
                <span className="tfs-section-line" />
                <span className="tfs-section-text">HOW BUYING WORKS</span>
              </div>

              <h2>
                From "that one"
                <br />
                <em>to the open road.</em>
              </h2>
            </div>

            <div className="tfs-head-side">
              <p>
                A clear four-step process with documents at every step — no
                guesswork on paperwork or pickup.
              </p>
            </div>
          </div>

          <div className="tfs-steps">
            {buyingSteps.map((step, index) => {
              const state =
                index === activeStep
                  ? "is-active"
                  : index < activeStep
                    ? "is-done"
                    : "";

              return (
                <div
                  className={`tfs-step ${state} ${
                    index <= activeStep ? "is-reached" : ""
                  }`}
                  key={step.step}
                  role="button"
                  tabIndex={0}
                  aria-pressed={index === activeStep}
                  onClick={() => setActiveStep(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveStep(index);
                    }
                  }}
                >
                  <span className="tfs-step-chip">{step.step}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>

                  {index === activeStep &&
                    (index < buyingSteps.length - 1 ? (
                      <button
                        type="button"
                        className="tfs-step-next"
                        onClick={(event) => {
                          event.stopPropagation();
                          setActiveStep(index + 1);
                        }}
                      >
                        Next step →
                      </button>
                    ) : (
                      <a
                        href="#quote"
                        className="tfs-step-next"
                        onClick={(event) => event.stopPropagation()}
                      >
                        Get your trailer →
                      </a>
                    ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05 COMPARE SIZES */}
      <section className="tfs-section">
        <div className="tfs-container">
          <div className="tfs-head">
            <div>
              <div className="tfs-section-label">
                <span className="tfs-section-num">05</span>
                <span className="tfs-section-line" />
                <span className="tfs-section-text">COMPARE SIZES</span>
              </div>

              <h2>
                Which size
                <br />
                <em>fits your menu?</em>
              </h2>
            </div>

            <div className="tfs-head-side">
              <p>
                A quick guide to crew size and menu by trailer length. For
                layouts and floor plans, read the full size guide.
              </p>

              <a href="#" className="tfs-text-link">
                Read the food trailer size guide →
              </a>
            </div>
          </div>

          <div className="tfs-table-wrap">
            <table className="tfs-table">
              <thead>
                <tr>
                  <th>LENGTH</th>
                  <th>CREW</th>
                  <th>BEST FOR</th>
                  <th />
                </tr>
              </thead>

              <tbody>
                {sizeGuide.map((row) => (
                  <tr key={row.length}>
                    <td className="tfs-td-strong">{row.length} ft</td>
                    <td>{row.crew}</td>
                    <td>{row.best}</td>
                    <td className="tfs-td-link">
                      <button
                        type="button"
                        onClick={() => showSizes(row.length)}
                      >
                        SEE {row.length} FT TRAILERS →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 06 TALK TO SALES */}
      <section className="tfs-section tfs-contact" id="quote">
        <div className="tfs-container tfs-contact-grid">
          <div className="tfs-contact-copy">
            <div className="tfs-section-label">
              <span className="tfs-section-num">06</span>
              <span className="tfs-section-line" />
              <span className="tfs-section-text">TALK TO SALES</span>
            </div>

            <h2>
              Get your trailer
              <br />
              <em>today.</em>
            </h2>

            <p>
              Tell us which trailer you're looking at and when you need it. A
              salesperson replies the same business day with price,
              availability and next steps.
            </p>

            <ul className="tfs-contact-list">
              <li>WhatsApp · English / Español</li>
              <li>+1 770-746-4733</li>
            </ul>
          </div>

          <form className="tfs-form" onSubmit={handleSubmit}>
            {sent ? (
              <div className="tfs-form-sent">
                <h3>Thank you!</h3>
                <p>
                  We have received your request. Our sales team will reply the
                  same business day.
                </p>
              </div>
            ) : (
              <>
                <div className="tfs-form-grid">
                  <label className="tfs-field">
                    <span>
                      Name <b>*</b>
                    </span>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={setField("name")}
                    />
                  </label>

                  <label className="tfs-field">
                    <span>
                      Phone / WhatsApp <b>*</b>
                    </span>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={setField("phone")}
                    />
                  </label>

                  <label className="tfs-field">
                    <span>
                      Email <b>*</b>
                    </span>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={setField("email")}
                    />
                  </label>

                  <label className="tfs-field">
                    <span>
                      Trailer of interest <b>*</b>
                    </span>
                    <select
                      required
                      value={form.trailer}
                      onChange={setField("trailer")}
                    >
                      {stockTrailers.map((trailer, index) => (
                        <option key={trailer.id} value={trailer.id}>
                          {trailer.name} · {trailer.size} ft
                          {index === 0 ? " (pre-filled)" : ""}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="tfs-field">
                    <span>
                      When do you need it? <b>*</b>
                    </span>
                    <select
                      required
                      value={form.when}
                      onChange={setField("when")}
                    >
                      <option value="30">Within 30 days</option>
                      <option value="90">1–3 months</option>
                      <option value="180">3–6 months</option>
                      <option value="research">Just researching</option>
                    </select>
                  </label>

                  <label className="tfs-field">
                    <span>
                      How will you pay? <b>*</b>
                    </span>
                    <select
                      required
                      value={form.pay}
                      onChange={setField("pay")}
                    >
                      <option value="full">
                        Pay in full / Financing / Rent-to-Own
                      </option>
                      <option value="pay-full">Pay in full</option>
                      <option value="financing">Financing</option>
                      <option value="rto">Rent-to-Own</option>
                    </select>
                  </label>

                  <label className="tfs-field">
                    <span>
                      Preferred language <b>*</b>
                    </span>
                    <select
                      required
                      value={form.lang}
                      onChange={setField("lang")}
                    >
                      <option value="both">English / Español</option>
                      <option value="en">English</option>
                      <option value="es">Español</option>
                    </select>
                  </label>

                  <label className="tfs-field">
                    <span>
                      Budget range <em>(optional)</em>
                    </span>
                    <select
                      value={form.budget}
                      onChange={setField("budget")}
                    >
                      <option value="">Select a range</option>
                      <option value="u10">Under $10k</option>
                      <option value="10-20">$10k – $20k</option>
                      <option value="20-35">$20k – $35k</option>
                      <option value="35p">$35k+</option>
                    </select>
                  </label>
                </div>

                <label className="tfs-field tfs-field-full">
                  <span>
                    Anything we should know? <em>(optional)</em>
                  </span>
                  <textarea
                    rows={3}
                    placeholder="Your menu, equipment needs, delivery location..."
                    value={form.notes}
                    onChange={setField("notes")}
                  />
                </label>

                <button
                  type="submit"
                  className="tfs-btn tfs-btn-primary tfs-submit"
                >
                  GET YOUR TRAILER TODAY →
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* 07 BUYING FAQ */}
      <section className="tfs-section tfs-bg-soft">
        <div className="tfs-container">
          <div className="tfs-head">
            <div>
              <div className="tfs-section-label">
                <span className="tfs-section-num">07</span>
                <span className="tfs-section-line" />
                <span className="tfs-section-text">BUYING FAQ</span>
              </div>

              <h2>
                Questions before
                <br />
                <em>you buy.</em>
              </h2>
            </div>

            <div className="tfs-head-side">
              <p>
                What buyers ask most. Still unsure? Talk to our sales team.
              </p>
            </div>
          </div>

          <div className="tfs-faq">
            {faqs.map((faq, index) => (
              <div
                className={`tfs-faq-item ${
                  openFaq === index ? "is-open" : ""
                }`}
                key={faq.q}
              >
                <button
                  type="button"
                  className="tfs-faq-q"
                  aria-expanded={openFaq === index}
                  onClick={() =>
                    setOpenFaq(openFaq === index ? -1 : index)
                  }
                >
                  <span>{faq.q}</span>
                  <span className="tfs-faq-icon">
                    {openFaq === index ? "–" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <p className="tfs-faq-a">{faq.a}</p>
                )}
              </div>
            ))}
          </div>

          {/* RENT-TO-OWN BOX */}
          <div className="tfs-rto">
            <div className="tfs-rto-copy">
              <span className="tfs-rto-eyebrow">RENT-TO-OWN PROGRAM</span>
              <h3>Want to own your trailer over time?</h3>
              <p>
                Not ready to pay in full? Qualified customers can make monthly
                payments toward owning a trailer through our Rent-to-Own
                program. Apply online in about two minutes — our team reviews
                every application and replies with options. Subject to
                approval.
              </p>
            </div>

            <a href="/rent-to-own" className="tfs-rto-btn">
              See Rent-to-Own Options →
            </a>
          </div>
        </div>
      </section>

      {/* FOUND THE ONE CTA */}
      <section className="tfs-cta">
        <div className="tfs-container tfs-cta-inner">
          <div className="tfs-cta-copy">
            <h2>
              Found the one?
              <br />
              Get your trailer today.
            </h2>
            <p>
              Trailers in stock can be ready for pickup or delivery soon after
              paperwork.
            </p>
          </div>

          <div className="tfs-cta-actions">
            <a
              href="#quote"
              className="tfs-btn tfs-btn-white tfs-cta-btn"
            >
              GET YOUR TRAILER TODAY →
            </a>
            <a
              href="#stock"
              className="tfs-btn tfs-btn-black tfs-cta-btn"
            >
              VIEW TRAILERS →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}