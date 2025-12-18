import Link from "next/link";

type Post = {
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  date: string;
};

const posts: Post[] = [
  {
    title: "Release Management for Microservices: A Practical GitLab CI/CD Approach",
    slug: "release-management-microservices-gitlab",
    summary: "A practical approach to governing releases across microservices using GitLab pipelines, promotion stages, and rollback discipline.",
    tags: ["GitLab CI/CD", "Microservices", "Release Management"],
    date: "2025-12-18",
  },
  {
    title: "AWS RDS PostgreSQL: Operational Ownership Checklist",
    slug: "aws-rds-postgresql-ops-checklist",
    summary: "A field-tested checklist for owning PostgreSQL on RDS in production: monitoring, schema support, maintenance patterns, and risk controls.",
    tags: ["AWS", "RDS", "PostgreSQL"],
    date: "2025-12-18",
  },
];

export default function ResourcesPage() {
  return (
    <section className="section">
      <h1>Resources</h1>
      <p>
        Practical notes on enterprise billing platforms, AWS-hosted microservices, DevOps delivery, and secure operations.
        Articles are written to be client-safe while remaining technically useful.
      </p>

      <div className="grid cols-2">
        {posts.map((p) => (
          <div key={p.slug} className="card">
            <h2 style={{marginBottom: 6}}>{p.title}</h2>
            <small>{p.date} • {p.tags.join(" · ")}</small>
            <p style={{marginTop: 10}}>{p.summary}</p>
            <div className="ctaRow">
              <Link className="button" href={`/resources/${p.slug}`}>Read</Link>
            </div>
          </div>
        ))}
      </div>

      <p style={{marginTop: 16}}>
        Looking for something specific? Email <a href="mailto:jhynes@coastonia.com">jhynes@coastonia.com</a>.
      </p>
    </section>
  );
}
