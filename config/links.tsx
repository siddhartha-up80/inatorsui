import { BookOpen, Component, MessagesSquare } from "lucide-react";

export const links = [
  {
    title: "Components",
    icon: (
      <Component className="h-full w-full text-rose-500 dark:text-rose-300" />
    ),
    href: "/inators",
  },
  {
    title: "Documentation",
    icon: (
      <BookOpen className="h-full w-full text-rose-500 dark:text-rose-300" />
    ),
    href: "/docs",
  },
  {
    title: "Feedback",
    icon: (
      <MessagesSquare className="h-full w-full text-rose-500 dark:text-rose-300" />
    ),
    href: "/contact",
  },
];
