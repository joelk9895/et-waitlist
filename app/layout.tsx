import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton } from "next/font/google"; // Added Anton
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://www.etherealtechno.com"),

  title: {
    default: "Ethereal Techno - Sound Library & Creator Community",
    template: "%s | Ethereal Techno",
  },

  description:
    "A curated sound library and creator community for Ethereal Techno. Built for producers and fans who value depth, emotion, and collaboration.",

  openGraph: {
    type: "website",
    url: "https://www.etherealtechno.com/",
    title: "Ethereal Techno - Sound Library & Creator Community",
    description:
      "A curated sound library and creator community for Ethereal Techno. Built for producers and fans who value depth, emotion, and collaboration.",
    images: [
      {
        url: "/media/Ethereal-Techno-Card.jpg",
        width: 1200,
        height: 630,
        alt: "Ethereal Techno",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ethereal Techno - Sound Library & Creator Community",
    description:
      "A curated sound library and creator community for Ethereal Techno. Built for producers and fans who value depth, emotion, and collaboration.",
    images: ["/media/Ethereal-Techno-Card.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
