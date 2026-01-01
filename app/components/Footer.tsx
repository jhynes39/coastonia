import Link from "next/link";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="ctsFooter">
      {/* CTA band */}
      <section className="ctsFooterCta" aria-label="Footer call to action">
        <div className="container ctsFooterCtaInner">
          <div>
            <h2 className="ctsFooterCtaTitle">Ready to discuss a consulting engagement?</h2>
            <p className="ctsFooterCtaSub">
              Cloud platforms, DevOps delivery, and enterprise billing expertise — delivered with principal ownership.
            </p>
          </div>

          <Link className="ctsFooterCtaButton" href="/contact">
            Contact Coastonia <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* Main footer */}
      <section className="ctsFooterMain">
        <div className="container ctsFooterGrid">
          {/* Brand */}
          <div className="ctsFooterBrand">
            <div className="ctsFooterMark">CTS</div>
            <div className="ctsFooterBrandName">Coastonia Technology Services</div>
            <div className="ctsFooterBrandTag">Enterprise Billing • Cloud Platforms • DevOps</div>

            <p className="ctsFooterBrandBody">
              Consulting focused on AWS-hosted microservices platforms, DevOps governance, and Oracle BRM expertise —
              delivered with hands-on technical ownership.
            </p>

            <div className="ctsFooterContact">
              <div><strong>Email:</strong> <a href="mailto:jhynes@coastonia.com">jhynes@coastonia.com</a></div>
              <div><strong>Phone:</strong> <a href="tel:+17826405669">782-640-5669</a></div>
              <div><strong>Location:</strong> Halifax, Canada</div>
            </div>
          </div>

          {/* Columns */}
          <nav className="ctsFooterCol" aria-label="Platform">
            <div className="ctsFooterColTitle">Platform</div>
            <Link href="/services">Services</Link>
            <Link href="/cloud">Cloud</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/current-engagement">Current Engagement</Link>
          </nav>

          <nav className="ctsFooterCol" aria-label="Solutions">
            <div className="ctsFooterColTitle">Solutions</div>
            <Link href="/services">Oracle BRM Consulting</Link>
            <Link href="/services">DevOps & CI/CD</Link>
            <Link href="/services">Platform Architecture</Link>
            <Link href="/services">Application Security</Link>
          </nav>

          <nav className="ctsFooterCol" aria-label="Company">
            <div className="ctsFooterColTitle">Company</div>
            <Link href="/#clients">Clients</Link>
            <Link href="/resources">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <nav className="ctsFooterCol" aria-label="Legal">
            <div className="ctsFooterColTitle">Legal</div>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/security">Security</Link>
          </nav>
        </div>
      </section>

      {/* Bottom bar */}
      <section className="ctsFooterBottom">
        <div className="container ctsFooterBottomInner">
          © {year} Coastonia Technology Services. All rights reserved.
        </div>
      </section>
    </footer>
  );
}
