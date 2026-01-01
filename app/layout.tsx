import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});


/* import HeaderBand from "./components/HeaderBand";    */

export const metadata = {
  title: "Coastonia Technology Services",
  description: "Enterprise Billing, Cloud Platform & DevOps Consulting",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={nunito.variable}>
      <body>
        <Nav />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
