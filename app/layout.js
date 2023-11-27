import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tinder XXX | Meet And Fuck Tonight?",
  description:
    "Tinder XXX App is the #1 hookup site and free fuck app! Free fuckbook search. Find fuck buddies and get laid!",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
