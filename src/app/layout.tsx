import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@fontsource/lobster/400.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Le Sotlylaisse 71 vous invite",
  description: "Venez fêter la musique au Sotlylaisse ! Concerts, menu, ambiance festive à Messey-sur-Grosne (71). Entrée gratuite.",
  keywords: [
    "fête de la musique",
    "Sotlylaisse",
    "concert",
    "menu",
    "Messey-sur-Grosne",
    "Saône-et-Loire",
    "musique",
    "événement",
    "bar",
    "soirée",
    "artiste"
  ],
  openGraph: {
    title: "Le Sotlylaisse 71 vous invite",
    description: "Venez fêter la musique au Sotlylaisse ! Concerts, menu, ambiance festive à Messey-sur-Grosne (71). Entrée gratuite.",
    url: "https://lesotlylaisse71.fr/",
    siteName: "Le Sotlylaisse 71",
    images: [
      {
        url: "/poulet1.jpg",
        width: 800,
        height: 600,
        alt: "Fête de la musique Sotlylaisse 71"
      }
    ],
    locale: "fr_FR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Sotlylaisse 71 vous invite",
    description: "Venez fêter la musique au Sotlylaisse ! Concerts, menu, ambiance festive à Messey-sur-Grosne (71). Entrée gratuite.",
    images: ["/poulet1.jpg"]
  },
  metadataBase: new URL("https://lesotlylaisse71.fr/")
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png" />
        <link rel="apple-touch-icon" href="/favicon-192.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MusicEvent',
              name: 'Fête de la musique - Le Sotlylaisse 71',
              startDate: '2025-06-21T18:00',
              endDate: '2025-06-22T02:00',
              eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
              eventStatus: 'https://schema.org/EventScheduled',
              location: {
                '@type': 'Place',
                name: 'Le Sotlylaisse 71',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '2 place St Georges',
                  addressLocality: 'Messey-sur-Grosne',
                  postalCode: '71390',
                  addressCountry: 'FR',
                },
              },
              image: [
                'https://lesotlylaisse71.fr/poulet1.jpg',
              ],
              description: 'Venez fêter la musique au Sotlylaisse ! Concerts, menu, ambiance festive à Messey-sur-Grosne (71). Entrée gratuite.',
              organizer: {
                '@type': 'Organization',
                name: 'Le Sotlylaisse 71',
                url: 'https://lesotlylaisse71.fr/',
              },
              offers: {
                '@type': 'Offer',
                url: 'https://lesotlylaisse71.fr/',
                price: '0',
                priceCurrency: 'EUR',
                availability: 'https://schema.org/InStock',
                validFrom: '2025-06-01T00:00',
              },
            }),
          }}
        />
      </head>
      <body
        className={`min-h-screen bg-black font-sans ${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <div id="stars-bg" className="pointer-events-none select-none fixed inset-0 z-0"></div>
        {children}
      </body>
    </html>
  );
}
