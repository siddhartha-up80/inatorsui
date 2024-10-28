"use client";

import Types from "@/app/inators/list";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const BreadcrumbTop = () => {
  const pathname = usePathname();

  return (
    <Breadcrumb className="">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              Components
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="max-h-[70vh] overflow-y-scroll"
            >
              {Types.map((item, idx) => (
                <DropdownMenuItem
                  key={idx}
                  className={cn(
                    pathname.split("/").slice(2).join("/") === item.component
                      ? "text-red-500 dark:text-red-300 capitalize"
                      : "capitalize"
                  )}
                >
                  <Link href={`/inators/${item.component}`}>
                    {item.component}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        {pathname.split("/").slice(2).join("/") && <BreadcrumbSeparator />}

        {pathname.split("/").slice(2).join("/") && (
          <BreadcrumbItem>
            <BreadcrumbPage
              className={cn("text-red-500 dark:text-red-300 capitalize")}
            >
              {pathname.split("/").slice(2).join("/")}
            </BreadcrumbPage>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbTop;
