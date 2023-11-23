import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Juicy Dates | Meet Hot and Wet Singles",
  description:
    "Jucydate – a sex dating site for married or single men and women looking for a casual fling. JucyDate chat is claimed to be 100% anonymous.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
