"use client";

import React from "react";
import { Card, CardBody, Avatar, Chip } from "@heroui/react";
import { ShieldCheck, HeartHandshake, Lightbulb, Quote } from "lucide-react";

export function AboutSection() {
  const testimonials = [
    {
      name: "Nguyễn Hoàng Minh",
      role: "Trưởng phòng Nội dung tại TechMedia",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      content:
        "Lumina AI đã giúp đội ngũ biên tập của chúng tôi rút ngắn 60% thời gian lên khung bài và nghiên cứu tài liệu. Chất lượng câu từ tiếng Việt tự nhiên đến kinh ngạc, không hề gượng ép như các công cụ dịch máy thông thường.",
      rating: 5,
    },
    {
      name: "Trần Mai Anh",
      role: "Tác giả sách & Freelance Copywriter",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      content:
        "Tính năng 'Điều chỉnh phong cách' là cứu cánh thực sự của tôi. Khi cần đổi từ văn phong hài hước sang trang trọng cho khách hàng doanh nghiệp, chỉ mất 1 cú nhấp chuột. Không thể thiếu Lumina trong quy trình làm việc!",
      rating: 5,
    },
    {
      name: "Lê Đức Tuấn",
      role: "CEO & Đồng sáng lập GrowthX Agency",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      content:
        "Chúng tôi triển khai gói Nhóm cho toàn bộ 15 nhân sự content. Khả năng thiết lập Brand Voice giúp bài viết của tất cả thành viên đồng nhất về giọng điệu thương hiệu. Năng suất tăng vọt!",
      rating: 5,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-default-50/60 dark:bg-default-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <Chip size="md" variant="flat" color="primary" className="font-semibold uppercase tracking-wider text-xs">
              Về Chúng Tôi
            </Chip>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
              Sứ mệnh trao quyền cho <br className="hidden sm:inline" />
              <span className="text-gradient">mọi cây viết thời đại số</span>
            </h2>
            <p className="text-default-600 text-base leading-relaxed">
              Chúng tôi khởi đầu với một niềm tin mãnh liệt: công nghệ AI xuất sắc nhất không phải là thứ thay thế tư duy con người, mà là người trợ lý tận tụy giúp giải phóng tiềm năng sáng tạo tiềm ẩn trong mỗi chúng ta.
            </p>
            <p className="text-default-600 text-base leading-relaxed">
              Lumina Write được xây dựng bởi đội ngũ kỹ sư AI và các nhà văn, chuyên gia ngôn ngữ học hàng đầu. Từng thuật toán, từng mô hình đều được tinh chỉnh sâu sắc cho ngữ pháp và ngữ cảnh tiếng Việt lẫn các ngôn ngữ quốc tế.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-content1 border border-divider">
                <ShieldCheck className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-bold text-sm text-foreground">Bảo Mật Tuyệt Đối</h4>
                <p className="text-xs text-default-500 mt-1">Dữ liệu bài viết của bạn không bao giờ dùng để huấn luyện mô hình chung.</p>
              </div>
              <div className="p-4 rounded-xl bg-content1 border border-divider">
                <HeartHandshake className="w-6 h-6 text-purple-500 mb-2" />
                <h4 className="font-bold text-sm text-foreground">Giọng Điệu Riêng</h4>
                <p className="text-xs text-default-500 mt-1">Giữ gìn bản sắc và phong cách độc bản của riêng bạn.</p>
              </div>
              <div className="p-4 rounded-xl bg-content1 border border-divider">
                <Lightbulb className="w-6 h-6 text-amber-500 mb-2" />
                <h4 className="font-bold text-sm text-foreground">Đổi Mới Liên Tục</h4>
                <p className="text-xs text-default-500 mt-1">Cập nhật hàng tuần các mô hình AI ngôn ngữ mạnh mẽ nhất thế giới.</p>
              </div>
            </div>
          </div>

          {/* About Image / Visual Element */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-divider bg-gradient-to-tr from-primary/10 via-purple-500/10 to-pink-500/10 p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                    100K+
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground">Cộng đồng tác giả tin dùng</h5>
                    <p className="text-xs text-default-500">Trên khắp Việt Nam và toàn cầu</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-600 font-bold text-xl">
                    50M+
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground">Đoạn văn được hoàn thiện mỗi tháng</h5>
                    <p className="text-xs text-default-500">Từ bài blog, tiểu thuyết đến báo cáo tài chính</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-600 font-bold text-xl">
                    99.8%
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground">Đánh giá hài lòng từ khách hàng</h5>
                    <p className="text-xs text-default-500">Dịch vụ chăm sóc tận tâm, bảo mật thông tin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Testimonials Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
            Người dùng nói gì về <span className="text-gradient">Lumina Write</span>?
          </h3>
          <p className="text-default-500 text-sm mt-2">
            Khám phá trải nghiệm thực tế từ những chuyên gia đang sáng tạo hàng ngày cùng chúng tôi.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <Card
              key={index}
              className="border border-divider bg-content1 p-6 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <CardBody className="p-0 space-y-4">
                <Quote className="w-8 h-8 text-primary/30" />
                <p className="text-default-600 text-sm leading-relaxed italic">
                  "{item.content}"
                </p>
                <div className="flex text-amber-400 text-xs">
                  {"★".repeat(item.rating)}
                </div>
              </CardBody>
              <div className="pt-4 border-t border-divider mt-4 flex items-center gap-3">
                <Avatar src={item.avatar} size="md" />
                <div>
                  <h4 className="font-bold text-sm text-foreground">{item.name}</h4>
                  <p className="text-xs text-default-500">{item.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

