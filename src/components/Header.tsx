import React from "react";

const title = "Le Sotlylaisse 71 vous invite";
const colors = [
  "text-red-700",
  "text-pink-600",
  "text-yellow-500",
  "text-fuchsia-700",
  "text-orange-500",
  "text-purple-700",
  "text-amber-600",
  "text-rose-600",
  "text-lime-600",
  "text-blue-700",
  "text-emerald-600",
  "text-cyan-600",
  "text-violet-700"
];

export default function Header() {
  return (
    <header className="z-10 w-full flex flex-col items-center justify-center pt-8 pb-4 mb-6">
      <div className="flex items-center justify-center mb-6">
        <span className="flex items-center gap-2 bg-gradient-to-r from-[#2d133d] via-[#e11d48] to-[#f59e42] text-white font-extrabold rounded-full px-8 py-3 text-2xl md:text-3xl shadow-lg border-4 border-white drop-shadow-lg animate-pulse-slow" style={{fontFamily: 'Lobster, cursive'}}>
          <span role="img" aria-label="calendrier" className="text-3xl">📅</span>
          21 juin 2025
          <span role="img" aria-label="fête de la musique" className="text-3xl">🎉</span>
        </span>
      </div>
      <h1 className="text-4xl sm:text-6xl font-[Lobster] drop-shadow-lg text-center font-extrabold tracking-wide select-none flex flex-wrap justify-center">
        {title.split("").map((char, i) => (
          char === " " ? (
            <span key={i} className="w-2 sm:w-3 inline-block"> </span>
          ) : (
            <span key={i} className={colors[i % colors.length]}>{char}</span>
          )
        ))}
      </h1>
    </header>
  );
}
