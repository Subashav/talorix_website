import type { Metadata } from "next";
import "./globals.css";

const inter = async () => {
  const font = await fetch('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
  return font.text();
};

export const metadata: Metadata = {
  title: "Talorix | AI-Powered Hiring Platform for Startups & SMEs",
  description:
    "Hire AI-screened talent faster with Talorix. Automated interviews, smart candidate ranking, and intelligent matching. Transform your hiring process in days, not weeks.",
  keywords: "AI hiring, recruitment platform, AI interviews, talent acquisition, startup hiring, SME recruitment"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
