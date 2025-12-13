import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import SideBar from "@/components/layout/SideNav";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Art Palace",
  description: "A place to buy art onchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {/* Sidebar is fixed; keep the app content padded so it never "jumps" */}
          <main className="min-h-screen">
            <SideBar />
            <div className="min-h-screen pl-20">
              <div className="flex min-h-screen flex-col">
                <NavBar />
                <div className="flex-1">{children}</div>
                <Footer />
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
