import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meet N Fuck | Want To Meet And Fuck Tonight?",
  description:
    "Official Meet N Fuck App! Huge active fuckbook makes it easy to find a local fuck buddy to fuck now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
