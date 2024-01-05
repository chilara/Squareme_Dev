// import { Inter } from 'next/font/google'
import localFont from "@next/font/local";
import "./globals.css";

const dm = localFont({
  src: [
    {
      path: "../../public/fonts/DMSans_18pt-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/DMSans_18pt-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/DMSans_24pt-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-dm",
});

export const metadata = {
  title: "Squareme",
  description: "Dev-test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm.variable}>{children}</body>
    </html>
  );
}
