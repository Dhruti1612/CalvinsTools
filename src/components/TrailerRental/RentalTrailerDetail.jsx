
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./RentalTrailerDetail.css";

const trailers = {
  "all-purpose-food-trailer": {
    name: "All-Purpose Food Trailer",
    category: "Food & Concession",
    size: 16,
    status: "AVAILABLE",
    image: "/Images/truck1.jpeg",
    gallery: [
      "/Images/truck1.jpeg",
      "/Images/truck6.jpg",
      "/Images/bbq.jpg",
      "/Images/coffee.jpg",
    ],
    specs: [
      ["Length", "16 ft (body)"],
      ["Width / height", "8.5 ft / 10 ft"],
      ["Weight (GVWR)", "— lbs"],
      ["Hitch", '2-5/16" ball'],
      ["Power", "50 A shore / generator"],
      ["Water", "Fresh — gal · grey — gal"],
      ["Gas", "Propane, 2 × 40 lb"],
      ["VIN", "Documented"],
    ],
    equipment: [
      'Flat-top griddle 36"',
      "2 deep fryers",
      "Prep table fridge",
      "Chest freezer",
      "Exhaust hood",
      "Fire suppression",
      "3-comp sink + hand sink",
      "Water heater",
      "Serving window",
      "LED lighting",
    ],
  },

  "latin-street-trailer": {
    name: "Latin Street Trailer",
    category: "Food & Concession",
    size: 14,
    status: "AVAILABLE",
    image: "/Images/truck6.jpg",
    gallery: ["/Images/truck6.jpg", "/Images/truck1.jpeg", "/Images/bbq.jpg", "/Images/coffee.jpg"],
    specs: [
      ["Length", "14 ft (body)"],
      ["Width / height", "8.5 ft / 10 ft"],
      ["Weight (GVWR)", "— lbs"],
      ["Hitch", '2-5/16" ball'],
      ["Power", "50 A shore / generator"],
      ["Water", "Fresh — gal · grey — gal"],
      ["Gas", "Propane"],
      ["VIN", "Documented"],
    ],
    equipment: ["Flat-top griddle", "Steam table", "Prep cooler", "3-comp sink", "Serving window", "LED lighting"],
  },

  "bbq-smokehouse-trailer": {
    name: "BBQ Smokehouse Trailer",
    category: "Food & Concession",
    size: 18,
    status: "AVAILABLE SOON",
    image: "/Images/bbq.jpg",
    gallery: ["/Images/bbq.jpg", "/Images/truck1.jpeg", "/Images/truck6.jpg", "/Images/coffee.jpg"],
    specs: [
      ["Length", "18 ft (body)"],
      ["Width / height", "8.5 ft / 10 ft"],
      ["Weight (GVWR)", "— lbs"],
      ["Hitch", '2-5/16" ball'],
      ["Power", "50 A shore / generator"],
      ["Water", "Fresh — gal · grey — gal"],
      ["Gas", "Propane"],
      ["VIN", "Documented"],
    ],
    equipment: ["Smoker porch", "Warming cabinet", "Exhaust hood", "Prep table", "Hand sink", "LED lighting"],
  },

  "coffee-drinks-trailer": {
    name: "Coffee & Drinks Trailer",
    category: "Food & Concession",
    size: 12,
    status: "AVAILABLE",
    image: "/Images/coffee.jpg",
    gallery: ["/Images/coffee.jpg", "/Images/truck1.jpeg", "/Images/truck6.jpg", "/Images/bbq.jpg"],
    specs: [
      ["Length", "12 ft (body)"],
      ["Width / height", "8.5 ft / 10 ft"],
      ["Weight (GVWR)", "— lbs"],
      ["Hitch", '2-5/16" ball'],
      ["Power", "50 A shore / generator"],
      ["Water", "Fresh — gal · grey — gal"],
      ["Gas", "As equipped"],
      ["VIN", "Documented"],
    ],
    equipment: ["Espresso-ready counter", "Ice bin", "Undercounter fridge", "Hand sink", "Water heater", "LED lighting"],
  },
};

const rentalPeriods = [
  { id: "daily", label: "Daily", description: "Choose any available day." },
  { id: "weekend", label: "Weekend", description: "Weekend = Friday – Sunday. Select a weekend date to reserve all three days." },
  { id: "weekly", label: "Weekly", description: "Choose a start date for seven consecutive days." },
  { id: "monthly", label: "Monthly", description: "Choose a start date for a monthly rental. COI may be required." },
];

const similarTrailers = [
  { slug: "latin-street-trailer", name: "Latin Street Trailer", size: "14 ft", image: "/Images/truck6.jpg" },
  { slug: "bbq-smokehouse-trailer", name: "BBQ Smokehouse Trailer", size: "18 ft", image: "/Images/bbq.jpg" },
  { slug: "coffee-drinks-trailer", name: "Coffee & Drinks Trailer", size: "12 ft", image: "/Images/coffee.jpg" },
];

