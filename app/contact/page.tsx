export default function ContactPage() {
  return (
    <section className="section">
      <h1>Contact</h1>
      <p>
        Coastonia Technology Services works with organizations that need senior technical ownership, platform reliability,
        and enterprise billing expertise at scale.
      </p>

      <div className="grid cols-2">
        <div className="card">
          <h2>Contact Details</h2>
          <p><strong>Email:</strong> <a href="mailto:jhynes@coastonia.com">jhynes@coastonia.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+17826405669">782-640-5669</a></p>
          <p><strong>Location:</strong> Halifax, Canada</p>
          <p style={{marginTop: 10}}><em>Initial conversations are exploratory and confidential.</em></p>
        </div>

        <div className="card">
          <h2>What to Include</h2>
          <ul className="list">
            <li>Your organization and role</li>
            <li>The platform problem you’re trying to solve</li>
            <li>Timeline and current constraints</li>
            <li>Preferred engagement style (advisory vs hands-on delivery)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
