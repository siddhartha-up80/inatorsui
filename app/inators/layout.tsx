import type { Metadata } from "next";
import { Inter } from "next/font/google";
import InatorsNav from "./inatorsNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InatorsUI | Shadcn-ui based components for nextjs developers",
  description:
    "inatorsui is a collection of UI components and templates based on Tailwind and Shadcn/ui for nextjs, just copy and use",
  keywords: [
    "Tailwind",
    "Shadcn/ui",
    "Components",
    "Inators UI",
    "Inatorsui",
    "Inators",
    "inatorsui",
  ],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className={inter.className}>
        <InatorsNav/>
        {children}
      </div>
  );
}
