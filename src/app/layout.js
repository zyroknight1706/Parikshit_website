import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const roboto_mono = Roboto_Mono({ subsets:['latin'], weight:['100', '200', '300', '400', '500', '600', '700'] })

export const metadata = {
  title: "Parikshit",
  description: "The website of Parikshit Student Satellite in MIT Manipal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>{children}</body>
    </html>
  );
}
