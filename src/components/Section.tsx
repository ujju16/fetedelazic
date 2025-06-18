import React from "react";

export default function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`w-full flex flex-col items-center ${className}`}>
      {children}
    </section>
  );
}
