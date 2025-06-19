import React, { useState } from "react";

export default function Footer() {
  const [showLegal, setShowLegal] = useState(false);
  return (
    <>
      <footer className="w-full flex flex-col items-center pt-6 pb-4 mt-10 text-center text-white text-sm z-10 bg-gradient-to-b from-[#181028] via-[#12091a] to-[#0a0610]">
        <div>@lesotlylaisse71.fr</div>
        <div className="mt-1">KornshDEV 2025 &copy; Tous droits réservés</div>
        <div className="mt-1">
          <button
            className="underline hover:text-pink-400 transition"
            title="Mentions légales"
            onClick={() => setShowLegal(true)}
          >
            Mentions légales
          </button>
        </div>
      </footer>
      {showLegal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-pink-600 text-2xl font-bold"
              onClick={() => setShowLegal(false)}
              aria-label="Fermer"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4 text-pink-700">
              Mentions légales
            </h2>
            <div className="text-gray-700 text-sm space-y-2 text-left">
              <p>
                <strong>Éditeur :</strong> Le Sotlylaisse 71, 2 place St Georges,
                71390 Messey-sur-Grosne
              </p>
              <p>
                <strong>Contact :</strong> lesotlylaisse71.fr
              </p>
              <p>
                <strong>Responsable publication :</strong> KornshDEV
              </p>
              <p>
                <strong>Hébergement :</strong> Vercel Inc., 440 N Barranca Ave
                #4133, Covina, CA 91723, USA
              </p>
              <p>
                <strong>Propriété intellectuelle :</strong> Tous droits réservés.
                Toute reproduction ou représentation totale ou partielle est
                interdite sans autorisation écrite.
              </p>
              <p>
                <strong>Crédits :</strong> Design et développement KornshDEV.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
