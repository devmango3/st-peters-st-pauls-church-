import type { Metadata } from "next";
import { Inter, Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "St. Peter & St. Paul Orthodox Syrian Congregation | Victoria, BC",
  description: "Experience traditional Syrian Orthodox worship in Victoria, BC. St. Peter & St. Paul Malankara Orthodox Church offers Holy Qurbana, community life, and ancient Christian traditions under the South-West American Diocese.",
  keywords: ["Syrian Orthodox", "Orthodox Church Victoria", "St. Peter & St. Paul Victoria", "Malankara Orthodox Syrian Church", "Victoria BC Christian Church", "Indian Orthodox Victoria", "Syrian Orthodox Christianity","St. Peter & St. Paul Syrian Church victoria canada","St. Peter & St. Paul Orthodox Syrian Congregation Victoria"],
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Church",
              "name": "St. Peter & St. Paul Orthodox Syrian Church",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1110 Caledonia Ave",
                "addressLocality": "Victoria",
                "addressRegion": "BC",
                "postalCode": "V8T 1G1",
                "addressCountry": "CA"
              },
              "telephone": "778-237-0597",
              "url": "https://stpetersandstpaulsvictoria.ca",
              "logo": "https://stpetersandstpaulsvictoria.ca/logo.jpeg",
              "image": "https://stpetersandstpaulsvictoria.ca/altar-main.jpeg",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 48.4306,
                "longitude": -123.3525
              },
              "description": "A congregation of the Malankara Orthodox Syrian Church in Victoria, BC, providing traditional Orthodox worship and community life."
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
