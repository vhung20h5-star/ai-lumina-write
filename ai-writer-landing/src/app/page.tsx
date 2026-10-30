"use client";

import React from "react";
import { AppNavbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { AboutSection } from "@/components/AboutSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300 selection:bg-primary/20 selection:text-primary">
      {/* 1. Thanh điều hướng trên cùng */}
      <AppNavbar />

      <main className="flex-grow">
        {/* 2. Khu vực首屏 (Hero) */}
        <Hero />

        {/* 3. Triển khai tính năng (3 cột thẻ) */}
        <Features />

        {/* 4. Khu vực bảng giá (3 thẻ, bản chuyên nghiệp nổi bật) */}
        <Pricing />

        {/* Về chúng tôi & Cảm nhận khách hàng */}
        <AboutSection />

        {/* 5. Khu vực kêu gọi hành động dưới cùng */}
        <CtaSection />
      </main>

      {/* 6. Chân trang (Bản quyền & Mạng xã hội) */}
      <Footer />
    </div>
  );
}
