import type { Metadata } from "next";
import { Inter } from "next/font/google";
import InatorsNav from "./inatorsNav";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarNav } from "@/components/side-bar-nav";
import { docsConfig } from "@/config/docs";
import BreadcrumbTop from "@/components/breadcrumb";

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

export default function InatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border-b">
      <div className="mx-2 md:mx-8 flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-4 pr-3 lg:py-6">
            <SidebarNav items={docsConfig.sidebarNav} />
          </ScrollArea>
        </aside>

        <div>
          <BreadcrumbTop />
          {children}
        </div>
      </div>
    </div>
  );
}
