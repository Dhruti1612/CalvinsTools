import  { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./CustomConfigurator.css";

const CustomConfigurator = () => {
  const [equipment, setEquipment] = useState({
    flatTopGriddle: 1,
    deepFryer: 2,
    charbroiler: 0,
    rangeOven: 0,
    pizzaOven: 0,

    prepRefrigerator: 1,
    reachInRefrigerator: 0,
    chestFreezer: 1,
    iceBin: 0,

    exhaustHood: 1,
    fireSuppression: 1,
    fireExtinguishers: 1,

    threeCompartmentSink: 1,
    waterTanks: 1,
    waterHeater: 1,
  });

  const toggleEquipment = (key) => {
    setEquipment((current) => ({
      ...current,
      [key]: current[key] > 0 ? 0 : 1,
    }));
  };

  const increaseQuantity = (key) => {
    setEquipment((current) => ({
      ...current,
      [key]: current[key] + 1,
    }));
  };

  const decreaseQuantity = (key) => {
    setEquipment((current) => ({
      ...current,
      [key]: Math.max(0, current[key] - 1),
    }));
  };

  const selectedEquipment = useMemo(() => {
    const selected = [];

    const addItem = (name, key) => {
      if (equipment[key] > 0) {
        selected.push({
          name,
          quantity: equipment[key],
        });
      }
    };

    addItem("Griddle", "flatTopGriddle");
    addItem("Deep fryer", "deepFryer");
    addItem("Prep fridge", "prepRefrigerator");
    addItem("Freezer", "chestFreezer");
    addItem("Hood", "exhaustHood");
    addItem("Fire suppression", "fireSuppression");
    addItem("Sinks", "threeCompartmentSink");
    addItem("Water tanks", "waterTanks");
    addItem("Water heater", "waterHeater");

    return selected;
  }, [equipment]);

  const equipmentSummary = selectedEquipment
    .map((item) =>
      item.quantity > 1
        ? `${item.name} × ${item.quantity}`
        : item.name
    )
    .join(", ");

  return (
    <section className="custom-configurator">

      <div className="custom-configurator__container">

        {/* =========================================
            TOP INTRO
        ========================================= */}

        <div className="custom-configurator__top">

          <div className="custom-configurator__heading-area">

            <div className="custom-configurator__label">
              <span>03</span>
              <i></i>
              <strong>BUILD &amp; QUOTE</strong>
            </div>

            <h2 className="custom-configurator__title">
              Configure your trailer.
              <br />
              <em>Get your quote.</em>
            </h2>

          </div>


          <div className="custom-configurator__intro">

            <p>
              Six short steps: size, layout, equipment, options, branding
              and your timeline. Save and come back any time — when
              you’re ready, request your quote.
            </p>

           

          </div>

        </div>


        {/* =========================================
            CONFIGURATOR
        ========================================= */}

        <div className="custom-configurator__workspace">

          {/* =========================================
              STEP NAVIGATION
          ========================================= */}

          <div className="custom-configurator__steps">

            <div className="custom-configurator__step custom-configurator__step--complete">
              <span>✓</span>
              <strong>Type &amp; size</strong>
            </div>

            <div className="custom-configurator__step custom-configurator__step--complete">
              <span>✓</span>
              <strong>Base model &amp; layout</strong>
            </div>

            <div className="custom-configurator__step custom-configurator__step--active">
              <span>3</span>
              <strong>Equipment &amp;<br /> appliances</strong>
            </div>

            <div className="custom-configurator__step">
              <span>4</span>
              <strong>Options &amp; add-ons</strong>
            </div>

            <div className="custom-configurator__step">
              <span>5</span>
              <strong>Branding &amp; files</strong>
            </div>

            <div className="custom-configurator__step">
              <span>6</span>
              <strong>Contact &amp; timeline</strong>
            </div>

          </div>


          {/* =========================================
              MAIN + SUMMARY
          ========================================= */}

          <div className="custom-configurator__body">

            {/* =====================================
                LEFT CONFIGURATION AREA
            ===================================== */}

            <div className="custom-configurator__main">

              <div className="custom-configurator__step-heading">

                <span>STEP 3 OF 6</span>

                <h3>Equipment &amp; appliances</h3>

                <p>
                  Pre-selected from your base model. Add, remove or change
                  quantities — our team checks power, gas and weight for
                  every build.
                </p>

              </div>


              {/* =================================
                  EQUIPMENT COLUMNS
              ================================= */}

              <div className="custom-configurator__equipment-grid">

                {/* =================================
                    LEFT COLUMN
                ================================= */}

                <div className="custom-configurator__equipment-column">

                  {/* COOKING */}

                  <div className="custom-configurator__group">

                    <h4>COOKING</h4>

                    <EquipmentRow
                      label="Flat-top griddle"
                      checked={equipment.flatTopGriddle > 0}
                      quantity={equipment.flatTopGriddle}
                      onToggle={() =>
                        toggleEquipment("flatTopGriddle")
                      }
                      onIncrease={() =>
                        increaseQuantity("flatTopGriddle")
                      }
                      onDecrease={() =>
                        decreaseQuantity("flatTopGriddle")
                      }
                    />

                    <EquipmentRow
                      label="Deep fryer"
                      checked={equipment.deepFryer > 0}
                      quantity={equipment.deepFryer}
                      onToggle={() =>
                        toggleEquipment("deepFryer")
                      }
                      onIncrease={() =>
                        increaseQuantity("deepFryer")
                      }
                      onDecrease={() =>
                        decreaseQuantity("deepFryer")
                      }
                    />

                    <EquipmentRow
                      label="Charbroiler"
                      checked={equipment.charbroiler > 0}
                      onToggle={() =>
                        toggleEquipment("charbroiler")
                      }
                    />

                    <EquipmentRow
                      label="6-burner range with oven"
                      checked={equipment.rangeOven > 0}
                      onToggle={() =>
                        toggleEquipment("rangeOven")
                      }
                    />

                    <EquipmentRow
                      label="Pizza oven"
                      checked={equipment.pizzaOven > 0}
                      onToggle={() =>
                        toggleEquipment("pizzaOven")
                      }
                    />

                  </div>


                  {/* VENTILATION */}

                  <div className="custom-configurator__group">

                    <h4>VENTILATION &amp; SAFETY</h4>

                    <EquipmentRow
                      label="Exhaust hood"
                      checked={equipment.exhaustHood > 0}
                      quantity={equipment.exhaustHood}
                      onToggle={() =>
                        toggleEquipment("exhaustHood")
                      }
                      onIncrease={() =>
                        increaseQuantity("exhaustHood")
                      }
                      onDecrease={() =>
                        decreaseQuantity("exhaustHood")
                      }
                    />

                    <EquipmentRow
                      label="Fire suppression system"
                      checked={equipment.fireSuppression > 0}
                      quantity={equipment.fireSuppression}
                      onToggle={() =>
                        toggleEquipment("fireSuppression")
                      }
                      onIncrease={() =>
                        increaseQuantity("fireSuppression")
                      }
                      onDecrease={() =>
                        decreaseQuantity("fireSuppression")
                      }
                    />

                    <EquipmentRow
                      label="Fire extinguishers (K + ABC)"
                      checked={equipment.fireExtinguishers > 0}
                      quantity={equipment.fireExtinguishers}
                      onToggle={() =>
                        toggleEquipment("fireExtinguishers")
                      }
                      onIncrease={() =>
                        increaseQuantity("fireExtinguishers")
                      }
                      onDecrease={() =>
                        decreaseQuantity("fireExtinguishers")
                      }
                    />

                  </div>

                </div>


                {/* =================================
                    RIGHT COLUMN
                ================================= */}

                <div className="custom-configurator__equipment-column">

                  {/* REFRIGERATION */}

                  <div className="custom-configurator__group">

                    <h4>REFRIGERATION</h4>

                    <EquipmentRow
                      label="Prep table refrigerator"
                      checked={equipment.prepRefrigerator > 0}
                      quantity={equipment.prepRefrigerator}
                      onToggle={() =>
                        toggleEquipment("prepRefrigerator")
                      }
                      onIncrease={() =>
                        increaseQuantity("prepRefrigerator")
                      }
                      onDecrease={() =>
                        decreaseQuantity("prepRefrigerator")
                      }
                    />

                    <EquipmentRow
                      label="Reach-in refrigerator"
                      checked={equipment.reachInRefrigerator > 0}
                      onToggle={() =>
                        toggleEquipment("reachInRefrigerator")
                      }
                    />

                    <EquipmentRow
                      label="Chest freezer"
                      checked={equipment.chestFreezer > 0}
                      quantity={equipment.chestFreezer}
                      onToggle={() =>
                        toggleEquipment("chestFreezer")
                      }
                      onIncrease={() =>
                        increaseQuantity("chestFreezer")
                      }
                      onDecrease={() =>
                        decreaseQuantity("chestFreezer")
                      }
                    />

                    <EquipmentRow
                      label="Ice bin"
                      checked={equipment.iceBin > 0}
                      onToggle={() =>
                        toggleEquipment("iceBin")
                      }
                    />

                  </div>


                  {/* SINKS & WATER */}

                  <div className="custom-configurator__group">

                    <h4>SINKS &amp; WATER</h4>

                    <EquipmentRow
                      label="3-compartment sink + hand sink"
                      checked={equipment.threeCompartmentSink > 0}
                      quantity={equipment.threeCompartmentSink}
                      onToggle={() =>
                        toggleEquipment("threeCompartmentSink")
                      }
                      onIncrease={() =>
                        increaseQuantity("threeCompartmentSink")
                      }
                      onDecrease={() =>
                        decreaseQuantity("threeCompartmentSink")
                      }
                    />

                    <EquipmentRow
                      label="Fresh / grey water tanks"
                      checked={equipment.waterTanks > 0}
                      quantity={equipment.waterTanks}
                      onToggle={() =>
                        toggleEquipment("waterTanks")
                      }
                      onIncrease={() =>
                        increaseQuantity("waterTanks")
                      }
                      onDecrease={() =>
                        decreaseQuantity("waterTanks")
                      }
                    />

                    <EquipmentRow
                      label="Water heater"
                      checked={equipment.waterHeater > 0}
                      quantity={equipment.waterHeater}
                      onToggle={() =>
                        toggleEquipment("waterHeater")
                      }
                      onIncrease={() =>
                        increaseQuantity("waterHeater")
                      }
                      onDecrease={() =>
                        decreaseQuantity("waterHeater")
                      }
                    />

                  </div>

                </div>

              </div>


              {/* =================================
                  BOTTOM NAVIGATION
              ================================= */}

              <div className="custom-configurator__navigation">

                <button
                  type="button"
                  className="custom-configurator__back-button"
                >
                  ← Back
                </button>

                <span className="custom-configurator__save-text">
                  Progress saves to your account
                </span>

                <button
                  type="button"
                  className="custom-configurator__next-button"
                >
                  NEXT: OPTIONS &amp; ADD-ONS →
                </button>

              </div>

            </div>


            {/* =====================================
                RIGHT SUMMARY
            ===================================== */}

            <aside className="custom-configurator__summary">

              <div className="custom-configurator__summary-label">
                YOUR BUILD
              </div>

              <h3 className="custom-configurator__summary-title">
                Custom Food Trailer · 16 ft
              </h3>


              <SummaryItem
                label="TYPE"
                value="Custom Food Trailer"
              />

              <SummaryItem
                label="SIZE"
                value="16 ft"
              />

              <SummaryItem
                label="BASE MODEL"
                value="All-Purpose Food Trailer"
              />

              <SummaryItem
                label="LAYOUT"
                value="Kitchen front, window left"
              />

              <SummaryItem
                label="EQUIPMENT"
                value={
                  equipmentSummary ||
                  "—"
                }
              />

              <SummaryItem
                label="OPTIONS"
                value="—"
              />

              <SummaryItem
                label="BRANDING"
                value="—"
              />


              {/* QUOTE INFO */}

              <div className="custom-configurator__quote-info">

                <strong>Your quote:</strong>{" "}
                prepared by our Custom Build team after review —
                usually within 2 business days.

                <span> CONFIRM</span>

              </div>


              {/* REQUEST QUOTE */}

              <Link
                to="/custom-trailers"
                className="custom-configurator__quote-button"
              >
                REQUEST MY QUOTE →
              </Link>

              <p className="custom-configurator__no-payment">
                No payment needed to request a quote.
              </p>

            </aside>

          </div>

        </div>


       

      </div>

    </section>
  );
};


/* =========================================
   EQUIPMENT ROW
========================================= */

const EquipmentRow = ({
  label,
  checked,
  quantity,
  onToggle,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div
      className={`custom-configurator__equipment-row ${
        checked
          ? "custom-configurator__equipment-row--selected"
          : ""
      }`}
    >

      <button
        type="button"
        className={`custom-configurator__checkbox ${
          checked
            ? "custom-configurator__checkbox--checked"
            : ""
        }`}
        onClick={onToggle}
        aria-label={`Toggle ${label}`}
      >
        {checked ? "✓" : ""}
      </button>

      <span className="custom-configurator__equipment-name">
        {label}
      </span>

      {checked && quantity !== undefined && (
        <div className="custom-configurator__quantity">

          <button
            type="button"
            onClick={onDecrease}
          >
            −
          </button>

          <span>{quantity}</span>

          <button
            type="button"
            onClick={onIncrease}
          >
            +
          </button>

        </div>
      )}

    </div>
  );
};


/* =========================================
   SUMMARY ITEM
========================================= */

const SummaryItem = ({ label, value }) => {
  return (
    <div className="custom-configurator__summary-item">

      <span>
        {label}
      </span>

      <strong>
        {value}
      </strong>

    </div>
  );
};


export default CustomConfigurator;