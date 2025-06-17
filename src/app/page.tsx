"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [bgSrc, setBgSrc] = useState("/poulet-desktop.svg");

  useEffect(() => {
    const updateBg = () => {
      if (window.innerWidth < 640) {
        setBgSrc("/poulet-mobile.svg"); // mobile
      } else if (window.innerWidth < 1024) {
        setBgSrc("/poulet-tablette.svg"); // tablette
      } else {
        setBgSrc("/poulet-desktop.svg"); // desktop
      }
    };
    updateBg();
    window.addEventListener("resize", updateBg);
    return () => window.removeEventListener("resize", updateBg);
  }, []);

  return (
    <>
      <div
        className="flex flex-col min-h-screen items-center justify-center relative overflow-hidden p-4"
        style={{
          background:
            "linear-gradient(135deg, #a7c7e7 0%, #d1b3ff 100%)",
        }}
      >
        <img
          src={bgSrc}
          alt="Poulet punk rockeur dans un bar western"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            opacity: 0.5,
            pointerEvents: "none",
            userSelect: "none",
            transition: "opacity 0.3s",
          }}
        />
        <div className="relative z-10 w-full flex flex-col items-center">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-2 text-purple-800 drop-shadow-lg">
              Le Sot L&apos;y Laisse Faite la musique !
            </h1>
            <p className="text-lg text-gray-700">
              Samedi 21 juin — Venez avec votre instrument et votre bonne humeur !
            </p>
            <p className="text-md text-gray-500 mt-2">
              Dépressifs s&apos;abstenir 😉
            </p>
          </header>
          <main className="bg-white/80 rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
            <Image
              src="/vercel.svg"
              alt="Fête de la musique"
              width={80}
              height={80}
              className="mb-4"
            />
            <ul className="text-lg text-gray-800 mb-6 list-disc list-inside">
              <li>À manger, à boire et pour tous les goûts !</li>
              <li>Ambiance conviviale et festive</li>
            </ul>
          </main>
          <footer className="mt-10 text-gray-500 text-sm">
            © 2025 Le Sot L&apos;y Laisse
          </footer>
        </div>
      </div>
    </>
  );
}
