import Link from "next/link";

export default function CloudPage() {
  return (
    <section className="section">
      <h1>Cloud</h1>
      <p>
        Coastonia Technology Services delivers cloud-native consulting for enterprise platforms operating on AWS, with a focus on
        production stability, delivery velocity, and cost efficiency.
      </p>
      <p>
        Includes operational ownership of <strong>PostgreSQL on AWS RDS</strong>, Kubernetes-based microservices operations, and
        CI/CD governance.
      </p>

      <div className="grid cols-2">
        <div className="card">
          <h2>Cloud Capabilities</h2>
          <ul className="list">
            <li>AWS-hosted microservices platforms</li>
            <li>Kubernetes-based deployment and operations</li>
            <li>CI/CD pipelines for microservices delivery</li>
            <li>Secure secrets and configuration management</li>
            <li>Platform monitoring, stability, and optimization</li>
          </ul>
        </div>

        <div className="card">
          <h2>Data & Platform Operations</h2>
          <ul className="list">
            <li>PostgreSQL (AWS RDS) operational ownership and support</li>
            <li>Redis caching for performance and scalability</li>
            <li>Vault-based secrets management patterns</li>
            <li>Release governance and environment strategy</li>
          </ul>
        </div>

        <div className="card">
          <h2>Technology Experience</h2>
          <p>
            AWS (EC2, RDS, S3), Kubernetes (kubectl), PostgreSQL, Redis, Vault, GitLab CI/CD, Spring Boot microservices,
            REST/GraphQL/SOAP APIs.
          </p>
        </div>
      </div>

      <div className="ctaRow">
        <Link className="button" href="/current-engagement">See Current Engagement</Link>
        <Link className="button" href="/contact">Contact</Link>
      </div>
    </section>
  );
}
