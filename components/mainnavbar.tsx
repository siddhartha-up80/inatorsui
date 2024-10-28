"use client";

import { Flower2, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CommandMenu from "./command-menu";

export default function Navbar({
  items,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
}) {
  const pathname = usePathname();

  return (
    <div
      className={`min-w-screen !sticky !top-0 z-20 backdrop-blur-lg w-full backdrop-filter py-2`}
    >
      <div className="px-3 mx-auto flex justify-between items-center py-1 font-medium max-w-[98vw]">
        <Logo />
        {/* <div className="capitalize flex gap-1 flex-wrap">
          {pathname?.split("/")?.map((item, index) => {
            return <span key={index}>{index > 1 ? ": " + item : item}</span>;
          })}
        </div> */}

        <div className="flex gap-2 md:gap-10 items-center justify-self-end">
          <ul className="justify-center items-center md:flex hidden gap-5 font-semibold">
            {items.map((item, idx) => (
              <li
                key={idx}
                className=" hover:text-rose-600 text-sm flex items-center gap-2"
              >
                <span className="h-5 w-5">{item.icon}</span>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>

          <CommandMenu />
          <ThemeToggle />
          <MobileNav items={items} />
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Link
      href="/"
      aria-label="Back to homepage"
      className=" flex md:justify-center justify-start items-center gap-3"
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-rose-600 text-white">
        <Flower2 />
      </div>
      <span className="self-center text-2xl font-semibold">Inators UI</span>
    </Link>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="flex justify-center items-center"
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

function MobileNav({
  items,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="lg:hidden sticky z-50 top-0">
        <Button variant={"ghost"} size={"icon"} onClick={() => setOpen(true)}>
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[70vw] pt-10">
        <div className="flex flex-col justify-start w-full gap-3">
          {items.map((link, idx) => (
            <Button
              variant={"ghost"}
              size={"lg"}
              key={idx}
              className={cn(
                "flex justify-start items-center gap-4 px-4 font-medium",
                pathname === link.href ? "bg-red-200 dark:bg-red-900 " : ""
              )}
              onClick={() => setOpen(false)}
            >
              <span>{link.icon}</span>
              <Link href={link.href} className="md:text-xl text-base">
                {link.title}
              </Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
