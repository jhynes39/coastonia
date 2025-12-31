import Link from "next/link";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footerWrap">
      <div className="footerCTA">
        <div className="container">
          <div className="footerCTAInner">
            <div className="footerCTAText">
              <h2>Ready to discuss a consulting engagement?</h2>
              <p>
                Cloud platforms, DevOps delivery, and enterprise billing expertise — delivered with principal ownership.
              </p>
            </div>
            <div className="footerCTAButton">
              <Link className="buttonPrimary" href="/contact">
                Contact Coastonia
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footerMain">
        <div className="container">
          <div className="footerGrid">
            {/* Brand / Left block */}
            <div className="footerBrand">
              <div className="footerLogoMark">CTS</div>
              <div>
                <div className="footerBrandName">Coastonia Technology Services</div>
                <div className="footerBrandTag">Enterprise Billing • Cloud Platforms • DevOps</div>
              </div>

              <div className="footerBrandBody">
                Consulting focused on AWS-hosted microservices platforms, DevOps governance,
                and Oracle BRM expertise — delivered with hands-on technical ownership.
              </div>

              <div className="footerContact">
                <div>
                  <span>Email:</span>{" "}
                  <a href="mailto:jhynes@coastonia.com">jhynes@coastonia.com</a>
                </div>
                <div>
                  <span>Phone:</span>{" "}
                  <a href="tel:+17826405669">782-640-566</a>
                </div>
                <div>
                  <span>Location:</span> Halifax, Canada
                </div>
              </div>
            </div>

            {/* Link columns */}
            <div className="footerCol">
              <div className="footerColTitle">Platform</div>
              <Link href="/services">Services</Link>
              <Link href="/cloud">Cloud</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/current-engagement">Current Engagement</Link>
            </div>

            <div className="footerCol">
              <div className="footerColTitle">Solutions</div>
              <Link href="/services">Oracle BRM Consulting</Link>
              <Link href="/services">DevOps & CI/CD</Link>
              <Link href="/services">Platform Architecture</Link>
              <Link href="/services">Application Security</Link>
            </div>

            <div className="footerCol">
              <div className="footerColTitle">Company</div>
              <Link href="/#clients">Clients</Link>
              <Link href="/resources">Blog</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <div className="footerCol">
              <div className="footerColTitle">Legal</div>
              {/* These can become real pages later */}
              <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Terms of Use</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Security</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <div className="container footerBottomInner">
          <div>© {year} Coastonia Technology Services. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
