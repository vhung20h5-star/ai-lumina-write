"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  Button
} from "@heroui/react";
import {
  Sparkles,
  Sliders,
  Languages,
  ArrowRight,
  CheckCircle2,
  Zap,
  Globe2,
  FileCheck2,
  TrendingUp,
  MessageSquare
} from "lucide-react";

export function Features() {
  // Interactive state for Card 2: Tone preview
  const [selectedTone, setSelectedTone] = useState<"formal" | "friendly" | "persuasive">("formal");

  const toneExamples = {
    formal: "Kính thưa Quý đối tác, chúng tôi xin trân trọng thông báo về tiến độ hoàn tất dự án theo đúng cam kết chiến lược đã đề ra.",
    friendly: "Chào bạn nhé! Tin vui là tụi mình vừa hoàn thành xong dự án rồi nè, kết quả xịn sò hơn mong đợi rất nhiều luôn!",
    persuasive: "Đừng bỏ lỡ cơ hội bứt phá doanh số! Dự án này chính là bước đệm tối ưu nhất giúp doanh nghiệp bạn dẫn đầu thị trường ngay hôm nay."
  };

  // Interactive state for Card 3: Language preview
  const [selectedLang, setSelectedLang] = useState<"en" | "ja" | "fr">("en");

  const langExamples = {
    en: "Empower your creative voice with next-generation AI writing intelligence.",
    ja: "次世代のAIライティングインテリジェンスで、あなたの創作力を解き放ちましょう。",
    fr: "Libérez votre potentiel créatif grâce à l'intelligence rédactionnelle IA de nouvelle génération."
  };

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-default-50/50 dark:bg-default-900/10">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Chip
            size="md"
            variant="flat"
            color="primary"
            className="mb-4 font-semibold uppercase tracking-wider text-xs"
          >
            Tính Năng Đột Phá
          </Chip>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Mọi công cụ bạn cần để tạo nên{" "}
            <span className="text-gradient">tuyệt tác ngôn từ</span>
          </h2>
          <p className="text-default-600 text-base sm:text-lg leading-relaxed">
            Được trang bị các mô hình ngôn ngữ lớn tiên tiến nhất, Lumina AI hỗ trợ toàn diện từng giai đoạn trong quy trình sáng tạo bài viết của bạn.
          </p>
        </div>

        {/* 3 Columns Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Tiếp tục viết thông minh */}
          <Card
            isHoverable
            className="border border-divider bg-content1/80 backdrop-blur-md hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col justify-between"
          >
            <CardHeader className="flex-col items-start px-6 pt-6 pb-2 gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/25">
                <Sparkles className="w-7 h-7" />
              </div>
              <div>
                <Chip size="sm" variant="dot" color="secondary" className="mb-2 border-none px-0 text-xs font-semibold">
                  Sáng tạo không gián đoạn
                </Chip>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Tiếp tục viết thông minh
                </h3>
              </div>
            </CardHeader>

            <CardBody className="px-6 py-2 space-y-4 text-default-600 text-sm leading-relaxed">
              <p>
                Tự động thấu hiểu mạch suy nghĩ và phong cách diễn đạt của bạn để tiếp nối câu từ tự nhiên. Không còn bế tắc trước trang giấy trắng; chỉ với một phím tắt, đoạn văn được mở rộng logic, sắc bén và liền mạch theo đúng ngữ cảnh.
              </p>

              {/* Interactive Mini Demo */}
              <div className="p-3.5 rounded-xl bg-default-100/70 dark:bg-default-100/30 border border-divider space-y-2 text-xs">
                <div className="text-default-500 font-medium">Bản nháp của bạn:</div>
                <div className="text-foreground">
                  "Để thương hiệu tạo được dấu ấn sâu đậm..."
                </div>
                <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary-700 dark:text-primary-300">
                  <span className="font-semibold flex items-center gap-1 mb-1">
                    <Sparkles className="w-3 h-3 text-primary" /> AI tự động tiếp nối:
                  </span>
                  "...cần phải nhất quán trong thông điệp cốt lõi và kết nối bằng cảm xúc chân thực với từng khách hàng mục tiêu."
                </div>
              </div>
            </CardBody>

            <CardFooter className="px-6 pb-6 pt-2">
              <div className="flex items-center gap-2 text-primary font-medium text-xs">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Hoàn thiện câu, mở rộng ý, viết kết bài tức thì</span>
              </div>
            </CardFooter>
          </Card>

          {/* Card 2: Điều chỉnh phong cách */}
          <Card
            isHoverable
            className="border border-divider bg-content1/80 backdrop-blur-md hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col justify-between"
          >
            <CardHeader className="flex-col items-start px-6 pt-6 pb-2 gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/25">
                <Sliders className="w-7 h-7" />
              </div>
              <div>
                <Chip size="sm" variant="dot" color="primary" className="mb-2 border-none px-0 text-xs font-semibold">
                  Biến hóa đa giọng điệu
                </Chip>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Điều chỉnh phong cách
                </h3>
              </div>
            </CardHeader>

            <CardBody className="px-6 py-2 space-y-4 text-default-600 text-sm leading-relaxed">
              <p>
                Linh hoạt chuyển đổi văn phong theo đối tượng người đọc: trang trọng cho email đối tác, hóm hỉnh thu hút cho mạng xã hội, sắc sảo cho nghiên cứu hoặc chân thành cho câu chuyện thương hiệu.
              </p>

              {/* Interactive Mini Demo */}
              <div className="p-3.5 rounded-xl bg-default-100/70 dark:bg-default-100/30 border border-divider space-y-2.5 text-xs">
                <div className="flex gap-1.5 overflow-x-auto pb-1">
                  <button
                    onClick={() => setSelectedTone("formal")}
                    className={`px-2 py-1 rounded-md transition-all font-medium ${
                      selectedTone === "formal"
                        ? "bg-primary text-white shadow-sm"
                        : "bg-default-200 text-default-700 hover:bg-default-300"
                    }`}
                  >
                    Trang trọng
                  </button>
                  <button
                    onClick={() => setSelectedTone("friendly")}
                    className={`px-2 py-1 rounded-md transition-all font-medium ${
                      selectedTone === "friendly"
                        ? "bg-primary text-white shadow-sm"
                        : "bg-default-200 text-default-700 hover:bg-default-300"
                    }`}
                  >
                    Thân thiện
                  </button>
                  <button
                    onClick={() => setSelectedTone("persuasive")}
                    className={`px-2 py-1 rounded-md transition-all font-medium ${
                      selectedTone === "persuasive"
                        ? "bg-primary text-white shadow-sm"
                        : "bg-default-200 text-default-700 hover:bg-default-300"
                    }`}
                  >
                    Thuyết phục
                  </button>
                </div>
                <div className="p-2.5 rounded-lg bg-content1 border border-divider text-foreground leading-relaxed italic">
                  "{toneExamples[selectedTone]}"
                </div>
              </div>
            </CardBody>

            <CardFooter className="px-6 pb-6 pt-2">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-medium text-xs">
                <CheckCircle2 className="w-4 h-4" />
                <span>20+ bộ văn phong tùy chỉnh theo thương hiệu</span>
              </div>
            </CardFooter>
          </Card>

          {/* Card 3: Dịch đa ngôn ngữ */}
          <Card
            isHoverable
            className="border border-divider bg-content1/80 backdrop-blur-md hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 flex flex-col justify-between"
          >
            <CardHeader className="flex-col items-start px-6 pt-6 pb-2 gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/25">
                <Languages className="w-7 h-7" />
              </div>
              <div>
                <Chip size="sm" variant="dot" color="success" className="mb-2 border-none px-0 text-xs font-semibold">
                  Bản địa hóa thông minh
                </Chip>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Dịch đa ngôn ngữ
                </h3>
              </div>
            </CardHeader>

            <CardBody className="px-6 py-2 space-y-4 text-default-600 text-sm leading-relaxed">
              <p>
                Phá bỏ mọi rào cản quốc tế với khả năng biên dịch sang hơn 50 thứ tiếng. Bảo tồn trọn vẹn thuật ngữ chuyên ngành, sắc thái văn hóa và ngữ cảnh địa phương thay vì dịch máy móc từng từ.
              </p>

              {/* Interactive Mini Demo */}
              <div className="p-3.5 rounded-xl bg-default-100/70 dark:bg-default-100/30 border border-divider space-y-2.5 text-xs">
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedLang("en")}
                    className={`px-2 py-1 rounded-md transition-all font-medium ${
                      selectedLang === "en"
                        ? "bg-emerald-600 text-white"
                        : "bg-default-200 text-default-700 hover:bg-default-300"
                    }`}
                  >
                    🇺🇸 English
                  </button>
                  <button
                    onClick={() => setSelectedLang("ja")}
                    className={`px-2 py-1 rounded-md transition-all font-medium ${
                      selectedLang === "ja"
                        ? "bg-emerald-600 text-white"
                        : "bg-default-200 text-default-700 hover:bg-default-300"
                    }`}
                  >
                    🇯🇵 日本語
                  </button>
                  <button
                    onClick={() => setSelectedLang("fr")}
                    className={`px-2 py-1 rounded-md transition-all font-medium ${
                      selectedLang === "fr"
                        ? "bg-emerald-600 text-white"
                        : "bg-default-200 text-default-700 hover:bg-default-300"
                    }`}
                  >
                    🇫🇷 Français
                  </button>
                </div>
                <div className="p-2.5 rounded-lg bg-content1 border border-divider text-foreground leading-relaxed">
                  {langExamples[selectedLang]}
                </div>
              </div>
            </CardBody>

            <CardFooter className="px-6 pb-6 pt-2">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium text-xs">
                <CheckCircle2 className="w-4 h-4" />
                <span>Hỗ trợ hơn 50+ ngôn ngữ toàn cầu chuẩn xác</span>
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Highlight Stats Strip */}
        <div className="mt-16 pt-12 border-t border-divider grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-foreground flex items-center justify-center gap-1">
              <Zap className="w-6 h-6 text-amber-500 inline" />
              10x
            </div>
            <div className="text-xs sm:text-sm text-default-500">Tăng tốc độ viết bài</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-foreground flex items-center justify-center gap-1">
              <Globe2 className="w-6 h-6 text-primary inline" />
              50+
            </div>
            <div className="text-xs sm:text-sm text-default-500">Ngôn ngữ hỗ trợ bản địa</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-foreground flex items-center justify-center gap-1">
              <FileCheck2 className="w-6 h-6 text-emerald-500 inline" />
              99.8%
            </div>
            <div className="text-xs sm:text-sm text-default-500">Độ chính xác ngữ pháp</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-foreground flex items-center justify-center gap-1">
              <TrendingUp className="w-6 h-6 text-purple-500 inline" />
              50M+
            </div>
            <div className="text-xs sm:text-sm text-default-500">Từ được tạo mỗi tháng</div>
          </div>
        </div>
      </div>
    </section>
  );
}

