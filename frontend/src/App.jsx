
import { useMemo, useState } from "react";
import "./App.css";

const properties = [
  {
    id: 1,
    name: "Modern Student Living",
    type: "PG",
    location: "Vadgaon BK, Pune",
    rent: 6500,
    deposit: 10000,
    rating: 4.7,
    beds: "Single / Shared",
    amenities: ["Wi-Fi", "Meals", "Laundry"],
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=85",
    color: "peach",
  },
  {
    id: 2,
    name: "The Urban Nest",
    type: "1BHK",
    location: "Sinhgad Road, Pune",
    rent: 12000,
    deposit: 25000,
    rating: 4.8,
    beds: "2 students",
    amenities: ["Furnished", "Kitchen", "Wi-Fi"],
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=85",
    color: "blue",
  },
  {
    id: 3,
    name: "Campus Corner Rooms",
    type: "Room",
    location: "Dhayari, Pune",
    rent: 4500,
    deposit: 8000,
    rating: 4.5,
    beds: "Shared room",
    amenities: ["Wi-Fi", "Study desk", "Parking"],
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85",
    color: "green",
  },
  {
    id: 4,
    name: "Green Leaf Residency",
    type: "Hostel",
    location: "Nanded City, Pune",
    rent: 8000,
    deposit: 12000,
    rating: 4.6,
    beds: "Single / Shared",
    amenities: ["Meals", "Security", "Laundry"],
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=85",
    color: "lavender",
  },
  {
    id: 5,
    name: "Sunrise Studio",
    type: "1RK",
    location: "Vadgaon BK, Pune",
    rent: 7000,
    deposit: 15000,
    rating: 4.4,
    beds: "Private",
    amenities: ["Kitchen", "Furnished", "Parking"],
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=85",
    color: "peach",
  },
  {
    id: 6,
    name: "College View Flat",
    type: "1BHK",
    location: "Sinhgad Road, Pune",
    rent: 11000,
    deposit: 22000,
    rating: 4.9,
    beds: "2–3 students",
    amenities: ["Balcony", "Wi-Fi", "Kitchen"],
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
    color: "blue",
  },
];

const formatRupees = (amount) =>
  `₹${amount.toLocaleString("en-IN")}`;

