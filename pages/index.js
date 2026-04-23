export default function Home() {
  return (
    <div style={{ fontFamily: "Arial", margin: 0, background: "#0b1220", color: "white" }}>

      {/* FLOATING CALL BUTTON */}
      <a
        href="tel:4708302573"
        style={{
          position: "fixed",
          bottom: "18px",
          right: "18px",
          background: "#2563eb",
          color: "white",
          padding: "14px 16px",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "bold",
          zIndex: 999
        }}
      >
        📞 Call Now
      </a>

      {/* HERO */}
      <section style={{
        padding: "100px 20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #0f172a, #111827)"
      }}>
        <h1 style={{ fontSize: "48px" }}>
          Goodson Global Services
        </h1>

        <p style={{ color: "#cbd5e1", fontSize: "18px" }}>
          Professional Moving Company in Metro Atlanta
        </p>

        <a href="#quote" style={{
          display: "inline-block",
          marginTop: "20px",
          background: "#2563eb",
          padding: "12px 20px",
          borderRadius: "8px",
          color: "white",
          textDecoration: "none",
          fontWeight: "bold"
        }}>
          Get Free Quote
        </a>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "70px 20px", maxWidth: "1000px", margin: "auto" }}>
        <h2 style={{ textAlign: "center" }}>Our Services</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "15px",
          marginTop: "20px"
        }}>
          {[
            "Local Moving",
            "Long Distance Moving",
            "Residential Moving",
            "Commercial Moving",
            "Loading & Unloading",
            "Same-Day Moves"
          ].map((item, i) => (
            <div key={i} style={{
              background: "#111827",
              padding: "20px",
              borderRadius: "12px"
            }}>
              <h3>{item}</h3>
              <p style={{ color: "#9ca3af", fontSize: "13px" }}>
                Safe, fast, and affordable service.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{
        background: "#0f172a",
        padding: "70px 20px",
        textAlign: "center"
      }}>
        <h2>Why Customers Choose Us</h2>
        <p style={{ maxWidth: "700px", margin: "auto", color: "#cbd5e1" }}>
          We provide reliable moving services across Metro Atlanta with a focus on speed, care, and affordability.
          Our goal is to make your move stress-free from start to finish.
        </p>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: "70px 20px", textAlign: "center" }}>
        <h2>Customer Reviews</h2>

        <div style={{ maxWidth: "700px", margin: "auto", marginTop: "20px", color: "#cbd5e1" }}>
          <p>⭐ “Very professional and fast service.”</p>
          <p>⭐ “Affordable and handled my furniture with care.”</p>
          <p>⭐ “Best movers I’ve used in Atlanta.”</p>
        </div>
      </section>

      {/* QUOTE */}
      <section id="quote" style={{ padding: "70px 20px", textAlign: "center" }}>
        <h2>Request a Free Quote</h2>

        <div style={{
          background: "#111827",
          maxWidth: "400px",
          margin: "auto",
          padding: "20px",
          borderRadius: "12px"
        }}>
          <p>📞 470-830-2573</p>
          <p>📧 GoodsonGlobalServ@gmail.com</p>
          <p style={{ color: "#9ca3af", fontSize: "13px" }}>
            Call or text for fastest response
          </p>
        </div>
      </section>

      {/* SEO TEXT */}
      <div style={{
        maxWidth: "800px",
        margin: "auto",
        padding: "30px 20px",
        fontSize: "12px",
        color: "#94a3b8"
      }}>
        Atlanta moving company offering residential, commercial, and long-distance moving services across Metro Atlanta.
        Reliable movers focused on safety, affordability, and customer satisfaction.
      </div>

      {/* FOOTER */}
      <footer style={{
        textAlign: "center",
        padding: "20px",
        background: "#020617",
        color: "#94a3b8",
        fontSize: "13px"
      }}>
        © {new Date().getFullYear()} Goodson Global Services
      </footer>

    </div>
  );
}
