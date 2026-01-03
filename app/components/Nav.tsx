"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
    <div className="headerInner">
        {/* Logo */}
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
            <Image
              src="/images/coastonia-logo.png"
              alt="Coastonia Technology Services"
	       width={520}
        	height={290}
		className="brandLogoImg"
              priority
            />
        </Link>

        {/* Desktop nav */}
        <nav className="navLinks">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/careers">Careers</Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="menuToggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
</div>

      {/* Mobile menu */}
      {open && (
        <nav className="mobileNav">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/resources" onClick={() => setOpen(false)}>Resources</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/careers" onClick={() => setOpen(false)}>Careers</Link>
        </nav>
      )}
    </header>
  );
}
