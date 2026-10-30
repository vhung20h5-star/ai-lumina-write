"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@heroui/react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button isIconOnly variant="flat" size="sm" aria-label="Toggle theme">
        <span className="w-5 h-5" />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      isIconOnly
      variant="flat"
      size="sm"
      className="text-default-600 hover:text-default-900 transition-colors bg-default-100 hover:bg-default-200"
      aria-label="Chuyển chế độ giao diện"
      onPress={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-warning-400 transition-transform rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-primary transition-transform rotate-0 hover:-rotate-12" />
      )}
    </Button>
  );
}

