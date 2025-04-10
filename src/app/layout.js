import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Headers from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Expenses",
  description: "Track daily uses expenses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Headers />
          {children}
        <Footer />
      </body>
    </html>
  );
}
