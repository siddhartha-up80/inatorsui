"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Types from "./list";

const components = Types.map((type) => {
  return type.component;
}).sort();

const InatorsNav = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredComponents, setFilteredComponents] = useState(components);

  const filterComponents = () => {
    const filtered = components.filter((component) =>
      component.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (searchTerm === "") {
      setFilteredComponents(components);
    } else {
      setFilteredComponents(filtered);
    }
  };

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredComponents(components);
    }
  }, [searchTerm]);

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
          {filteredComponents.map((component, index) => {
            return (
              <Link href={`/inators/${component}`} key={index}>
                <Button className="shadow-md">{component}</Button>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default InatorsNav;
