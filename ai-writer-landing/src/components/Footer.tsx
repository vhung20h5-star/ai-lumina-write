"use client";

import React from "react";
import { Link, Divider } from "@heroui/react";
import { PenTool, Heart, Globe, Mail, MessageCircle, Send } from "lucide-react";

export function Footer() {
  const footerLinks = {
    features: [
      { name: "Tiếp tục viết thông minh", href: "#features" },
      { name: "Điều chỉnh phong cách", href: "#features" },
      { name: "Dịch đa ngôn ngữ", href: "#features" },
      { name: "Kiểm tra ngữ pháp & chính tả", href: "#features" },
      { name: "Tự động tạo dàn ý bài viết", href: "#features" },
    ],
    pricing: [
      { name: "Gói Miễn phí cá nhân", href: "#pricing" },
      { name: "Gói Chuyên nghiệp Pro", href: "#pricing" },
      { name: "Gói Nhóm doanh nghiệp", href: "#pricing" },
      { name: "Chính sách hoàn tiền 100%", href: "#pricing" },
    ],
    company: [
      { name: "Về chúng tôi", href: "#about" },
      { name: "Câu chuyện thương hiệu", href: "#about" },
      { name: "Góc nhìn chuyên gia & Blog", href: "#" },
      { name: "Cơ hội nghề nghiệp", href: "#" },
    ],
    legal: [
      { name: "Điều khoản dịch vụ", href: "#" },
      { name: "Chính sách quyền riêng tư", href: "#" },
      { name: "Bảo mật & Quyền sở hữu trí tuệ", href: "#" },
      { name: "Cam kết không lưu trữ dữ liệu đào tạo", href: "#" },
    ],
  };

  // SVGs for social platforms
  const socialPlatforms = [
    {
      name: "X (Twitter)",
      href: "https://x.com",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76m1.37 9.74v-8.37H5.09v8.37h2.74z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="border-t border-divider bg-content1/50 backdrop-blur-md pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="#" className="flex items-center gap-2.5 text-foreground">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-primary via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-md shadow-primary/20">
                <PenTool className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-xl tracking-tight">
                Lumina <span className="text-gradient">Write</span>
              </span>
            </Link>
            <p className="text-default-500 text-sm leading-relaxed max-w-sm">
              Trợ lý viết AI hàng đầu được xây dựng để nâng cánh cho cảm hứng và năng lực biểu đạt ngôn từ của bạn. Sáng tạo nhanh hơn, mượt mà hơn và đầy lôi cuốn.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialPlatforms.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-lg bg-default-100 hover:bg-primary-50 dark:hover:bg-primary-950/60 hover:text-primary text-default-600 flex items-center justify-center transition-all duration-200 border border-divider hover:border-primary/40"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Links Column 1: Tính năng */}
          <div>
            <h4 className="font-bold text-sm text-foreground mb-4">Tính năng</h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.features.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    color="foreground"
                    className="hover:text-primary transition-colors text-xs sm:text-sm text-default-500 hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2: Bảng giá */}
          <div>
            <h4 className="font-bold text-sm text-foreground mb-4">Bảng giá</h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.pricing.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    color="foreground"
                    className="hover:text-primary transition-colors text-xs sm:text-sm text-default-500 hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3: Về chúng tôi */}
          <div>
            <h4 className="font-bold text-sm text-foreground mb-4">Về chúng tôi</h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    color="foreground"
                    className="hover:text-primary transition-colors text-xs sm:text-sm text-default-500 hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 4: Pháp lý */}
          <div>
            <h4 className="font-bold text-sm text-foreground mb-4">Pháp lý</h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    color="foreground"
                    className="hover:text-primary transition-colors text-xs sm:text-sm text-default-500 hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Divider className="my-8" />

        {/* Bottom Bar: Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-default-500">
          <div>
            © 2026 Lumina Write AI. Mọi quyền được bảo lưu.
          </div>
          <div className="flex items-center gap-1">
            <span>Được phát triển với</span>
            <Heart className="w-3.5 h-3.5 text-danger fill-danger inline" />
            <span>dành riêng cho các cây viết đam mê sáng tạo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
