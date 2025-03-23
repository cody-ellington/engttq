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
import { ContactInfo } from "@/components/section/contactInfo";

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* INFORMATION SECTION */}
      <section id="hero-section" className="main-section py-8 inner-section">
        <span>HIỆN TẠI CHƯA CÓ KHOÁ HỌC PHÙ HỢP, QUAY TRỞ LẠI SAU BẠN NHÉ</span>
      </section>

    </>
  );
}
