import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Signature Slam Academy(SSA)",
  description: "Adopt, Nurture, Deliver",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-screen bg-background text-foreground">
        <div className="min-h-screen flex flex-col mx-auto">
          {/* Navbar */}
          <Navbar />
          {/* Main Content */}
          <main className="flex-1">{children}</main>
          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
