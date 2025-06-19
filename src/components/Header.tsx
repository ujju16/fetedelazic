import React from "react";

export default function Header() {
  return (
    <header className="z-10 w-full flex flex-col items-center justify-center pt-8 pb-4 mb-6">
      <div className="w-full flex justify-center mb-6">
        <div className="bg-gradient-to-r from-red-900 via-pink-700 to-yellow-400 rounded-full px-10 py-5 shadow-lg text-4xl sm:text-5xl font-[Lobster] text-white border-4 border-white drop-shadow-lg text-center font-extrabold tracking-wide animate-pulse-slow">
          Le Sotlylaisse 71 vous invite
        </div>
      </div>
      {/* Badge stylisé 21 juin 2025 avec icônes */}
      <div className="flex items-center justify-center">
        <span className="flex items-center gap-2 bg-gradient-to-r from-[#2d133d] via-[#e11d48] to-[#f59e42] text-white font-extrabold rounded-full px-8 py-3 text-2xl md:text-3xl shadow-lg border-4 border-white drop-shadow-lg animate-pulse-slow" style={{fontFamily: 'Lobster, cursive'}}>
          <span role="img" aria-label="calendrier" className="text-3xl">📅</span>
          21 juin 2025
          <span role="img" aria-label="fête de la musique" className="text-3xl">🎉</span>
        </span>
      </div>
    </header>
  );
}
