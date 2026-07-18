import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://acho.com.br";
const description =
  "O Achô! está sendo desenvolvido para ajudar você a encontrar lugares, serviços, eventos e oportunidades perto de onde está.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Achô! | Em breve",
    template: "%s | Achô!",
  },
  description,
  applicationName: "Achô!",
  authors: [{ name: "Achô!" }],
  creator: "Achô!",
  publisher: "Achô!",
  category: "technology",
  keywords: [
    "Achô",
    "Campo Grande",
    "MS",
    "lugares",
    "servicos",
    "eventos",
    "oportunidades",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/acho-logo.jpeg",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Achô!",
    title: "Achô! | Em breve",
    description,
    images: [
      {
        url: "/acho-logo.jpeg",
        width: 1254,
        height: 1254,
        alt: "Logo do Achô!",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Achô! | Em breve",
    description,
    images: ["/acho-logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
