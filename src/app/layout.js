import Banner from "@/components/Banner/Banner";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] })

export const metadata = {
  title: "BUFT-Merchandisers",
  description: "We specialize in manufacturing premium textiles and apparel for global markets. With a focus on sustainability, innovation, and precision, we deliver exceptional fabrics tailored to meet the needs of fashion brands worldwide. Partner with us for reliable, high-quality textile solutions crafted to elevate your business"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} font-medium text-textColor bg-background`}>
        <header>
          <Banner></Banner>
        </header>
        <main className="md:w-5/6 mx-auto p-3 md:p-0">
          {children}
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
