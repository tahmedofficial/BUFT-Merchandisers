import Banner from "@/components/Banner/Banner";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] })

export const metadata = {
  title: "BUFT Merchandising Club",
  description: "Discover the BUFT Merchandising Club, fostering creativity and innovation in fashion and merchandising. Join a dynamic community of students exploring trends, building industry skills, and shaping future leaders in the apparel and textile industry. Learn, network, and grow with us!"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} font-medium text-textColor bg-background`}>
        <header>
          <Banner></Banner>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
