export default function Home() {
  return (
    <div style={{ margin: 0, fontFamily: "Arial", background: "#0b1220", color: "white" }}>

      {/* HERO */}
      <div style={{
        padding: "90px 20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #0f172a, #111827, #0b1220)"
      }}>
        <h1 style={{ fontSize: "46px", marginBottom: "10px" }}>
          Goodson Global Services
        </h1>

        <p style={{ color: "#cbd5e1", fontSize: "18px" }}>
          Professional Moving Services Across Metro Atlanta
        </p>

        <a href="#contact" style={{
          display: "inline-block",
          marginTop: "20px",
          background: "#2563eb",
          color: "white",
          padding: "12px 20px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold"
        }}>
          Get Free Quote
        </a>
      </div>

      {/* SERVICES */}
      <div style={{ padding: "60px 20px", maxWidth: "1000px", margin: "auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Our Services
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "15px"
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
              borderRadius: "12px",
              border: "1px solid #1f2937"
            }}>
              <h3>{item}</h3>
              <p style={{ color: "#9ca3af", fontSize: "13px" }}>
                Fast, safe, and affordable moving services.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* WHY US */}
      <div style={{
        background: "#0f172a",
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <h2>Why Choose Us</h2>
        <p style={{ color: "#cbd5e1", maxWidth: "600px", margin: "auto" }}>
          We provide reliable, affordable, and professional moving services across Metro Atlanta.
          Our goal is to make your move stress-free and efficient.
        </p>
      </div>

      {/* CONTACT */}
      <div id="contact" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Contact Us</h2>

        <div style={{
          background: "#111827",
          display: "inline-block",
          padding: "20px",
          borderRadius: "12px",
          marginTop: "15px"
        }}>
          <p>📞 470-830-2573</p>
          <p>📧 GoodsonGlobalServ@gmail.com</p>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{
        textAlign: "center",
        padding: "20px",
        background: "#020617",
        color: "#94a3b8",
        fontSize: "13px"
      }}>
        © {new Date().getFullYear()} Goodson Global Services
      </div>

    </div>
  );
}
