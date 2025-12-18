import Link from "next/link";

export default function ServicesPage() {
  return (
    <section className="section">
      <h1>Services</h1>
      <p>
        Coastonia Technology Services provides hands-on principal consulting across enterprise billing, cloud platforms,
        DevOps delivery, and security.
      </p>

      <div className="grid cols-2">
        <div className="card">
          <h2>Enterprise Billing & Oracle BRM Consulting</h2>
          <ul className="list">
            <li>Oracle BRM implementations, upgrades, and migrations</li>
            <li>Custom opcodes, PCM/PIN, MTA, FM/DM development</li>
            <li>Product catalog, rating, billing, taxation, payments</li>
            <li>System consolidation and billing modernization</li>
            <li>Billing-to-ERP / GL integration</li>
          </ul>
        </div>

        <div className="card">
          <h2>Platform Architecture & DevOps Leadership</h2>
          <ul className="list">
            <li>Platform and operational architecture ownership</li>
            <li>CI/CD design and governance (GitLab)</li>
            <li>Release management and environment strategy</li>
            <li>Operational stability and performance improvements</li>
            <li>Cost-aware platform optimization</li>
          </ul>
        </div>

        <div className="card">
          <h2>Enterprise Application Engineering</h2>
          <ul className="list">
            <li>Spring Boot / JEE enterprise applications</li>
            <li>API-first architectures (REST, GraphQL, SOAP)</li>
            <li>PostgreSQL-backed systems and data access patterns</li>
            <li>React platform enablement</li>
            <li>Integration with external systems</li>
          </ul>
        </div>

        <div className="card">
          <h2>Application Security & Secure Architecture</h2>
          <ul className="list">
            <li>OWASP Top 10 remediation leadership</li>
            <li>Secure-by-design architecture</li>
            <li>Vulnerability remediation programs</li>
            <li>Platform hardening and secure delivery</li>
          </ul>
        </div>

        <div className="card">
          <h2>Training & Enablement</h2>
          <ul className="list">
            <li>Oracle BRM enterprise training</li>
            <li>Platform onboarding and knowledge transfer</li>
            <li>Developer mentoring and technical leadership</li>
          </ul>
        </div>
      </div>

      <div className="ctaRow">
        <Link className="button" href="/contact">Discuss an Engagement</Link>
        <Link className="button" href="/cloud">Cloud Capabilities</Link>
      </div>
    </section>
  );
}
