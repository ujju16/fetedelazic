"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "@fontsource/lobster/400.css";

const menu = [
  "Andouillette fritte",
  "Sandwitch Kefta Merguez",
  "Petite restauration",
  "Scène ouverte ⇒ Musicien bienvenue, DJ aussi",
];

const infos = [
  { label: "📍 Lieu", value: "Le SotLyLaisse71, [Adresse à insérer]" },
  { label: "🕕 Heure", value: "Ouverture des portes à 18h" },
  { label: "🎟️ Entrée", value: "Gratuite" },
];

const photos = {
  mobile: "/poulet1.jpg",
  tablet: "/poulet2.jpg",
  desktop: "/poulet3.jpg",
  extra: "/poulet4.jpg",
};

function useDevicePhoto() {
  const [src, setSrc] = useState(photos.desktop);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setSrc(photos.mobile);
      else if (window.innerWidth < 1024) setSrc(photos.tablet);
      else if (window.innerWidth < 1440) setSrc(photos.desktop);
      else setSrc(photos.extra);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return src;
}

function MusicNotesBG() {
  const [notes, setNotes] = useState<{
    left: number;
    delay: number;
    color: string;
    icon: string;
  }[]>([]);
  useEffect(() => {
    const generated = Array.from({ length: 12 }).map((_, i) => ({
      left: Math.random() * 100,
      delay: Math.random() * 6,
      color: ["#7c3aed", "#f59e42", "#e11d48", "#10b981"][i % 4],
      icon: ["🎵", "🎶", "🎸", "🎷"][i % 4],
    }));
    setNotes(generated);
  }, []);
  return (
    <div className="pointer-events-none select-none absolute inset-0 z-0 overflow-hidden">
      {notes.map((note, i) => (
        <span
          key={i}
          className="absolute animate-music-note top-[-40px] text-3xl opacity-40"
          style={{
            left: `${note.left}%`,
            animationDelay: `${note.delay}s`,
            color: note.color,
          }}
        >
          {note.icon}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  const photo = useDevicePhoto();
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4 overflow-hidden">
      <MusicNotesBG />
      <div className="relative z-10 w-full max-w-xl flex flex-col items-center">
        <h1 className="text-5xl font-extrabold mb-4 text-pink-700 drop-shadow text-center font-[Lobster]">Le Sotlylaisse 71 vous invite</h1>
      </div>
      <div className="relative w-full flex justify-center items-center" style={{height: '28vh', minHeight: 140}}>
        <Image src={photo} alt="Poulet ambiance" fill priority className="object-cover w-full h-full rounded-xl shadow-lg" style={{objectPosition: 'top center', opacity: 0.85}} />
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src={photo} alt="Poulet ambiance zoom" width={220} height={140} className="rounded-xl shadow-2xl border-4 border-white object-contain bg-white/70" style={{maxWidth: '80%', maxHeight: '80%'}} />
        </div>
      </div>
      <div className="relative z-10 w-full max-w-xl flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2 text-purple-800 drop-shadow-lg text-center font-[Lobster]">
          Menu fête de la Zi&apos;Ck 2025
        </h1>
        <p className="text-lg text-gray-700 mb-2 text-center">
          21 juin 2025
        </p>
        <div className="mb-6 w-full flex justify-center">
          <div className="bg-white/90 rounded-3xl shadow-2xl border-4 border-yellow-400 max-w-md w-full p-6 relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-yellow-400 rounded-full px-6 py-2 shadow text-xl font-[Lobster] text-white border-2 border-white">Menu</div>
            <ul className="mt-8 text-lg text-gray-800 font-semibold space-y-3">
              {menu.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-yellow-500 text-2xl">🍽️</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mb-6 w-full bg-white/80 rounded-xl shadow p-4">
          {infos.map((info, i) => (
            <div key={i} className="mb-1">
              <span className="font-semibold">{info.label} :</span> {info.value}
            </div>
          ))}
        </div>
        <div className="text-center text-gray-500 text-sm mt-4">
          @lesotlylaisse71.fr
        </div>
      </div>
      <style jsx global>{`
        @keyframes music-note {
          0% {
            transform: translateY(0) scale(1) rotate(-10deg);
            opacity: 0.4;
          }
          80% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(110vh) scale(1.2) rotate(10deg);
            opacity: 0;
          }
        }
        .animate-music-note {
          animation: music-note 7s linear infinite;
        }
      `}</style>
    </div>
  );
}
