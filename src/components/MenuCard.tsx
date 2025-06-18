import React from "react";

interface MenuProps {
  menu: string[];
}

export default function MenuCard({ menu }: MenuProps) {
  return (
    <div className="bg-white/90 rounded-3xl shadow-2xl border-4 border-yellow-400 max-w-md w-full p-6 relative flex flex-col items-center">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-yellow-400 rounded-full px-6 py-2 shadow text-xl font-[Lobster] text-white border-2 border-white">Menu</div>
      <h2 className="text-4xl font-bold mb-6 mt-10 text-purple-800 drop-shadow-lg text-center font-[Lobster]">Menu fête de la Zi&apos;Ck 2025</h2>
      <ul className="mt-2 text-lg text-gray-800 font-semibold space-y-3">
        {menu.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-yellow-500 text-2xl">🍽️</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
