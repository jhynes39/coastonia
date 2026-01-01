import Link from "next/link";

export default function HeaderBand() {
  return (
    <section className="headerBand" aria-label="Call to action">
      <div className="container headerBandInner">
        <h2 className="headerBandTitle">
          Ready to improve your platform delivery and reliability?
        </h2>

        <Link className="headerBandButton" href="/contact">
          Contact Coastonia <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="headerBandDivider" />
    </section>
  );
}
