"use client";

import React, { useState } from "react";
import { Button, Input, Chip } from "@heroui/react";
import { Sparkles, ArrowRight, CheckCircle, Mail } from "lucide-react";

export function CtaSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 4000);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-primary/30 via-purple-600/25 to-pink-500/20 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-primary/30 bg-gradient-to-b from-content1/90 to-content1/50 backdrop-blur-2xl p-8 sm:p-14 lg:p-16 text-center shadow-2xl shadow-primary/10 overflow-hidden">
          {/* Decorative background grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

          {/* Badge */}
          <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100/60 dark:bg-primary-950/80 border border-primary-300 dark:border-primary-700 text-primary-700 dark:text-primary-300 text-xs sm:text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Đồng hành cùng hơn 100.000+ cây viết xuất sắc</span>
          </div>

          {/* Headline */}
          <h2 className="relative z-10 text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground max-w-3xl mx-auto leading-tight mb-6">
            Sẵn sàng cách mạng hóa{" "}
            <span className="text-gradient">trải nghiệm viết</span> của bạn ngay hôm nay?
          </h2>

          {/* Subtitle */}
          <p className="relative z-10 text-default-600 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Đừng để trang giấy trắng kìm hãm dòng chảy ý tưởng của bạn. Khám phá sức mạnh của trợ lý AI và biến mọi suy nghĩ thành bài viết cuốn hút trong chớp mắt.
          </p>

          {/* Interactive Sign-up Form */}
          <div className="relative z-10 max-w-md mx-auto mb-8">
            {isSubmitted ? (
              <div className="p-4 rounded-xl bg-success-50 dark:bg-success-950/40 border border-success-300 text-success-800 dark:text-success-200 text-sm font-medium flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>Chúc mừng bạn! Tài khoản dùng thử miễn phí đã sẵn sàng.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Nhập email của bạn..."
                  value={email}
                  onValueChange={setEmail}
                  required
                  size="lg"
                  variant="bordered"
                  className="w-full text-foreground"
                  startContent={<Mail className="w-4 h-4 text-default-400" />}
                />
                <Button
                  type="submit"
                  color="primary"
                  size="lg"
                  className="font-bold px-8 shadow-lg shadow-primary/30 bg-gradient-to-r from-primary to-purple-600 hover:from-primary-600 hover:to-purple-700 text-white flex-shrink-0"
                  endContent={<ArrowRight className="w-4 h-4" />}
                >
                  Đăng ký ngay
                </Button>
              </form>
            )}
          </div>

          {/* Trust Guarantees */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-default-500 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-success" />
              Dùng thử miễn phí 14 ngày
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-success" />
              Không yêu cầu thẻ tín dụng
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-success" />
              Hủy đăng ký bất kỳ lúc nào
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

