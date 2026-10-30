"use client";

import React, { useState } from "react";
import {
  Button,
  Chip,
  AvatarGroup,
  Avatar,
  Card,
  CardBody,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Tabs,
  Tab
} from "@heroui/react";
import {
  Sparkles,
  ArrowRight,
  Play,
  CheckCircle2,
  FileText,
  Wand2,
  Languages,
  Check,
  Copy,
  BarChart3,
  Flame,
  Clock,
  ThumbsUp
} from "lucide-react";

export function Hero() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [activeTab, setActiveTab] = useState<string>("continue");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background ambient glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-primary-500/20 via-purple-500/15 to-pink-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-pink-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/60 border border-primary-200/60 dark:border-primary-800/60 text-primary-600 dark:text-primary-300 text-xs sm:text-sm font-medium mb-8 shadow-sm backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span>Thế hệ trợ lý viết AI mới 2.0 • Sáng tạo nội dung nhanh hơn gấp 10 lần</span>
          <Chip size="sm" color="primary" variant="flat" className="h-4 text-[10px] uppercase font-bold">Mới</Chip>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground max-w-5xl leading-[1.15] mb-6">
          Để AI trở thành{" "}
          <span className="text-gradient drop-shadow-sm">
            đối tác viết
          </span>{" "}
          của bạn
        </h1>

        {/* Subtitle introducing product value */}
        <p className="text-lg sm:text-xl text-default-600 max-w-3xl mb-10 leading-relaxed font-normal">
          Giải phóng tiềm năng sáng tạo và tối ưu hóa thời gian viết lách. Từ việc phát triển ý tưởng ban đầu, hoàn thiện bản nháp đến tinh chỉnh văn phong và dịch thuật đa ngôn ngữ – công cụ đồng hành đắc lực cho mọi tác giả, nhà báo và chuyên gia nội dung.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
          <Button
            as="a"
            href="#pricing"
            size="lg"
            color="primary"
            className="w-full sm:w-auto font-semibold px-8 py-6 text-base shadow-xl shadow-primary/30 bg-gradient-to-r from-primary to-purple-600 hover:from-primary-600 hover:to-purple-700 text-white rounded-xl transition-all transform hover:-translate-y-0.5"
            endContent={<ArrowRight className="w-5 h-5 ml-1" />}
          >
            Dùng thử miễn phí
          </Button>

          <Button
            size="lg"
            variant="bordered"
            className="w-full sm:w-auto font-medium px-8 py-6 text-base border-default-300 dark:border-default-700 hover:bg-default-100/60 rounded-xl transition-all"
            startContent={<Play className="w-4 h-4 text-primary fill-primary/30" />}
            onPress={onOpen}
          >
            Xem demo
          </Button>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 text-default-500 text-sm">
          <AvatarGroup isBordered max={4} size="sm">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026709d" />
          </AvatarGroup>
          <div className="flex items-center gap-1.5">
            <div className="flex text-amber-400">
              {"★".repeat(5)}
            </div>
            <span className="font-semibold text-foreground">4.9/5</span>
            <span>từ hơn 100.000+ người dùng và đội ngũ sáng tạo nội dung</span>
          </div>
        </div>

        {/* Product Screenshot / Interactive Mockup Window */}
        <div className="w-full max-w-5xl relative group">
          {/* Subtle outer glow border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-purple-500/50 to-pink-500/50 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition duration-500" />

          {/* Window Container */}
          <div className="relative rounded-2xl border border-divider bg-content1 shadow-2xl overflow-hidden backdrop-blur-xl text-left">
            {/* macOS Window Titlebar */}
            <div className="flex items-center justify-between px-4 py-3 bg-default-100/60 border-b border-divider">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-3 text-xs font-mono text-default-500 hidden sm:inline-block">
                  Lumina_Editor_v2.4 — Bài_viết_chiến_lược_2026.docx
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-default-500">
                <span className="inline-flex items-center gap-1.5 text-success font-medium">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  Tự động lưu
                </span>
                <span className="hidden sm:inline">|</span>
                <span className="hidden sm:inline">Từ: 1,420</span>
              </div>
            </div>

            {/* Editor Action Toolbar */}
            <div className="px-4 py-2.5 bg-content2/40 border-b border-divider flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 overflow-x-auto py-1">
                <Chip size="sm" variant="flat" color="primary" startContent={<Sparkles className="w-3 h-3" />}>
                  Gợi ý AI thông minh
                </Chip>
                <Chip size="sm" variant="bordered" className="border-default-300">
                  Văn phong: Chuyên nghiệp
                </Chip>
                <Chip size="sm" variant="bordered" className="border-default-300">
                  Ngôn ngữ: Tiếng Việt (Gốc)
                </Chip>
              </div>

              <div className="flex items-center gap-2 text-xs text-default-500">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-md hover:bg-default-200 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Đã chép" : "Sao chép"}</span>
                </button>
              </div>
            </div>

            {/* Editor Body */}
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Document Text Area */}
              <div className="lg:col-span-8 space-y-4 font-sans text-default-700 leading-relaxed text-sm sm:text-base">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  Trí Tuệ Nhân Tạo & Kỷ Nguyên Sáng Tạo Nội Dung Bất Tận
                </h2>
                
                <p>
                  Trong thế giới truyền thông số đầy biến động, năng lực biểu đạt ngôn từ đóng vai trò quyết định đến sự gắn kết của độc giả. Tuy nhiên, rào cản lớn nhất của mọi người viết không phải là thiếu nhiệt huyết, mà chính là những khoảnh khắc bế tắc trước trang giấy trắng.
                </p>

                {/* AI Interactive Completion Box */}
                <div className="p-4 sm:p-5 rounded-xl border-2 border-primary/40 bg-primary-50/50 dark:bg-primary-950/30 relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                      Lumina AI đang gợi ý tiếp tục:
                    </span>
                    <span className="text-[11px] text-default-400 font-mono">Độ tự tin 99.4%</span>
                  </div>

                  <p className="text-foreground font-medium text-sm sm:text-base leading-relaxed">
                    “...Đó là lúc trợ lý viết AI bước vào như một người cộng sự thấu hiểu. Bằng cách nắm bắt tinh tế nhịp điệu tư duy và văn phong riêng biệt của bạn, AI không nhằm mục đích thay thế ngòi bút con người, mà nâng niu từng ý tưởng thô, chắp cánh để chúng trở thành những tuyệt tác ngôn từ lay động lòng người.”
                  </p>

                  <div className="mt-4 pt-3 border-t border-primary/20 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 rounded bg-primary text-white font-semibold flex items-center gap-1 cursor-pointer hover:bg-primary-600 transition-colors">
                        Tab <span className="font-normal">Chấp nhận</span>
                      </span>
                      <span className="text-xs px-2 py-1 rounded bg-default-200 text-default-700 font-semibold cursor-pointer hover:bg-default-300 transition-colors">
                        Esc <span className="font-normal">Bỏ qua</span>
                      </span>
                    </div>
                    <span className="text-xs text-primary font-medium hover:underline cursor-pointer flex items-center gap-1">
                      <Wand2 className="w-3 h-3" /> Thử phiên bản gợi ý khác
                    </span>
                  </div>
                </div>

                <p className="text-default-500 italic text-sm">
                  Nhấn Ctrl + Space bất kỳ lúc nào để kích hoạt trình trợ lý Lumina AI...
                </p>
              </div>

              {/* Realtime Smart Analysis Sidebar */}
              <div className="lg:col-span-4 space-y-4">
                <Card className="bg-default-50 dark:bg-default-100/50 border border-divider shadow-none">
                  <CardBody className="p-4 space-y-3.5 text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-divider">
                      <span className="font-semibold text-foreground flex items-center gap-1.5">
                        <BarChart3 className="w-4 h-4 text-primary" />
                        Chỉ số chất lượng bài viết
                      </span>
                      <Chip size="sm" color="success" variant="flat">Xuất sắc</Chip>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-default-600">
                        <span>Điểm đọc hiểu (Flesch-Kincaid):</span>
                        <span className="font-bold text-foreground">96/100</span>
                      </div>
                      <div className="w-full bg-default-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-success h-full w-[96%]" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between text-default-600">
                        <span>Độ thu hút người đọc:</span>
                        <span className="font-bold text-foreground">92%</span>
                      </div>
                      <div className="w-full bg-default-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-[92%]" />
                      </div>
                    </div>

                    <div className="pt-2 border-t border-divider space-y-2">
                      <div className="flex items-center gap-2 text-default-600">
                        <Flame className="w-3.5 h-3.5 text-warning" />
                        <span>Văn phong: <strong>Chuyên nghiệp & Truyền cảm</strong></span>
                      </div>
                      <div className="flex items-center gap-2 text-default-600">
                        <Clock className="w-3.5 h-3.5 text-secondary" />
                        <span>Thời gian tiết kiệm dự kiến: <strong>2.5 giờ</strong></span>
                      </div>
                      <div className="flex items-center gap-2 text-default-600">
                        <ThumbsUp className="w-3.5 h-3.5 text-success" />
                        <span>Kiểm tra đạo văn & ngữ pháp: <strong>0 lỗi</strong></span>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                {/* Instant Tools Card */}
                <div className="p-3.5 rounded-xl border border-divider bg-content2/30 space-y-2">
                  <span className="text-[11px] font-semibold text-default-500 uppercase tracking-wider block">
                    Thao tác nhanh 1 chạm
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button className="p-2 rounded-lg bg-content1 hover:bg-primary-50 dark:hover:bg-primary-950/40 border border-divider text-left transition-colors flex items-center gap-1.5">
                      <Wand2 className="w-3 h-3 text-primary" />
                      <span>Viết cô đọng</span>
                    </button>
                    <button className="p-2 rounded-lg bg-content1 hover:bg-primary-50 dark:hover:bg-primary-950/40 border border-divider text-left transition-colors flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-purple-500" />
                      <span>Thêm ví dụ thực tế</span>
                    </button>
                    <button className="p-2 rounded-lg bg-content1 hover:bg-primary-50 dark:hover:bg-primary-950/40 border border-divider text-left transition-colors flex items-center gap-1.5">
                      <Languages className="w-3 h-3 text-cyan-500" />
                      <span>Dịch sang Tiếng Anh</span>
                    </button>
                    <button className="p-2 rounded-lg bg-content1 hover:bg-primary-50 dark:hover:bg-primary-950/40 border border-divider text-left transition-colors flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <span>Sửa lỗi chính tả</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Video / Interactive Modal */}
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange} 
        size="3xl"
        backdrop="blur"
        className="bg-content1"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <span className="text-lg font-bold flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Xem trước Trải Nghiệm Viết Cùng Lumina AI
                </span>
                <span className="text-xs text-default-500 font-normal">
                  Khám phá cách Lumina AI biến suy nghĩ của bạn thành văn bản sắc nét trong vài giây.
                </span>
              </ModalHeader>
              <ModalBody className="py-6">
                <div className="aspect-video w-full rounded-xl bg-gradient-to-tr from-slate-900 to-indigo-950 flex flex-col items-center justify-center text-white p-8 text-center relative overflow-hidden border border-divider">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary animate-bounce">
                    <Play className="w-8 h-8 fill-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Video Giới Thiệu Tính Năng 2 Phút</h3>
                  <p className="text-sm text-default-300 max-w-md mb-4">
                    Xem cách các cây viết chuyên nghiệp tăng tốc 10x sản lượng nội dung với bộ công cụ thông minh.
                  </p>
                  <Button
                    color="primary"
                    variant="shadow"
                    onPress={onClose}
                    className="font-medium"
                  >
                    Trải nghiệm trực tiếp ngay
                  </Button>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Đóng
                </Button>
                <Button as="a" href="#pricing" color="primary" onPress={onClose}>
                  Bắt đầu dùng thử miễn phí
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
}

