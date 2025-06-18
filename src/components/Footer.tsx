import React from "react";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center pt-6 pb-4 mt-10 text-center text-gray-500 text-sm z-10 bg-white/60">
      <div>@lesotlylaisse71.fr</div>
      <div className="mt-1">KornshDEV 2025 &copy; Tous droits réservés</div>
      <div className="mt-1">
        <a
          href="#"
          className="underline hover:text-pink-600 transition"
          title="Mentions légales"
        >
          Mentions légales
        </a>
      </div>
    </footer>
  );
}
