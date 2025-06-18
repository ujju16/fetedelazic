import React from "react";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-1 flex flex-col items-center justify-start w-full max-w-xl mx-auto px-2">
      {children}
    </main>
  );
}
