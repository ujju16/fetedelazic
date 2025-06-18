import React from "react";

interface MenuProps {
  menu: string[];
}

export default function MenuCard({ menu }: MenuProps) {
  return (
    <>
      <div className="w-full flex flex-col items-center mb-0">
        <div className="-mb-8 z-10">
          <div className="bg-yellow-400 rounded-full px-8 py-2 shadow text-xl font-[Lobster] text-white border-2 border-white inline-block">
            Menu
          </div>
        </div>
      </div>
      <div className="bg-white/90 rounded-3xl shadow-2xl border-4 border-yellow-400 w-full p-10 md:p-14 lg:p-16 xl:p-20 2xl:p-24 flex flex-col items-center mb-8">
        <ul className="mt-2 text-base sm:text-lg md:text-xl text-gray-800 font-semibold space-y-3 w-full max-w-2xl mx-auto">
          {menu.map((item, i) => (
            <li key={i} className="flex items-center gap-2 md:gap-4">
              <span className="text-yellow-500 text-2xl md:text-3xl">🍽️</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
