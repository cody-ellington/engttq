"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ContactInfo } from "@/components/section/contactInfo";
import { Hero1 } from "@/components/section/about";
import { Feature17 } from "@/components/section/core";
import { Stats8 } from "@/components/section/stats";
import { BlurFadeDemo } from "@/components/section/gallery";
import { Cta11 } from "@/components/section/cta";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* INFORMATION SECTION */}
      <section id="hero-section" className="main-section py-8">
        <Hero1
          heading={"Nâng Tầm Tiếng Anh Cùng Chúng Tôi"}
          description={
            "Chúng tôi cung cấp môi trường học tập hiện đại với phương pháp giảng dạy sáng tạo, giúp học viên tự tin sử dụng tiếng Anh trong học tập, công việc và cuộc sống."
          }
          image={{
            src: "img/about.jpg",
            alt: "Tan thanh quang",
          }}
        ></Hero1>
      </section>

      {/* STATS SECTION */}
      <section id="stats-section" className="main-section">
        <Stats8></Stats8>
      </section>

      {/* CORE SECTION */}
      <section id="core-section" className="main-section">
        <Feature17></Feature17>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery-section inner-section">
          <BlurFadeDemo></BlurFadeDemo>
      </section>

      {/* CTA SECTION */}
      <section id="cta-section" className="main-section" data-aos="fade-up">
        <Cta11 heading={"Sẵn sàng tham gia?"} description={"Cùng them gia với chúng tôi để nâng cấp kỹ năng của bạn"}></Cta11>
      </section>
    </>
  );
}
