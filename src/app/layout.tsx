import type { Metadata } from "next";
import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import Navbar from "@/components/Navbar";
import AuthProvider from "./authProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const inter = DM_Sans({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Sakura",
  description: "A job search application for Japan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className={inter.className}>
        <AuthProvider>
          <Toaster />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
