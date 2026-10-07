import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Elevated Visuals by Sosa | Cinematic Event Content Creator Canberra",
  description: "Cinematic, candid content for weddings, celebrations and the stories that matter most. Canberra based, available worldwide.",
  keywords: ["wedding videographer", "event content creator", "Canberra videographer", "cinematic wedding films", "brand video production"],
  authors: [{ name: "Elevated Visuals by Sosa" }],
  creator: "Elevated Visuals by Sosa",
  publisher: "Elevated Visuals by Sosa",
  openGraph: {
    title: "Elevated Visuals by Sosa | Cinematic Event Content Creator Canberra",
    description: "Cinematic, candid content for weddings, celebrations and the stories that matter most.",
    url: "https://elevatedvisualsbysosa.com",
    siteName: "Elevated Visuals by Sosa",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevated Visuals by Sosa",
    description: "Cinematic, candid content for weddings, celebrations and the stories that matter most.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`scroll-smooth ${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased bg-stone-950 text-stone-100 min-h-screen font-sans selection:bg-brand-500 selection:text-stone-950">
        {children}
      </body>
    </html>
  );
}
