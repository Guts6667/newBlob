import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata = {
  title: "BLOB-Agency",
  description:
    "BLOB-Agency is an international digital agency known for its expertise in creative design, website development, product management, and application development. With a proven track record of successful projects and a dedicated team of professionals, we are committed to delivering exceptional digital solutions for businesses. Collaborate with us for innovative and effective digital strategies",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="42x70" href="/favicon.png"/>
          <link rel="icon" type="image/png" sizes="10x17" href="/favicon.png"/>
      </head>
      <body className={inter.className}>
        <Header />
        <>{children}</>
        <Footer />
      </body>
    </html>
  );
}
