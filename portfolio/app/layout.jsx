import "./globals.css";
import { Rail, TopBar } from "../components/Nav";
import { profile } from "../lib/data";

export const metadata = {
  title: "Saral Singhal — Data & AI Engineer",
  description: profile.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <TopBar />
        <div className="shell">
          <Rail />
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
