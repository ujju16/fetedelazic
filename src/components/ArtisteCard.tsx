import React from "react";

export default function ArtisteCard() {
  return (
    <>
      <div className="w-full flex flex-col items-center mb-0">
        <div className="-mb-8 z-10">
          <div className="bg-pink-500 rounded-full px-8 py-2 shadow text-xl font-[Lobster] text-white border-2 border-white inline-block">
            Artiste
          </div>
        </div>
      </div>
      <div className="bg-white/90 rounded-3xl shadow-2xl border-4 border-pink-500 w-full p-10 md:p-14 lg:p-16 xl:p-20 2xl:p-24 flex flex-col items-center mb-8 sm:border-pink-500 sm:border-4 border-l-0 border-r-0">
        <p className="mt-10 mb-6 text-lg text-gray-800 font-semibold text-center">
          Faite de la musique, venez nombreux branchez les guitares, table de
          mixage et autre bazar au Sotlylaisse&nbsp;: on vous laisse carte
          blanche !
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
          className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-full shadow hover:bg-pink-600 transition font-bold mt-2"
        >
          <img src="/jack_audio.jpeg" alt="Jack audio" className="w-7 h-7 rounded-full bg-white border border-pink-300" />
          ▶️ Branchez Les Guitares
        </button>
      </div>
    </>
  );
}
