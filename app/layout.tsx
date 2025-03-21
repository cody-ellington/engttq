import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { Navbar1 } from "@/components/section/header";
import { Footer2 } from "@/components/section/footer";

const inter = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tan Thanh Quang English Center",
  description: "Master English with Confidence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* HEADER SECTION */}
        <section id="header-section" className="bg-white sticky top-0 z-50">
          <Navbar1></Navbar1>
        </section>

        {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div> */}
        {/* BODY PART */}
        {children}

        {/* FOOTER SECTION */}
        <section id="footer-section" className="main-section">
          <Footer2></Footer2>
        </section>
      </body>
    </html>
  );
}
