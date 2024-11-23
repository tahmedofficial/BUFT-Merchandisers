import "./globals.css";
import { Cormorant } from "next/font/google";

const cormorant = Cormorant({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] })

export const metadata = {
  title: "BUFT Merchandising Club",
  description: "Discover the BUFT Merchandising Club, fostering creativity and innovation in fashion and merchandising. Join a dynamic community of students exploring trends, building industry skills, and shaping future leaders in the apparel and textile industry. Learn, network, and grow with us!"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cormorant.className}>
        <header>

        </header>
        <main>
          {children}
        </main>
        <footer>

        </footer>
      </body>
    </html>
  );
}
