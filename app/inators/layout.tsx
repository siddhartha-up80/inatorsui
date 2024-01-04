import type { Metadata } from "next";
import { Inter } from "next/font/google";
import InatorsNav from "./inatorsNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inators UI | Components",
  description:
    "Inators UI is a collection of UI components and templates based on Tailwind and Shadcn/ui, just copy and use",
  keywords: ["Tailwind", "Shadcn/ui", "Components", "Inators UI"],
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
