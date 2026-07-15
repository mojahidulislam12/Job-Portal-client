import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Provider from "../../components/Hoc/Provider";
import ResponsiveNav from "../../components/Home/Navbar/ResponsiveNav";

const font = Roboto({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Job Portal | Landing Page",
  description: "Job portal landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}  antialiased`}>
        <Provider>
          <ResponsiveNav></ResponsiveNav>
          {children}
        </Provider>
      </body>
    </html>
  );
}
