import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./SaleTrailerDetail.css";

const saleTrailers = [
  {
    id: "stock-1", slug: "all-purpose-food-trailer", name: "All-Purpose Food Trailer",
    category: "FOOD & CONCESSION", condition: "NEW", size: 16,
    image: "/Images/truck3.jpeg", gallery: ["/Images/truck3.jpeg"],
    description: "A versatile food trailer designed for burgers, breakfast, fried food and event catering.",
    tags: ["Flat-top griddle 36″", "2 deep fryers", "Prep table fridge", "Chest freezer", "Exhaust hood", "Fire suppression", "3-comp sink + hand sink", "Water heater", "Serving window", "LED lighting"],
    specs: [["Length", "16 ft (body)"], ["Width / height", "8.5 ft / 10 ft"], ["Weight (GVWR)", "Confirm with sales"], ["Hitch", "Confirm with sales"], ["Power", "50A shore / generator"], ["Water", "Confirm tank capacity"], ["Gas", "Propane configuration"], ["VIN", "Ask for documentation"]],
    floorPlan: "/Images/truck3.jpeg",
  },
  {
    id: "stock-2", slug: "bbq-smokehouse-trailer", name: "BBQ Smokehouse Trailer",
    category: "FOOD & CONCESSION", condition: "NEW", size: 20, image: "/Images/bbq.jpg", gallery: ["/Images/bbq.jpg"],
    description: "A BBQ-focused trailer suited to smoked meats, event catering and high-volume food service.",
    tags: ["Smoker porch", "Warming cabinet", "3-comp sink", "Food preparation area", "Service window", "Storage space"],
    specs: [["Length", "20 ft (body)"], ["Width / height", "Confirm with sales"], ["Weight (GVWR)", "Confirm with sales"], ["Hitch", "Confirm with sales"], ["Power", "Confirm configuration"], ["Water", "Confirm tank capacity"], ["Gas", "Confirm configuration"], ["VIN", "Ask for documentation"]],
    floorPlan: "/Images/bbq.jpg",
  },
  {
    id: "stock-3", slug: "coffee-drinks-trailer", name: "Coffee & Drinks Trailer",
    category: "FOOD & CONCESSION", condition: "PRE-OWNED · EX-RENTAL", size: 12, image: "/Images/coffee.jpg", gallery: ["/Images/coffee.jpg"],
    description: "A compact drinks trailer for coffee, smoothies, cold beverages and mobile beverage service.",
    tags: ["Espresso-ready setup", "Ice bin", "Fridge", "Service counter", "Storage"],
    specs: [["Length", "12 ft (body)"], ["Width / height", "Confirm with sales"], ["Weight (GVWR)", "Confirm with sales"], ["Hitch", "Confirm with sales"], ["Power", "Confirm configuration"], ["Water", "Confirm tank capacity"], ["Gas", "Confirm configuration"], ["VIN", "Ask for documentation"]],
    floorPlan: "/Images/coffee.jpg",
  },
  {
    id: "stock-4", slug: "latin-street-trailer", name: "Latin Street Trailer",
    category: "FOOD & CONCESSION", condition: "NEW", size: 14, image: "/Images/latin.jpg", gallery: ["/Images/latin.jpg"],
    description: "A practical street-food trailer suited to tacos, pupusas, arepas and other made-to-order menus.",
    tags: ["Flat-top", "Prep station", "Hood & suppression", "Serving window", "Food preparation area"],
    specs: [["Length", "14 ft (body)"], ["Width / height", "Confirm with sales"], ["Weight (GVWR)", "Confirm with sales"], ["Hitch", "Confirm with sales"], ["Power", "Confirm configuration"], ["Water", "Confirm tank capacity"], ["Gas", "Confirm configuration"], ["VIN", "Ask for documentation"]],
    floorPlan: "/Images/latin.jpg",
  },
  {
    id: "stock-5", slug: "ice-cream-and-sweets-trailer", name: "Ice Cream & Sweets Trailer",
    category: "FOOD & CONCESSION", condition: "NEW", size: 14, image: "/Images/icecream.jpg", gallery: ["/Images/icecream.jpg"],
    description: "A dessert trailer designed for ice cream, churros, sweets and other quick-service treats.",
    tags: ["Freezer", "Serving window", "Hand sink", "Storage", "Customer service counter"],
    specs: [["Length", "14 ft (body)"], ["Width / height", "Confirm with sales"], ["Weight (GVWR)", "Confirm with sales"], ["Hitch", "Confirm with sales"], ["Power", "Confirm configuration"], ["Water", "Confirm tank capacity"], ["Gas", "Confirm configuration"], ["VIN", "Ask for documentation"]],
    floorPlan: "/Images/icecream.jpg",
  },
  {
    id: "stock-6", slug: "nail-salon-trailer", name: "Nail Salon Trailer", category: "SPECIALTY TRAILER",
    condition: "NEW", size: 16, image: "/Images/nail.jpg", gallery: ["/Images/nail.jpg"],
    description: "A mobile salon concept for beauty professionals looking to bring their services to different locations.",
    tags: ["Pedicure stations", "Vented workspace", "Hand sink", "Customer seating", "Flexible workspace"],
    specs: [["Length", "16 ft (body)"], ["Width / height", "Confirm with sales"], ["Weight (GVWR)", "Confirm with sales"], ["Hitch", "Confirm with sales"], ["Power", "Confirm configuration"], ["Water", "Confirm tank capacity"], ["Interior", "Salon configuration"], ["VIN", "Ask for documentation"]],
    floorPlan: "/Images/nail.jpg",
  },
  {
    id: "stock-7", slug: "retail-and-boutique-trailer", name: "Retail & Boutique Trailer", category: "SPECIALTY TRAILER",
    condition: "NEW", size: 14, image: "/Images/truck6.jpg", gallery: ["/Images/truck6.jpg"],
    description: "A mobile retail space for pop-up shops, boutique collections, merchandise and event selling.",
    tags: ["Display shelving", "Fitting area", "A/C", "Flexible retail layout", "Display space"],
    specs: [["Length", "14 ft (body)"], ["Width / height", "Confirm with sales"], ["Weight (GVWR)", "Confirm with sales"], ["Hitch", "Confirm with sales"], ["Power", "Confirm configuration"], ["Climate", "A/C"], ["Interior", "Retail configuration"], ["VIN", "Ask for documentation"]],
    floorPlan: "/Images/truck6.jpg",
  },
  {
    id: "stock-8", slug: "specialty-trailer", name: "Specialty Trailer", category: "SPECIALTY TRAILER",
    condition: "PRE-OWNED · EX-RENTAL", size: 18, image: "/Images/truck7.jpg", gallery: ["/Images/truck7.jpg"],
    description: "A flexible specialty trailer for buyers who need a starting point for a unique mobile business.",
    tags: ["Flexible layout", "Custom-ready", "A/C", "Adaptable workspace"],
    specs: [["Length", "18 ft (body)"], ["Width / height", "Confirm with sales"], ["Weight (GVWR)", "Confirm with sales"], ["Hitch", "Confirm with sales"], ["Power", "Confirm configuration"], ["Climate", "A/C"], ["Interior", "Flexible layout"], ["VIN", "Ask for documentation"]],
    floorPlan: "/Images/truck7.jpg",
  },
];

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg>;
}

