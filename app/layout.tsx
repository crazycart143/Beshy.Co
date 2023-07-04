import { Footer, Navbar } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Beshy.Co",
  description: "A beshy ko website for all beshies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="transition-all duration-500">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
