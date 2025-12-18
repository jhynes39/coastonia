import { notFound } from "next/navigation";
import Link from "next/link";

type Post = {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  content: string[];
};

const POSTS: Post[] = [
  {
    title: "Release Management for Microservices: A Practical GitLab CI/CD Approach",
    slug: "release-management-microservices-gitlab",
    date: "2025-12-18",
    tags: ["GitLab CI/CD", "Microservices", "Release Management"],
    content: [
      "In microservices environments, release success is primarily a governance problem: clear promotion stages, consistent artifacts, predictable rollbacks, and disciplined change control.",
      "A practical baseline: treat CI as a contract, ensure artifact immutability, promote the same build across environments, and keep deployments repeatable.",
      "Checklist: (1) version everything, (2) lock dependencies, (3) add smoke checks, (4) promote via environment stages, (5) capture release notes, (6) keep rollback paths tested.",
      "If you want a client-ready release governance template, reach out and Coastonia can provide a short, reusable playbook.",
    ],
  },
  {
    title: "AWS RDS PostgreSQL: Operational Ownership Checklist",
    slug: "aws-rds-postgresql-ops-checklist",
    date: "2025-12-18",
    tags: ["AWS", "RDS", "PostgreSQL"],
    content: [
      "Owning PostgreSQL on RDS means more than connectivity: you’re responsible for availability, performance, safe schema evolution, and predictable maintenance.",
      "Operational checklist: monitoring and alerting, backups and restore validation, maintenance windows, connection management, query performance, schema change discipline, and access control.",
      "Patterns: use migrations, keep privilege separation, validate restores periodically, and align changes to release governance.",
      "If you need a tailored checklist aligned to your platform, Coastonia can provide a lightweight assessment and roadmap.",
    ],
  },
];

export default function ResourcePost({ params }: { params: { slug: string } }) {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <section className="section">
      <Link className="button" href="/resources">← Back to Resources</Link>
      <h1 style={{marginTop: 14}}>{post.title}</h1>
      <small>{post.date} • {post.tags.join(" · ")}</small>
      <div style={{marginTop: 16}}>
        {post.content.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
      <div className="ctaRow" style={{marginTop: 18}}>
        <Link className="button" href="/contact">Talk to Coastonia</Link>
        <Link className="button" href="/services">Services</Link>
      </div>
    </section>
  );
}
