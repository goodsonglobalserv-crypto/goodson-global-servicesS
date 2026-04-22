export default function Home() {
  return (
    <div style={{ fontFamily: "Arial", margin: 0, padding: 0, background: "#0b1220", color: "white" }}>

      {/* HERO */}
      <section style={{
        padding: "100px 20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #0f172a, #1e293b, #0b1220)"
      }}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px", fontWeight: "bold" }}>
          Goodson Global Services
        </h1>
        <p style={{ fontSize: "18px", color: "#cbd5e1", marginBottom: "25px" }}>
          Premium Moving & Logistics Services Across Metro Atlanta
        </p>

        <a href="#contact" style={{
          background: "#2563eb",
          padding: "14px 22px",
          borderRadius: "10px",
          color: "white",
          textDecoration: "none",
          fontWeight: "bold"
        }}>
          Get Free Quote
        </a>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "70px 20px", maxWidth: "1100px", margin: "auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "32px", marginBottom: "40px" }}>
          Our Premium Services
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px"
        }}>
          {[
            "Local & Long Distance Moving",
            "Residential Moving",
            "Commercial Relocation",
            "Loading & Unloading Help",
            "Furniture Delivery",
            "Same-Day Emergency Moves"
          ].map((item, i) => (
            <div key={i} style={{
              background: "#111827",
              padding: "25px",
              borderRadius: "14px",
              border: "1px solid #1f2937"
            }}>
              <h3 style={{ marginBottom: "10px" }}>{item}</h3>
              <p style={{ color: "#9ca3af", fontSize: "14px" }}>
                Professional, fast, and reliable service tailored to your needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section style={{
        padding: "70px 20px",
        background: "#0f172a",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Why Choose Us</h2>
        <p style={{ color: "#cbd5e1", maxWidth: "700px", margin: "auto" }}>
          We provide professional, affordable, and trusted moving services across Metro Atlanta.
          Our goal is to make your move stress-free, safe, and efficient.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "70px 20px", maxWidth: "600px", margin: "auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "30px", marginBottom: "25px" }}>
          Request a Quote
        </h2>

        <div style={{
          background: "#111827",
          padding: "25px",
          borderRadius: "14px",
          border: "1px solid #1f2937"
        }}>

          <p style={{ marginBottom: "10px" }}>📞 470-830-2573</p>
          <p style={{ marginBottom: "20px" }}>📧 GoodsonGlobalServ@gmail.com</p>

          <p style={{ color: "#9ca3af" }}>
            Fill out your move details and we will contact you within 24 hours.
          </p>
        </div>
      </section>

      {/* MAP */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "20px" }}>We Serve All Metro Atlanta</h2>
        <iframe
          title="Atlanta Map"
          src="https://www.google.com/maps?q=Atlanta%20GA&output=embed"
          style={{ width: "100%", height: "300px", border: 0, borderRadius: "12px" }}
        />
      </section>

      {/* FOOTER */}
      <footer style={{
        textAlign: "center",
        padding: "25px",
        background: "#020617",
        color: "#94a3b8",
        fontSize: "14px"
      }}>
        © {new Date().getFullYear()} Goodson Global Services. All rights reserved.
      </footer>

    </div>
  );
}

}
