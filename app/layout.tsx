import type { Metadata } from "next";
import "./globals.css";

import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FaqSchema from "@/components/FaqSchema";

export const metadata: Metadata = {
  title: "SmileCare Dental Clinic | Best Dentist in Tirupati",
  description:
    "SmileCare Dental Clinic offers Teeth Cleaning, Root Canal, Dental Implants, Teeth Whitening and complete dental care in Tirupati.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LocalBusinessSchema />
        <FaqSchema />
        {children}
      </body>
    </html>
  );
}