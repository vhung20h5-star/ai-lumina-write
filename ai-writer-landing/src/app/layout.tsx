import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumina Write - Để AI trở thành đối tác viết của bạn",
  description: "Trợ lý viết AI thông minh hàng đầu: tiếp tục viết tự nhiên, điều chỉnh phong cách linh hoạt và dịch thuật chuẩn xác hơn 50 ngôn ngữ.",
  keywords: ["AI writing assistant", "trợ lý viết AI", "viết bài bằng AI", "Lumina Write", "AI copywriter"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning className="scroll-smooth">
      <body className="antialiased min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
