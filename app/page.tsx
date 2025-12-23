import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <span className="badge">Principal Consulting • Cloud-Native Platforms</span>
        <h1>Enterprise Billing, Cloud Platform & DevOps Consulting</h1>
        <p>
          Coastonia Technology Services delivers <strong>enterprise-grade billing platforms</strong>, cloud-native architectures,
          and DevOps leadership for mission-critical systems. Led by a small group of consultant with 20+ years of experience across
          telecommunications, enterprise billing, and cloud platforms.
        </p>
        <p>
          From <strong>Oracle BRM</strong> to <strong>AWS-hosted microservices</strong>, Coastonia helps clients design, operate,
          modernize, and scale platforms that must be reliable, secure, and cost-efficient.
        </p>

        <div className="kv">
          <span className="badge">Oracle BRM (v6.2–7.5)</span>
          <span className="badge">AWS (EC2 • S3 • RDS)</span>
          <span className="badge">Kubernetes (kubectl)</span>
          <span className="badge">GitLab CI/CD</span>
          <span className="badge">PostgreSQL (RDS)</span>
          <span className="badge">Vault • Redis</span>
        </div>

        <div className="ctaRow">
          <Link className="button" href="/contact">Contact</Link>
          <Link className="button" href="/services">View Services</Link>
          <Link className="button" href="/resources">Resources</Link>
        </div>
      </section>

      <section className="section">
        <h2>What Coastonia Technology Services Delivers</h2>
        <div className="grid cols-3">
          <div className="card">
            <h3>Enterprise Billing & Oracle BRM</h3>
            <p>Oracle BRM consulting, modernization, upgrades/migrations, and end-to-end billing enablement.</p>
          </div>
          <div className="card">
            <h3>Cloud Platforms (AWS)</h3>
            <p>AWS-hosted microservices operations, Kubernetes delivery, RDS/PostgreSQL ownership, and platform reliability.</p>
          </div>
          <div className="card">
            <h3>DevOps & Release Governance</h3>
            <p>CI/CD design and governance, release management, environment strategy, and operational excellence.</p>
          </div>
        </div>
      </section>

      {/* Clients anchor target */}
      <section id="clients" className="section anchorTarget">
        <h2>Selected Clients & Engagements</h2>
        <p>
          Coastonia Technology Services works with organizations operating enterprise-scale, cloud-native platforms, providing
          hands-on architectural and operational leadership.
        </p>

        <div className="grid cols-2">
          <div className="card">
            <h3>Congero Technology Group</h3>
            <p>
              Principal consulting engagement providing platform architecture, DevOps leadership, and release governance for
              cloud-based billing systems.
            </p>
          </div>
          <div className="card">
            <h3>Embrix</h3>
            <p>
              Architectural and operational support for a cloud-native, microservices-based billing platform hosted on AWS.
            </p>
          </div>
        </div>

        <p style={{marginTop: "12px"}}>
          <em>Additional client references and engagement details are available upon request.</em>
        </p>
      </section>

      <section className="section">
        <h2>How Coastonia Engages</h2>
        <ul className="list">
          <li><strong>Principal ownership</strong> of architecture, delivery, and operational outcomes.</li>
          <li><strong>Hands-on execution</strong> alongside engineering teams and stakeholders.</li>
          <li><strong>Client-safe communication</strong> with optional deeper references available privately.</li>
        </ul>
      </section>
    </>
  );
}
