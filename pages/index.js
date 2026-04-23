export default function Home() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const date = e.target.date.value;
    const details = e.target.details.value;

    const message =
      `Name: ${name}%0D%0APhone: ${phone}%0D%0ADate: ${date}%0D%0ADetails: ${details}`;

    window.location.href =
      `mailto:GoodsonGlobalServ@gmail.com?subject=New Moving Lead (Atlanta)&body=${message}`;
  };

  return (
    <div style={{ fontFamily: "Arial", background: "#0b1220", color: "white" }}>

      {/* CALL BUTTON */}
      <a href="tel:4708302573" style={{
        position: "fixed",
        bottom: "18px",
        right: "18px",
        background: "#2563eb",
        padding: "14px 16px",
        borderRadius: "50px",
        color: "white",
        textDecoration: "none",
        fontWeight: "bold",
        zIndex: 999
      }}>
        📞 Call Now
      </a>

      {/* HERO */}
      <section style={{
        padding: "100px 20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #0f172a, #111827)"
      }}>
        <h1>Goodson Global Services</h1>
        <p style={{ color: "#cbd5e1" }}>
          Atlanta Moving Company — Fast • Reliable • Affordable
        </p>

        <a href="#leadform" style={{
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
      <section style={{ padding: "60px 20px", maxWidth: "1000px", margin: "auto" }}>
        <h2 style={{ textAlign: "center" }}>Services</h2>

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
              borderRadius: "12px"
            }}>
              <h3>{item}</h3>
              <p style={{ color: "#9ca3af", fontSize: "13px" }}>
                Professional movers you can trust.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: "70px 20px", textAlign: "center" }}>
        <h2>Customer Reviews</h2>
        <p style={{ color: "#cbd5e1" }}>
          ⭐ Fast, reliable, and professional service<br/>
          ⭐ Affordable and careful movers<br/>
          ⭐ Best moving company in Atlanta
        </p>
      </section>

      {/* LEAD FORM */}
      <section id="leadform" style={{ padding: "70px 20px", textAlign: "center" }}>
        <h2>Get Your Free Quote</h2>

        <form onSubmit={handleSubmit} style={{
          maxWidth: "420px",
          margin: "auto",
          background: "#111827",
          padding: "20px",
          borderRadius: "12px"
        }}>

          <input name="name" placeholder="Name" required
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }} />

          <input name="phone" placeholder="Phone" required
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }} />

          <input name="date" placeholder="Move Date" required
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }} />

          <textarea name="details" placeholder="Move details" required
            style={{ width: "100%", padding: "10px", height: "100px", marginBottom: "10px" }} />

          <button type="submit" style={{
            width: "100%",
            padding: "12px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold"
          }}>
            Submit Quote
          </button>

        </form>
      </section>

      {/* SEO */}
      <div style={{
        maxWidth: "800px",
        margin: "auto",
        padding: "30px 20px",
        fontSize: "12px",
        color: "#94a3b8"
      }}>
        Atlanta moving company offering residential, commercial, and long-distance moving services.
        Serving Metro Atlanta with professional and affordable movers.
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
