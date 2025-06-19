import React from "react";

export default function Header() {
  return (
    <header className="z-10 w-full flex flex-col items-center justify-center pt-8 pb-4 mb-6">
      <div className="w-full flex justify-center mb-6">
        <div className="bg-gradient-to-r from-red-900 via-pink-700 to-yellow-400 rounded-full px-10 py-5 shadow-lg text-4xl sm:text-5xl font-[Lobster] text-white border-4 border-white drop-shadow-lg text-center font-extrabold tracking-wide animate-pulse-slow">
          Le Sotlylaisse 71 vous invite
        </div>
      </div>
      <div className="text-lg text-gray-700 mb-4 text-center font-semibold bg-white/80 rounded-xl px-4 py-2 shadow-lg w-fit mx-auto">
        21 juin 2025
      </div>
    </header>
  );
}
