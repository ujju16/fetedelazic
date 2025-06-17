import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2 text-purple-800 drop-shadow-lg">
            Le Sot L&apos;y Laisse fête la musique !
          </h1>
          <p className="text-lg text-gray-700">
            Samedi 21 juin — Venez avec votre instrument et votre bonne humeur !
          </p>
          <p className="text-md text-gray-500 mt-2">
            Dépressifs s&apos;abstenir 😉
          </p>
        </header>
        <main className="bg-white/80 rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
          <Image
            src="/vercel.svg"
            alt="Fête de la musique"
            width={80}
            height={80}
            className="mb-4"
          />
          <ul className="text-lg text-gray-800 mb-6 list-disc list-inside">
            <li>À manger, à boire et pour tous les goûts !</li>
            <li>Ambiance conviviale et festive</li>
            <li>Mobile first, Next.js, déploiement Vercel</li>
          </ul>
          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-2 bg-purple-700 text-white rounded-full shadow hover:bg-purple-800 transition"
          >
            Découvrir le projet sur Vercel
          </a>
        </main>
        <footer className="mt-10 text-gray-500 text-sm">
          © 2025 Le Sot L&apos;y Laisse
        </footer>
      </div>
    </>
  );
}
