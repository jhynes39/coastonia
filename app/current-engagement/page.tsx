import Link from "next/link";

export default function CurrentEngagementPage() {
  return (
    <section className="section">
      <h1>Current Engagement</h1>
      <p>
        Coastonia Technology Services is actively supporting <strong>Congero Technology Group</strong>,
        in the delivery and operation of the <strong>cloud-based billing platform</strong>.
      </p>

      <div className="grid cols-2">
        <div className="card">
          <h2>Engagement Focus</h2>
          <ul className="list">
            <li>Architectural and operational ownership of an AWS-hosted microservices platform</li>
            <li>DevOps leadership and CI/CD governance</li>
            <li>Release management for enhancements and fixes</li>
            <li>Kubernetes-based microservices operations (kubectl)</li>
            <li>PostgreSQL (RDS) platform data ownership</li>
            <li>Engineering team enablement and technical leadership</li>
          </ul>
        </div>

        <div className="card">
          <h2>Integration Context</h2>
          <p>
            The platform integrates with external systems such as tax engines, payment processors, CRM, usage, and provisioning
            via stable API contracts.
          </p>
          <p>
            <em>Additional engagement details are available upon request.</em>
          </p>
        </div>
      </div>

      <div className="ctaRow">
        <Link className="button" href="/#clients">Selected Clients</Link>
        <Link className="button" href="/contact">Contact</Link>
      </div>
    </section>
  );
}
