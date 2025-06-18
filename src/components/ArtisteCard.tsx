import React from "react";

export default function ArtisteCard() {
  return (
    <>
      <div className="w-full flex flex-col items-center mb-0">
        <div className="-mb-10 z-10 w-full flex justify-center sm:justify-center">
          <div className="bg-pink-500 rounded-full px-12 py-4 shadow text-3xl font-[Lobster] text-white border-4 border-white inline-block drop-shadow-lg text-center w-full max-w-xs mx-auto">
            Artiste
          </div>
        </div>
      </div>
      <div className="bg-white/90 rounded-3xl shadow-2xl border-4 border-pink-500 w-full p-10 md:p-14 lg:p-16 xl:p-20 2xl:p-24 flex flex-col items-center mb-8 sm:border-pink-500 sm:border-4 border-l-0 border-r-0">
        <div className="inline-block bg-pink-500 text-white font-extrabold rounded-full px-6 py-2 text-lg md:text-xl mb-4 shadow border-2 border-pink-700 flex items-center gap-2 whitespace-nowrap truncate max-w-xs text-center">
          <span role="img" aria-label="note de musique">🎵</span>
          Faite de la musique
        </div>
        <p className="mb-6 text-lg text-gray-800 font-semibold text-center">
          Venez nombreux branchez les guitares, table de mixage et autre bazar au
          Sotlylaisse&nbsp;: on vous laisse carte blanche !
        </p>
        <audio
          id="audio-artiste"
          src="/Brio_branchezlesguitares_cut.mp3"
          preload="auto"
          className="hidden"
        />
        <button
          onClick={() => {
            const audio = document.getElementById('audio-artiste') as HTMLAudioElement;
            if (audio) {
              if (audio.paused) {
                audio.play();
              } else {
                audio.pause();
                audio.currentTime = 0;
              }
            }
          }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 transition font-bold mt-2 w-full max-w-xs justify-center whitespace-nowrap overflow-hidden text-ellipsis min-w-0"
        >
          <img src="/jack_audio.jpeg" alt="Jack audio" className="w-7 h-7 rounded-full bg-white border border-pink-300 flex-shrink-0" />
          <span className="truncate flex-1 text-center">▶️ Branchez Les Guitares</span>
        </button>
      </div>
    </>
  );
}
