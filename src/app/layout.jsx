import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ADLauncher - Juega Minecraft Gratis con un Lanzador seguro y de código abierto",
  description: "Descarga ADLauncher gratis y juega Minecraft sin preocupaciones",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
