"use client";
import { useEffect } from "react";

export default function StarsBG() {
  useEffect(() => {
    const container = document.getElementById("stars-bg");
    if (!container) return;
    container.innerHTML = "";
    for (let i = 0; i < 60; i++) {
      const star = document.createElement("span");
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      container.appendChild(star);
    }
  }, []);
  return null;
}
