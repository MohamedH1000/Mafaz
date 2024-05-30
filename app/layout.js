import { Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/context/ThemeProvider";
const Noto = Noto_Sans_Arabic({ subsets: ["arabic"] });

export const metadata = {
  title: "Mafaz",
  description: "Mafaz for recruitment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className={Noto.className}>
        <ClerkProvider
          appearance={{
            elements: {
              footer: "hidden",
            },
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
