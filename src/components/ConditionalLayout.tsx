"use client"
import Navbar from "./Navbar";
import Footer from "./footer";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

