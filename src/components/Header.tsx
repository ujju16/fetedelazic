import React from "react";

export default function Header() {
  return (
    <header className="z-10 w-full flex flex-col items-center justify-center pt-8 pb-4 mb-6">
      <h1 className="text-5xl font-extrabold mb-4 text-pink-700 drop-shadow text-center font-[Lobster] w-full mx-auto">
        Le Sotlylaisse 71 vous invite
      </h1>
      <div className="text-lg text-gray-700 mb-4 text-center font-semibold bg-white/80 rounded-xl px-4 py-2 shadow-lg w-fit mx-auto">
        21 juin 2025
      </div>
    </header>
  );
}
