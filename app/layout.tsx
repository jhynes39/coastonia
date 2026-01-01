import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
/* import HeaderBand from "./components/HeaderBand";    */

export const metadata = {
  title: "Coastonia Technology Services",
  description: "Enterprise Billing, Cloud Platform & DevOps Consulting",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
/*        <HeaderBand />   */
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
