import Link from "next/link";

export default function Nav() {
  return (
    <header className="nav">
      <div className="container">
        <div className="navInner">
          <Link href="/" className="brand" aria-label="Coastonia Technology Services">
            <strong>Coastonia Technology Services</strong>
            <span>Enterprise Billing • Cloud Platforms • DevOps</span>
          </Link>

          <nav className="navLinks" aria-label="Primary">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/cloud">Cloud</Link>
            <Link href="/current-engagement">Current Engagement</Link>
            {/* Clients anchor wired to Home */}
            <Link href="/#clients">Clients</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