function App() {
  const [location, setLocation] = useState("All locations");
  const [type, setType] = useState("All types");
  const [budget, setBudget] = useState("15000");
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [showSaved, setShowSaved] = useState(false);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesLocation =
        location === "All locations" ||
        property.location === location;

      const matchesType =
        type === "All types" || property.type === type;

      const matchesBudget = property.rent <= Number(budget);

      const query = search.trim().toLowerCase();
      const matchesSearch =
        !query ||
        property.name.toLowerCase().includes(query) ||
        property.location.toLowerCase().includes(query) ||
        property.amenities.some((item) =>
          item.toLowerCase().includes(query)
        );

      const matchesSaved =
        !showSaved || favorites.includes(property.id);

      return (
        matchesLocation &&
        matchesType &&
        matchesBudget &&
        matchesSearch &&
        matchesSaved
      );
    });
  }, [location, type, budget, search, favorites, showSaved]);

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  function resetFilters() {
    setLocation("All locations");
    setType("All types");
    setBudget("15000");
    setSearch("");
    setShowSaved(false);
  }

  return (
    <div className="app-shell">
      <header className="navbar">
        <a className="brand" href="#" aria-label="CampusNest home">
          <span className="brand-mark">C<span>N</span></span>
          <span>campus<span className="brand-accent">nest</span></span>
        </a>

        <nav className="nav-links">
          <a className="active-link" href="#explore">Explore stays</a>
          <a href="#how-it-works">How it works</a>
          <a href="#about">About us</a>
        </nav>

        <div className="nav-actions">
          <button
            className={`saved-button ${showSaved ? "saved-active" : ""}`}
            onClick={() => setShowSaved(!showSaved)}
          >
            ♡ Saved ({favorites.length})
          </button>
          <button
            className="owner-button"
            onClick={() =>
              alert("Owner listing feature is coming soon!")
            }
          >
            List your property <span>↗</span>
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              YOUR NEXT CHAPTER STARTS HERE
            </div>

            <h1>
              Find your place.
              <br />
              Find your <span>people.</span>
            </h1>

            <p className="hero-description">
              Discover student-friendly flats, PGs and rooms
              near your campus. Less searching, more living.
            </p>

            <div className="hero-stats">
              <div>
                <strong>Student-first</strong>
                <span>Designed for campus life</span>
              </div>
              <div>
                <strong>Budget-aware</strong>
                <span>Compare before you decide</span>
              </div>
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-image" />
            <div className="floating-note note-top">
              <span className="note-icon">⌂</span>
              <span><strong>Your next home</strong><small>Closer to campus</small></span>
            </div>
            <div className="floating-note note-bottom">
              <span className="avatar-stack">✦</span>
              <span><strong>Room for you</strong><small>Space to feel at home</small></span>
            </div>
            <div className="art-decoration decoration-one" />
            <div className="art-decoration decoration-two" />
          </div>
        </section>

        <section className="search-section" aria-label="Find accommodation">
          <div className="search-heading">
            <span className="search-heading-icon">⌕</span>
            <div>
              <h2>Find your kind of place</h2>
              <p>Make the search yours.</p>
            </div>
          </div>

          <form
            className="search-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <label className="field">
              <span>LOCATION</span>
              <select
                value={location}
                onChange={(event) => setLocation(event.target.value)}
              >
                <option>All locations</option>
                <option>Vadgaon BK, Pune</option>
                <option>Sinhgad Road, Pune</option>
                <option>Dhayari, Pune</option>
                <option>Nanded City, Pune</option>
              </select>
            </label>

            <label className="field">
              <span>ACCOMMODATION</span>
              <select
                value={type}
                onChange={(event) => setType(event.target.value)}
              >
                <option>All types</option>
                <option>PG</option>
                <option>1RK</option>
                <option>1BHK</option>
                <option>Room</option>
                <option>Hostel</option>
              </select>
            </label>

            <label className="field">
              <span>MONTHLY BUDGET</span>
              <select
                value={budget}
                onChange={(event) => setBudget(event.target.value)}
              >
                <option value="5000">Up to ₹5,000</option>
                <option value="8000">Up to ₹8,000</option>
                <option value="10000">Up to ₹10,000</option>
                <option value="15000">Up to ₹15,000</option>
                <option value="20000">Up to ₹20,000</option>
              </select>
            </label>

            <button className="search-button" type="submit">
              Search stays <span>→</span>
            </button>
          </form>
        </section>

        <section className="listings-section" id="explore">
          <div className="section-heading">
            <div>
              <span className="section-kicker">A PLACE TO CALL YOURS</span>
              <h2>
                Explore stays <span className="heading-sparkle">✳</span>
              </h2>
              <p>Thoughtfully chosen spaces for your student life.</p>
            </div>
            <span className="results-count">
              {filteredProperties.length} places
            </span>
          </div>

          <div className="quick-filters">
            {["All types", "PG", "1RK", "1BHK", "Room", "Hostel"].map(
              (item) => (
                <button
                  key={item}
                  className={`filter-chip ${type === item ? "chip-active" : ""}`}
                  onClick={() => setType(item)}
                >
                  {item}
                </button>
              )
            )}

            <button className="reset-button" onClick={resetFilters}>
              ↺ Reset filters
            </button>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="property-grid">
              {filteredProperties.map((property) => (
                <article className="property-card" key={property.id}>
                  <div className="property-image-wrap">
                    <img
                      src={property.image}
                      alt={`Interior of ${property.name}`}
                      className="property-image"
                      loading="lazy"
                    />
                    <span className="property-type">{property.type}</span>
                    <button
                      className={`favorite-button ${
                        favorites.includes(property.id) ? "is-favorite" : ""
                      }`}
                      onClick={() => toggleFavorite(property.id)}
                      aria-label={
                        favorites.includes(property.id)
                          ? "Remove from saved"
                          : "Save property"
                      }
                    >
                      {favorites.includes(property.id) ? "♥" : "♡"}
                    </button>
                  </div>

                  <div className="property-content">
                    <div className="property-title-row">
                      <h3>{property.name}</h3>
                      <span className="rating">★ {property.rating}</span>
                    </div>

                    <p className="property-location">
                      <span>⌖</span> {property.location}
                    </p>

                    <p className="property-beds">{property.beds}</p>

                    <div className="amenities">
                      {property.amenities.map((amenity) => (
                        <span key={amenity}>{amenity}</span>
                      ))}
                    </div>

                    <div className="property-footer">
                      <div className="price">
                        <strong>{formatRupees(property.rent)}</strong>
                        <span>/ person / month*</span>
                      </div>
                      <button
                        className="details-button"
                        onClick={() =>
                          alert(
                            `${property.name}\nMonthly rent: ${formatRupees(
                              property.rent
                            )}\nDeposit: ${formatRupees(
                              property.deposit
                            )}\n\nDetailed property pages are coming soon.`
                          )
                        }
                      >
                        View details ↗
                      </button>
                    </div>
                    <p className="deposit-note">
                      Deposit: {formatRupees(property.deposit)} (sample)
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span>⌂</span>
              <h3>No stays match those filters</h3>
              <p>Try a higher budget or choose a different location.</p>
              <button className="owner-button" onClick={resetFilters}>
                Clear filters
              </button>
            </div>
          )}

          <p className="demo-disclaimer">
            * Demo listings and prices for UI development only. They are
            not verified offers and are not connected to property owners.
          </p>
        </section>

        <section className="how-section" id="how-it-works">
          <span className="section-kicker">MADE FOR STUDENT LIFE</span>
          <h2>Finding a place, made simpler.</h2>
          <div className="how-grid">
            <div><span>01</span><h3>Explore</h3><p>Browse stays around your campus.</p></div>
            <div><span>02</span><h3>Compare</h3><p>Check rent, deposits and amenities.</p></div>
            <div><span>03</span><h3>Connect</h3><p>Plan your next step towards a new home.</p></div>
          </div>
        </section>
      </main>

      <footer className="footer" id="about">
        <a className="brand footer-brand" href="#">
          <span className="brand-mark">C<span>N</span></span>
          <span>campus<span className="brand-accent">nest</span></span>
        </a>
        <p>Find your place. Find your people.</p>
        <span>CampusNest · Student project prototype</span>
      </footer>
    </div>
  );
}

export default App;
