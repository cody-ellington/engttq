"use client"
import { AuroraText } from "@/components/magicui/aurora-text";
import { Logos8 } from "@/components/section/brands";
import { Cta11 } from "@/components/section/cta";
import { Feature166 } from "@/components/section/feature";
import { Hero3 } from "@/components/section/hero";
import { Feature13 } from "@/components/section/info";
import { Pricing2 } from "@/components/section/pricing";
import { Stats8 } from "@/components/section/stats";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* HERO BANNER */}
      <section id="hero-section" className="main-section">
        <Hero3></Hero3>
      </section>

      {/* STATS SECTION */}
      <section id="stats-section" className="main-section">
        <Stats8></Stats8>
      </section>

      {/* FEATURE SECTION */}
      <section id="feature-section" className="main-section">
        <Feature166
          heading={"Why Choose Us?"}
          feature1={undefined}
          feature2={undefined}
          feature3={undefined}
          feature4={undefined}
        ></Feature166>
      </section>

      {/* BRANDS SECTION */}
      <section id="brands-section" className="main-section" data-aos="fade-up">
        <Logos8></Logos8>
      </section>

      {/* INFORMATION SECTION */}
      <section id="info-section" className="main-section">
        <Feature13></Feature13>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing-section" className="main-section" data-aos="fade-up">
        <Pricing2></Pricing2>
      </section>

      {/* CTA SECTION */}
      <section id="cta-section" className="main-section" data-aos="fade-up">
        <Cta11 heading={"Ready to get started?"} description={"Join thousands of satisfied customers using our platform to build amazing websites."}></Cta11>
      </section>
    </>
  );
}
