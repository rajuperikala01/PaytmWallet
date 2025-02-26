import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Providers } from "../provider";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Paytm Payments",
  description: "Developed by Raju Perikala",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <Providers>
        <body className={`bg-[#e0f5fd]`}>
          <div>{children}</div>
        </body>
      </Providers>
    </html>
  );
}
