import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Find Event Vendor",
  description: "A platform to find and connect with event vendors all in one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
