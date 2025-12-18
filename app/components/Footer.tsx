export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{display:"flex", justifyContent:"space-between", gap: "16px", flexWrap:"wrap"}}>
          <div>
            <strong style={{color:"rgba(232,238,252,0.92)"}}>Coastonia Technology Services</strong><br/>
            Halifax, Canada
          </div>
          <div>
            <div><span style={{opacity:0.85}}>Email:</span> <a href="mailto:jhynes@coastonia.com">jhynes@coastonia.com</a></div>
            <div><span style={{opacity:0.85}}>Phone:</span> <a href="tel:+17826405669">782-640-5669</a></div>
          </div>
        </div>
        <div style={{marginTop:"12px", opacity:0.8}}>
          © {new Date().getFullYear()} Coastonia Technology Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
