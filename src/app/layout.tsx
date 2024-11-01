import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "../providers/ThemeProvider";
import { ReduxProvider } from "@/providers/ReduxProvider";
import { Header } from "@/components/layout/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CodeRender - Beautiful Code Screenshots",
  description: "Create and share beautiful code screenshots with CodeRender.",
  keywords: ["CodeRender", "screenshot", "code snippets", "developer tools, código, captura de pantalla, desarrolladores, redes sociales, exportación de código, personalización"],
  openGraph: {
    title: "CodeRender - Beautiful Code Screenshots",
    description: "Create and share beautiful code screenshots with ease.",
    url: "https://coderender.vercel.app",
    images: [
      {
        url: "https://coderender.vercel.app/images/og-image.png",
        width: 800,
        height: 600,
        alt: "CodeRender screenshot",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeRender - Beautiful Code Screenshots",
    description: "Create and share beautiful code screenshots with ease.",
    images: "https://coderender.vercel.app/images/twitter-og-image.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden bg-background text-foreground`}
      >
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
