"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Chip,
  Switch
} from "@heroui/react";
import { Check, Sparkles, Zap, Users, ArrowRight } from "lucide-react";

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Chip
            size="md"
            variant="flat"
            color="primary"
            className="mb-4 font-semibold uppercase tracking-wider text-xs"
          >
            Bảng Giá Minh Bạch
          </Chip>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Chọn gói cước phù hợp với{" "}
            <span className="text-gradient">nhu cầu của bạn</span>
          </h2>
          <p className="text-default-600 text-base sm:text-lg leading-relaxed mb-8">
            Bắt đầu hoàn toàn miễn phí, nâng cấp bất cứ lúc nào khi quy mô sáng tạo nội dung của bạn mở rộng.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center gap-4 p-2 rounded-2xl bg-default-100/80 dark:bg-default-100/30 border border-divider">
            <span
              className={`text-sm font-medium cursor-pointer transition-colors ${
                !isAnnual ? "text-foreground font-bold" : "text-default-500"
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Thanh toán hàng tháng
            </span>
            <Switch
              size="sm"
              isSelected={isAnnual}
              onValueChange={setIsAnnual}
              aria-label="Chuyển chu kỳ thanh toán năm/tháng"
              color="primary"
            />
            <span
              className={`text-sm font-medium cursor-pointer transition-colors flex items-center gap-1.5 ${
                isAnnual ? "text-foreground font-bold" : "text-default-500"
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Thanh toán hàng năm
              <Chip size="sm" color="success" variant="flat" className="h-5 text-[10px] font-bold">
                Tiết kiệm 20%
              </Chip>
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {/* Card 1: Bản Miễn Phí */}
          <Card
            className="border border-divider bg-content1/80 backdrop-blur-md p-6 flex flex-col justify-between hover:border-default-400 transition-all duration-300"
          >
            <div>
              <CardHeader className="p-0 flex-col items-start gap-2 mb-4">
                <span className="text-sm font-bold text-default-500 uppercase tracking-wider">
                  Bản Miễn Phí
                </span>
                <p className="text-xs text-default-500">
                  Hoàn hảo để làm quen và trải nghiệm sức mạnh của AI viết lách.
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-foreground">0đ</span>
                  <span className="text-default-500 text-sm">/ vĩnh viễn</span>
                </div>
              </CardHeader>

              <CardBody className="p-0 py-6 border-t border-divider space-y-3.5">
                <span className="text-xs font-semibold text-foreground uppercase tracking-wider block">
                  Bao gồm:
                </span>
                <ul className="space-y-3 text-sm text-default-600">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    <span><strong>2.000 từ AI</strong> miễn phí mỗi tháng</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    <span>5 phong cách viết bài cơ bản</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    <span>Dịch thuật 5 ngôn ngữ phổ biến</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    <span>Kiểm tra chính tả tiếng Việt</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    <span>Tốc độ phản hồi tiêu chuẩn</span>
                  </li>
                </ul>
              </CardBody>
            </div>

            <CardFooter className="p-0 pt-6">
              <Button
                fullWidth
                variant="flat"
                size="lg"
                className="font-medium hover:bg-default-200"
              >
                Bắt đầu miễn phí
              </Button>
            </CardFooter>
          </Card>

          {/* Card 2: Bản Chuyên Nghiệp (RECOMMENDED HIGHLIGHTED) */}
          <div className="relative flex flex-col">
            {/* Top Recommended Floating Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
              <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-primary/30">
                <Sparkles className="w-3.5 h-3.5" />
                Được khuyên dùng nhất
              </div>
            </div>

            <Card
              className="border-2 border-primary bg-content1 shadow-2xl shadow-primary/15 p-6 flex flex-col justify-between h-full relative z-10 transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <CardHeader className="p-0 flex-col items-start gap-2 mb-4 pt-2">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-sm font-bold text-primary uppercase tracking-wider">
                      Bản Chuyên Nghiệp
                    </span>
                    <Chip size="sm" color="primary" variant="flat" className="font-semibold text-xs">
                      Phổ biến nhất
                    </Chip>
                  </div>
                  <p className="text-xs text-default-500">
                    Dành cho các Freelancer, Copywriter, Nhà sáng tạo nội dung độc lập.
                  </p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-foreground">
                      {isAnnual ? "159.000đ" : "199.000đ"}
                    </span>
                    <span className="text-default-500 text-sm">/ tháng</span>
                  </div>
                  {isAnnual && (
                    <span className="text-xs text-success font-medium">
                      Thanh toán 1.908.000đ / năm (Tiết kiệm 480.000đ)
                    </span>
                  )}
                </CardHeader>

                <CardBody className="p-0 py-6 border-t border-divider space-y-3.5">
                  <span className="text-xs font-semibold text-foreground uppercase tracking-wider block">
                    Mọi tính năng gói Free, cộng thêm:
                  </span>
                  <ul className="space-y-3 text-sm text-default-700">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Không giới hạn số từ</strong> tạo mỗi tháng</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Mở khóa toàn bộ <strong>25+ phong cách viết</strong></span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Dịch thuật <strong>50+ ngôn ngữ</strong> ngữ cảnh bản xứ</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Tự động tạo Outline & Đề cương bài viết</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Tiện ích Chrome Extension & Google Docs</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Tốc độ xử lý siêu tốc (Ưu tiên GPU riêng)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Hỗ trợ kỹ thuật ưu tiên 24/7</span>
                    </li>
                  </ul>
                </CardBody>
              </div>

              <CardFooter className="p-0 pt-6">
                <Button
                  fullWidth
                  color="primary"
                  variant="solid"
                  size="lg"
                  className="font-bold shadow-lg shadow-primary/30 bg-gradient-to-r from-primary to-purple-600 hover:from-primary-600 hover:to-purple-700 text-white"
                  endContent={<ArrowRight className="w-4 h-4" />}
                >
                  Nâng cấp Pro ngay
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Card 3: Bản Nhóm */}
          <Card
            className="border border-divider bg-content1/80 backdrop-blur-md p-6 flex flex-col justify-between hover:border-default-400 transition-all duration-300"
          >
            <div>
              <CardHeader className="p-0 flex-col items-start gap-2 mb-4">
                <span className="text-sm font-bold text-default-500 uppercase tracking-wider">
                  Bản Nhóm (Team)
                </span>
                <p className="text-xs text-default-500">
                  Dành cho các Agency, Phòng Marketing, Tòa soạn và Doanh nghiệp.
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-foreground">
                    {isAnnual ? "479.000đ" : "599.000đ"}
                  </span>
                  <span className="text-default-500 text-sm">/ tháng</span>
                </div>
                {isAnnual && (
                  <span className="text-xs text-success font-medium">
                    Thanh toán 5.748.000đ / năm (Tiết kiệm 1.440.000đ)
                  </span>
                )}
              </CardHeader>

              <CardBody className="p-0 py-6 border-t border-divider space-y-3.5">
                <span className="text-xs font-semibold text-foreground uppercase tracking-wider block">
                  Đặc quyền cho doanh nghiệp:
                </span>
                <ul className="space-y-3 text-sm text-default-600">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    <span>Bao gồm <strong>5 tài khoản thành viên</strong></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    <span>Bộ quy chuẩn thương hiệu riêng (Brand Voice)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    <span>Không gian cộng tác nhóm theo thời gian thực</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    <span>Bảng điều khiển quản lý & báo cáo hiệu suất</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    <span>Bảo mật dữ liệu cấp doanh nghiệp & SSO</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    <span>Chuyên viên quản lý tài khoản riêng biệt</span>
                  </li>
                </ul>
              </CardBody>
            </div>

            <CardFooter className="p-0 pt-6">
              <Button
                fullWidth
                variant="bordered"
                size="lg"
                className="font-medium border-default-300 dark:border-default-700 hover:bg-default-100"
              >
                Đăng ký gói Nhóm
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

