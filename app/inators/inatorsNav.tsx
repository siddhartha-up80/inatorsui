"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";

const components = [
  {
    name: "Article",
    path: "/inators/article",
  },
  {
    name: "Banner",
    path: "/inators/banner",
  },
  {
    name: "Blog",
    path: "/inators/blog",
  },
  {
    name: "Breadcrumb",
    path: "/inators/breadcrumb",
  },
  {
    name: "Button",
    path: "/inators/button",
  },
  {
    name: "Call to action",
    path: "/inators/calltoaction",
  },
  {
    name: "Card",
    path: "/inators/card",
  },
  {
    name: "Carousel",
    path: "/inators/carousel",
  },
  {
    name: "Contact",
    path: "/inators/contact",
  },{
    name: "Dialog",
    path: "/inators/dialog",
  },
  {
    name: "Error",
    path: "/inators/error",
  },
  {
    name: "Faq",
    path: "/inators/faq",
  },
  {
    name: "Feature",
    path: "/inators/feature",
  },
  {
    name: "Footer",
    path: "/inators/footer",
  },
  {
    name: "Form",
    path: "/inators/form",
  },
  {
    name: "Gallery",
    path: "/inators/gallery",
  },
  {
    name: "Hero",
    path: "/inators/hero",
  },
  {
    name: "Input",
    path: "/inators/input",
  },
  {
    name: "Loading",
    path: "/inators/loading",
  },
  {
    name: "Login",
    path: "/inators/login",
  },
 {
    name: "Navbar",
    path: "/inators/navbar",
  },
  {
    name: "Pagination",
    path: "/inators/pagination",
  },
  {
    name: "Pricing",
    path: "/inators/pricing",
  },
  {
    name: "Product",
    path: "/inators/product",
  }, {
    name: "Profile",
    path: "/inators/profile",
  },
  {
    name: "Review",
    path: "/inators/review",
  },
  {
    name: "Shopping cart",
    path: "/inators/shoppingcart",
  },
  {
    name: "Sidebar",
    path: "/inators/sidebar",
  },

  {
    name: "Snackbar Alerts",
    path: "/inators/snackbar",
  },
  {
    name: "Stats",
    path: "/inators/stats",
  },
  {
    name: "Steps",
    path: "/inators/steps",
  },
  {
    name: "Table",
    path: "/inators/table",
  },
  {
    name: "Tabs",
    path: "/inators/tabs",
  },
  {
    name: "Team",
    path: "/inators/team",
  },
  {
    name: "Testimonial",
    path: "/inators/testimonial",
  },
  {
    name: "Toggle",
    path: "/inators/toggle",
  },
  {
    name: "Weather",
    path: "/inators/weather",
  },
];

const InatorsNav = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredComponents, setFilteredComponents] = useState(components);

  const filterComponents = () => {
    const filtered = components.filter((component) =>
      component.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredComponents(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto container">
      <section className="py-6 ">
        <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
          <div className="flex flex-col space-y-4 text-center lg:text-left">
            <h1 className="text-5xl font-bold leadi">Components</h1>
            {/* <p className="text-lg">157 components in 41 categories</p> */}
          </div>
          <div className="flex flex-row items-center self-center justify-center flex-shrink-0 lg:justify-end">
            <div className="flex flex-row">
              <Input
                type="text"
                placeholder="filter components"
                className="px-2 rounded-l-lg shadow-md "
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  filterComponents();
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    filterComponents();
                  }
                }}
              />
              <Button
                type="button"
                className="font-semibold bg-rose-600 shadow-md"
                onClick={filterComponents}

              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap gap-2 justify-center">
          {filteredComponents.map((component) => {
            return (
              <Link href={component.path} key={component.name}>
                <Button className="shadow-md">{component.name}</Button>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default InatorsNav;
