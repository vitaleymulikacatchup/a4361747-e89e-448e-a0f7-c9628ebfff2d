"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <main className="min-h-screen">
        {/* No sections are rendered because no components were selected from the registry */}
      </main>
    </ThemeProvider>
  );
}