export default function SaleTrailerDetail() {
  const { slug } = useParams();
  const trailer = saleTrailers.find((item) => item.slug === slug);
  const [activeImage, setActiveImage] = useState(0);
  const [purchaseOption, setPurchaseOption] = useState("deposit");
  const [contactMethod, setContactMethod] = useState("pickup");
  const [saved, setSaved] = useState(false);

  const relatedTrailers = useMemo(() => {
    if (!trailer) return [];
    return [
      ...saleTrailers.filter((item) => item.slug !== trailer.slug && item.category === trailer.category),
      ...saleTrailers.filter((item) => item.slug !== trailer.slug && item.category !== trailer.category),
    ].slice(0, 3);
  }, [trailer]);

  useEffect(() => {
    if (!trailer) return;
    setActiveImage(0);
    setPurchaseOption("deposit");
    setContactMethod("pickup");
    setSaved(false);
    document.title = `${trailer.name} for Sale | Calvin's Tools`;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [trailer]);

  if (!trailer) {
    return <main className="sale-detail-not-found">
      <span>TRAILER NOT FOUND</span>
      <h1>Let's find your trailer.</h1>
      <p>This listing may have moved. Explore our current sales inventory to find another option.</p>
      <Link to="/trailers-for-sale" className="sale-detail-button">VIEW TRAILERS FOR SALE <ArrowIcon /></Link>
    </main>;
  }

  const selectedImage = trailer.gallery[activeImage] || trailer.image;
  const quoteUrl = `/trailers-for-sale?trailer=${encodeURIComponent(trailer.id)}#quote`;

  return (
    <main className="sale-detail-page">
      <section className="sale-product-top">
        <div className="sale-detail-container">
          <nav className="sale-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>/</span>
            <Link to="/trailers-for-sale">Trailers for Sale</Link><span>/</span>
            <strong>{trailer.name} · {trailer.size} ft</strong>
          </nav>

          <div className="sale-product-heading">
            <div className="sale-heading-copy">
              <p className="sale-eyebrow">{trailer.category}</p>
              <h1>{trailer.name}<span className="sale-title-size"> · {trailer.size} ft</span></h1>
            </div>
          </div>

          <div className="sale-product-layout">
            <div className="sale-gallery">
              <div className="sale-gallery-main">
                <img src={selectedImage} alt={`${trailer.name} — main view`} />
                <span className="sale-gallery-category">{trailer.category}</span>
                <span className="sale-gallery-caption">PHOTO: main photo — exterior, window open</span>
              </div>
              <div className="sale-gallery-thumbnails">
                {[...trailer.gallery, ...Array.from({ length: Math.max(0, 4 - trailer.gallery.length) }, () => null)].slice(0, 4).map((image, index) => (
                  <button type="button" key={`${trailer.slug}-image-${index}`} className={`sale-gallery-thumb ${activeImage === index && image ? "is-active" : ""}`} onClick={() => image && setActiveImage(index)} aria-label={image ? `View photo ${index + 1}` : `Photo ${index + 1} placeholder`} disabled={!image}>
                    {image ? <img src={image} alt={`${trailer.name} view ${index + 1}`} /> : <span className="sale-placeholder-caption">PHOTO: #{index + 2}</span>}
                  </button>
                ))}
              </div>
            </div>

            <aside className="sale-quote-panel">
              <div className="sale-quote-price-row">
                <div className="sale-quote-price"><span>Price</span><strong>Request a quote</strong></div>
                <span className="sale-stock-status"><i /> IN STOCK</span>
              </div>

              <div className="sale-purchase-tabs" role="group" aria-label="Payment preference">
                <button type="button" className={purchaseOption === "deposit" ? "is-active" : ""} onClick={() => setPurchaseOption("deposit")}>PAY DEPOSIT</button>
                <button type="button" className={purchaseOption === "full" ? "is-active" : ""} onClick={() => setPurchaseOption("full")}>PAY IN FULL</button>
              </div>
              <p className="sale-quote-helper">{purchaseOption === "deposit" ? "Ask our team about the deposit amount, reservation terms and payment schedule." : "Request the full purchase price and payment instructions for this trailer."}</p>

              <div className="sale-delivery-options" role="group" aria-label="Collection preference">
                <button type="button" className={contactMethod === "pickup" ? "is-active" : ""} onClick={() => setContactMethod("pickup")}><strong>Pickup</strong><small>Ask for details</small></button>
                <button type="button" className={contactMethod === "delivery" ? "is-active" : ""} onClick={() => setContactMethod("delivery")}><strong>Delivery</strong><small>Request a quote</small></button>
              </div>

              <div className="sale-quote-breakdown">
                <div><span>Trailer</span><strong>{trailer.size} ft</strong></div>
                <div><span>Condition</span><strong>{trailer.condition}</strong></div>
                <div><span>Payment preference</span><strong>{purchaseOption === "deposit" ? "Deposit" : "Pay in full"}</strong></div>
                <div><span>Collection preference</span><strong>{contactMethod === "pickup" ? "Pickup" : "Delivery"}</strong></div>
                <div className="sale-quote-total"><span>Purchase total</span><strong>Quote required</strong></div>
              </div>
              <Link to={quoteUrl} className="sale-detail-button sale-detail-button-primary">REQUEST A QUOTE <ArrowIcon /></Link>
              <button type="button" className={`sale-save-quote ${saved ? "is-saved" : ""}`} onClick={() => setSaved((current) => !current)}>{saved ? "✓ Saved to this session" : "Save quote for later"}</button>
              <div className="sale-quote-small-note">Pricing, availability, deposit terms and delivery costs must be confirmed by our sales team.</div>
            </aside>
          </div>
        </div>
      </section>

      <section className="sale-product-information">
        <div className="sale-detail-container">
          <div className="sale-info-grid">
            <article className="sale-info-card sale-info-card-black">
              <p className="sale-info-label">SPECS</p>
              <div className="sale-spec-list">{trailer.specs.map(([label, value]) => <div className="sale-spec-row" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
              <div className="sale-info-footnote">Specifications should be verified with sales before purchase.</div>
            </article>
            <article className="sale-info-card sale-info-card-black">
              <p className="sale-info-label">EQUIPMENT INCLUDED</p>
              <div className="sale-equipment-list">{trailer.tags.map((item) => <span key={item}>{item}</span>)}</div>
              <p className="sale-equipment-description">Equipment and included accessories vary by unit. Ask our team to confirm the exact equipment supplied with this trailer.</p>
              <Link to={quoteUrl} className="sale-mini-link">CONFIRM EQUIPMENT WITH SALES</Link>
            </article>
            <article className="sale-info-card sale-info-card-orange">
              <p className="sale-info-label">FLOOR PLAN</p>
              <div className="sale-floor-plan"><img src={trailer.floorPlan} alt={`${trailer.name} layout reference`} /><span>PHOTO: floor plan drawing</span></div>
              <Link to={quoteUrl} className="sale-outline-button">REQUEST FLOOR PLAN <ArrowIcon /></Link>
              <p className="sale-floor-note">Ask for the actual floor plan and dimensions for this specific unit.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="sale-related-section">
        <div className="sale-detail-container">
          <div className="sale-related-heading">
            <div><div className="sale-section-kicker"><span /> YOU MAY ALSO LIKE</div><h2>Similar trailers<em>.</em></h2></div>
            <Link to="/trailers-for-sale" className="sale-text-link">VIEW ALL TRAILERS <ArrowIcon /></Link>
          </div>
          <div className="sale-related-grid">
            {relatedTrailers.map((item) => <article className="sale-related-card" key={item.slug}>
              <Link to={`/trailers-for-sale/${item.slug}`} className="sale-related-image"><img src={item.image} alt={item.name} loading="lazy" /><span>PHOTO: {item.name} · {item.size} ft</span></Link>
              <div className="sale-related-card-footer"><h3>{item.name} · {item.size} ft</h3><Link to={`/trailers-for-sale/${item.slug}`}>VIEW <ArrowIcon /></Link></div>
            </article>)}
          </div>
        </div>
      </section>
    </main>
  );
}
