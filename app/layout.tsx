import Header from "@/components/header";
import {
  Nunito,
  Open_Sans,
  Lato,
  Montserrat,
  Oswald,
  Poppins,
  Cormorant_Garamond,
} from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });
const lato = Lato({
  subsets: ["latin"],
  weight: "300",
});
const montserrat = Montserrat({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
});
const cormorant_garamond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "300"
});

export const metadata = {
  title: "Brooke Yang | Portfolio",
  description: "Software Developer.",
  icons: {
    icon: "/app/icon2.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${openSans.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
