"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Chip
} from "@heroui/react";
import { Sparkles, PenTool, ArrowRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Tính năng", href: "#features" },
    { label: "Bảng giá", href: "#pricing" },
    { label: "Về chúng tôi", href: "#about" },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className="backdrop-blur-md bg-background/80 sticky top-0 z-50 border-divider"
    >
      {/* Mobile Toggle & Logo */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
        />
        <NavbarBrand className="gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-primary-600 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-md shadow-primary/20">
            <PenTool className="w-4 h-4" />
          </div>
          <span className="font-bold text-lg tracking-tight">Lumina</span>
          <Chip size="sm" variant="flat" color="primary" className="text-xs px-1.5 h-5">
            AI
          </Chip>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Brand Logo */}
      <NavbarContent className="hidden sm:flex" justify="start">
        <NavbarBrand className="gap-2.5">
          <Link href="#" className="flex items-center gap-2.5 text-foreground hover:opacity-90 transition-opacity">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary-600 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-primary/25">
              <PenTool className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight flex items-center gap-1.5">
                Lumina <span className="text-gradient">Write</span>
                <Chip size="sm" variant="dot" color="primary" className="border-none text-[10px] font-semibold h-4">
                  PRO
                </Chip>
              </span>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation Links */}
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
          >
            Tính năng
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#pricing"
            className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
          >
            Bảng giá
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#about"
            className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
          >
            Về chúng tôi
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Desktop Right Actions */}
      <NavbarContent justify="end" className="gap-3">
        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Button
            as={Link}
            href="#pricing"
            color="primary"
            variant="solid"
            size="md"
            className="font-semibold shadow-md shadow-primary/25 bg-gradient-to-r from-primary to-purple-600 hover:from-primary-600 hover:to-purple-700 transition-all text-white"
            endContent={<ArrowRight className="w-4 h-4 ml-0.5" />}
          >
            Bắt đầu sử dụng
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Drawer Menu */}
      <NavbarMenu className="bg-background/95 backdrop-blur-xl pt-6 gap-4">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              color="foreground"
              className="w-full text-lg py-2 font-medium hover:text-primary"
              href={item.href}
              size="lg"
              onPress={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <div className="pt-4 flex flex-col gap-3">
          <div className="flex items-center justify-between py-2 border-t border-b border-divider">
            <span className="text-sm font-medium text-default-600">Giao diện sáng / tối</span>
            <ThemeToggle />
          </div>
          <Button
            as={Link}
            href="#pricing"
            color="primary"
            size="lg"
            className="w-full font-semibold shadow-lg shadow-primary/30 bg-gradient-to-r from-primary to-purple-600 text-white"
            onPress={() => setIsMenuOpen(false)}
            endContent={<ArrowRight className="w-4 h-4" />}
          >
            Bắt đầu sử dụng
          </Button>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}