function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function getCalendarDays(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Monday-first calendar
  const mondayFirstOffset = (firstDay.getDay() + 6) % 7;

  return [
    ...Array(mondayFirstOffset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
  ];
}

const RentalTrailerDetail = () => {
  const { slug } = useParams();
  const trailer = trailers[slug] || trailers["all-purpose-food-trailer"];

  const [selectedImage, setSelectedImage] = useState(trailer.image);
  const [period, setPeriod] = useState("weekend");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendarMonth, setCalendarMonth] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  );
  const [delivery, setDelivery] = useState("pickup");
  const [zipCode, setZipCode] = useState("30314");
  const [payment, setPayment] = useState("deposit");
  const [generator, setGenerator] = useState(false);

  const calendarDays = useMemo(
    () => getCalendarDays(calendarMonth),
    [calendarMonth]
  );

  const changeMonth = (amount) => {
    setCalendarMonth(
      (current) => new Date(current.getFullYear(), current.getMonth() + amount, 1)
    );
  };

  const selectDay = (day) => {
    if (!day) return;

    const newDate = new Date(
      calendarMonth.getFullYear(),
      calendarMonth.getMonth(),
      day
    );

    setSelectedDate(newDate);
  };

  const endDate = useMemo(() => {
    const end = new Date(selectedDate);

    if (period === "weekend") {
      const day = end.getDay();
      const daysUntilSunday = day === 0 ? 0 : 7 - day;
      end.setDate(end.getDate() + daysUntilSunday);
    } else if (period === "weekly") {
      end.setDate(end.getDate() + 6);
    } else if (period === "monthly") {
      end.setMonth(end.getMonth() + 1);
      end.setDate(end.getDate() - 1);
    }

    return end;
  }, [selectedDate, period]);

  const priceLabel = period === "daily" ? "/day" : period === "weekend" ? "/weekend" : period === "weekly" ? "/week" : "/month";

  const handleRentNow = () => {
    alert(
      `Booking preview\nTrailer: ${trailer.name}\nPeriod: ${period}\nStart: ${formatDate(selectedDate)}\nEnd: ${formatDate(endDate)}\nPayment: ${payment === "deposit" ? "Deposit only" : "Pay in full"}\n\nConnect your booking provider to complete checkout.`
    );
  };

  return (
    <main className="rental-detail">
      <section className="rental-detail__hero">
        <div className="rental-detail__container">
          <nav className="rental-detail__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/trailer-rental">Trailers for Rent</Link>
            <span>/</span>
            <span>{trailer.category} Trailer Rental</span>
            <span>/</span>
            <strong>{trailer.name} · {trailer.size} ft</strong>
          </nav>

          <div className="rental-detail__eyebrow">
            <span />
            {trailer.category} Trailer Rental
          </div>

          <h1 className="rental-detail__title">
            {trailer.name} <em>· {trailer.size} ft</em>
          </h1>

          <div className="rental-detail__main-grid">
            <div className="rental-detail__gallery">
              <div className="rental-detail__main-image">
                <img src={selectedImage} alt={trailer.name} />
                <span className="rental-detail__image-badge">
                  {trailer.category}
                </span>
                <span className="rental-detail__image-caption">
                  {trailer.name} — exterior photo
                </span>
              </div>

              <div className="rental-detail__thumbnails">
                {trailer.gallery.map((image, index) => (
                  <button
                    type="button"
                    key={`${image}-${index}`}
                    className={`rental-detail__thumbnail ${
                      selectedImage === image ? "is-selected" : ""
                    }`}
                    onClick={() => setSelectedImage(image)}
                    aria-label={`View trailer photo ${index + 1}`}
                  >
                    <img src={image} alt={`${trailer.name} view ${index + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            <aside className="rental-detail__booking">
              <div className="rental-detail__booking-top">
                <div className="rental-detail__price-from">
                  <span>From</span>
                  <strong>$—</strong>
                  <span>{priceLabel}</span>
                </div>
                <span className="rental-detail__availability">
                  <i />
                  {trailer.status}
                </span>
              </div>

              <div className="rental-detail__periods" role="group" aria-label="Rental period">
                {rentalPeriods.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    className={period === item.id ? "is-active" : ""}
                    onClick={() => setPeriod(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <p className="rental-detail__period-note">
                {rentalPeriods.find((item) => item.id === period)?.description}
              </p>

              <div className="rental-detail__calendar">
                <div className="rental-detail__calendar-heading">
                  <button type="button" onClick={() => changeMonth(-1)} aria-label="Previous month">
                    ‹
                  </button>
                  <strong>
                    {calendarMonth.toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </strong>
                  <button type="button" onClick={() => changeMonth(1)} aria-label="Next month">
                    ›
                  </button>
                </div>

                <div className="rental-detail__weekdays">
                  {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                    <span key={`${day}-${index}`}>{day}</span>
                  ))}
                </div>

                <div className="rental-detail__calendar-days">
                  {calendarDays.map((day, index) => {
                    const isSelected =
                      day &&
                      selectedDate.getDate() === day &&
                      selectedDate.getMonth() === calendarMonth.getMonth() &&
                      selectedDate.getFullYear() === calendarMonth.getFullYear();

                    return (
                      <button
                        type="button"
                        key={`${calendarMonth.getFullYear()}-${calendarMonth.getMonth()}-${index}`}
                        disabled={!day}
                        className={isSelected ? "is-selected" : ""}
                        onClick={() => selectDay(day)}
                      >
                        {day || ""}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rental-detail__delivery-options">
                <button
                  type="button"
                  className={delivery === "pickup" ? "is-selected" : ""}
                  onClick={() => setDelivery("pickup")}
                >
                  Pickup · $0
                </button>
                <button
                  type="button"
                  className={delivery === "delivery" ? "is-selected" : ""}
                  onClick={() => setDelivery("delivery")}
                >
                  Delivery · ZIP
                </button>
              </div>

              {delivery === "delivery" && (
                <label className="rental-detail__zip-field">
                  Delivery ZIP code
                  <input
                    value={zipCode}
                    onChange={(event) => setZipCode(event.target.value)}
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="Enter ZIP code"
                  />
                </label>
              )}

              <div className="rental-detail__summary">
                <div>
                  <span>
                    {period === "weekend" ? "Weekend rental" : `${period[0].toUpperCase()}${period.slice(1)} rental`}
                    {" · "}
                    {formatDate(selectedDate)} – {formatDate(endDate)}
                  </span>
                  <strong>$—</strong>
                </div>
                {delivery === "delivery" && (
                  <div>
                    <span>Delivery · ZIP {zipCode || "—"}</span>
                    <strong>$—</strong>
                  </div>
                )}
                <label className="rental-detail__addon">
                  <input
                    type="checkbox"
                    checked={generator}
                    onChange={(event) => setGenerator(event.target.checked)}
                  />
                  <span>Generator add-on</span>
                  <strong>{generator ? "$—" : "$0"}</strong>
                </label>
                <div>
                  <span>Maintenance plan</span>
                  <strong>$—</strong>
                </div>
                <div>
                  <span>Taxes & fees</span>
                  <strong>$—</strong>
                </div>
                <div>
                  <span>Refundable deposit</span>
                  <strong>$—</strong>
                </div>
                <div className="rental-detail__total">
                  <strong>Total</strong>
                  <strong>$—</strong>
                </div>
              </div>

              <div className="rental-detail__payment">
                <button
                  type="button"
                  className={payment === "deposit" ? "is-selected" : ""}
                  onClick={() => setPayment("deposit")}
                >
                  Pay deposit only
                </button>
                <button
                  type="button"
                  className={payment === "full" ? "is-selected" : ""}
                  onClick={() => setPayment("full")}
                >
                  Pay in full
                </button>
              </div>

              <button
                type="button"
                className="rental-detail__rent-button"
                onClick={handleRentNow}
              >
                RENT NOW <span>→</span>
              </button>

              <button
                type="button"
                className="rental-detail__save-button"
                onClick={() => alert("Quote saving will be available when customer accounts are connected.")}
              >
                Save quote for later
              </button>

              <p className="rental-detail__booking-note">
                Booking totals, live availability, deposits, and checkout will be provided by the connected booking system.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="rental-detail__information">
        <div className="rental-detail__container rental-detail__info-grid">
          <article className="rental-detail__info-card">
            <span className="rental-detail__section-label">Specs</span>
            <div className="rental-detail__spec-list">
              {trailer.specs.map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
            <p className="rental-detail__data-note">Specifications shown are sample values.</p>
          </article>

          <article className="rental-detail__info-card">
            <span className="rental-detail__section-label">Equipment Included</span>
            <div className="rental-detail__equipment">
              {trailer.equipment.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <p className="rental-detail__info-description">
              Need more? Ask about generators, POS systems, and extra equipment when booking.
            </p>
          </article>

          <article className="rental-detail__info-card rental-detail__floor-card">
            <span className="rental-detail__section-label">Floor Plan</span>
            <div className="rental-detail__floor-placeholder">
              <span>Floor plan image coming soon</span>
            </div>
            <button
              type="button"
              className="rental-detail__download-button"
              onClick={() => alert("Add the actual floor plan PDF to enable downloads.")}
            >
              Download spec sheet (PDF)
            </button>
          </article>
        </div>
      </section>

      <section className="rental-detail__similar">
        <div className="rental-detail__container">
          <div className="rental-detail__similar-heading">
            <div>
              <span className="rental-detail__section-label">You may also like</span>
              <h2>Similar rental trailers.</h2>
            </div>
            <Link to="/trailer-rental">View all rentals →</Link>
          </div>

          <div className="rental-detail__similar-grid">
            {similarTrailers
              .filter((item) => item.slug !== slug)
              .slice(0, 3)
              .map((item) => (
                <article className="rental-detail__similar-card" key={item.slug}>
                  <Link to={`/trailer-rental/${item.slug}`}>
                    <div className="rental-detail__similar-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="rental-detail__similar-content">
                      <h3>{item.name} · {item.size}</h3>
                      <span>RENT NOW →</span>
                    </div>
                  </Link>
                </article>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default RentalTrailerDetail;
