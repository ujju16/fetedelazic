import React from "react";

interface MenuProps {
  menu: string[];
}

export default function MenuCard({ menu }: MenuProps) {
  return (
    <>
      <div className="w-full flex flex-col items-center mb-0">
        <div className="-mb-10 z-10">
          <div className="bg-yellow-400 rounded-full px-12 py-4 shadow text-3xl font-[Lobster] text-white border-4 border-white inline-block drop-shadow-lg">
            Menu
          </div>
        </div>
      </div>
      <div className="bg-white/90 rounded-3xl shadow-2xl border-4 border-yellow-400 w-full p-10 md:p-14 lg:p-16 xl:p-20 2xl:p-24 flex flex-col items-center mb-8 sm:border-yellow-400 sm:border-4 border-l-0 border-r-0">
        <ul className="mt-2 text-base sm:text-lg md:text-xl text-gray-800 font-semibold space-y-4 w-full max-w-2xl mx-auto">
          {menu.map((item, i) => {
            // Association plat/boisson -> icône
            const icons: { [key: string]: string } = {
              sandwich: '🥪',
              andouillete: '🌭',
              kefta: '🍢',
              frites: '🍟',
              'boissons fraîches': '🥤',
              vins: '🍷',
              bières: '🍺',
              'café et thés': '☕️',
            };
            // Recherche de l'icône correspondante (insensible à la casse)
            const key = Object.keys(icons).find(k => item.toLowerCase().includes(k));
            const icon = key ? icons[key] : '🍽️';
            const euroIndex = item.indexOf('€');
            if (euroIndex !== -1) {
              // Sépare le texte avant et le prix
              const before = item.slice(0, euroIndex).trim().replace(/\d+\s*$/, ''); // retire le prix éventuel du texte
              const priceMatch = item.match(/(\d+(?:[.,]\d+)?)[ ]*€/);
              const price = priceMatch ? priceMatch[1] : '';
              return (
                <li key={i} className="flex items-center gap-4 md:gap-6 flex-nowrap">
                  <span className="text-2xl md:text-3xl flex-shrink-0">{icon}</span>
                  <span className="text-fuchsia-800 font-bold text-lg md:text-xl whitespace-nowrap flex-shrink-0">{before}</span>
                  <span className="inline-block bg-yellow-400 text-fuchsia-900 font-extrabold rounded-full px-4 py-1 text-base md:text-lg ml-2 shadow border-2 border-yellow-600 whitespace-nowrap align-middle flex-shrink-0" style={{lineHeight: '1.8'}}>
                    {price} €
                  </span>
                </li>
              );
            }
            return (
              <li key={i} className="flex items-center gap-4 md:gap-6 flex-wrap">
                <span className="text-2xl md:text-3xl flex-shrink-0">{icon}</span>
                <span className="text-fuchsia-800 font-bold text-lg md:text-xl whitespace-nowrap">{item}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
