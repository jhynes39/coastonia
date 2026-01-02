"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // close menu when navigating (including hash navigation)
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="nav">
      <div className="container">
        <div className="navInner">







<Link href="/" className="brand" onClick={() => setOpen(false)}>
<div className="brandLogo">
  <Image
    src="/images/coastonia-logo.png"
    alt="Coastonia Technology Services"
    fill
    priority
    style={{ objectFit: "contain" }}
  />
</div>

  <div className="brandText">
    <strong>Coastonia Technology Services</strong>
    <span>Enterprise Billing • Cloud Platforms • DevOps</span>
  </div>
</Link>






          {/* Desktop */}
<nav className="navLinks navLinksDesktop">
  <Link href="/">Home</Link>
  <Link href="/services">Services</Link>
  <Link href="/about">About</Link>
  <Link href="/current-engagement">Engagement</Link>
  <Link href="/#clients">Clients</Link>
  <Link href="/resources">Resources</Link>
  <Link className="navCTA" href="/contact">Contact</Link>
</nav>
          {/* Mobile toggle */}
          <button
            className="navToggle navLinksMobile"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="navBurger" />
            <span className="navBurger" />
            <span className="navBurger" />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="mobileMenu" aria-label="Mobile">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/current-engagement" onClick={() => setOpen(false)}>Current Engagement</Link>
            <Link href="/#clients" onClick={() => setOpen(false)}>Clients</Link>
            <Link href="/resources" onClick={() => setOpen(false)}>Resources</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
