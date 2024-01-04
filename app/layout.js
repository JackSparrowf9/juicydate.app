import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "xLiveSex: Free Live Sex Webcams and Adult Chat",
  description:
    "Free Live Sex Chat and XXX Porn shows for FREE without Registration! Watch Free Sex and Live Porn with Webcam Girls, Couples, Groups.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
