import Types from "@/app/inators/list";
import { SidebarNavItem } from "@/types/nav";

interface DocsConfig {
  sidebarNav: SidebarNavItem[];
  sectionsNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  sidebarNav: [
    {
      title: "Instructions",
      items: [
        {
          title: "Welcome",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
      ],
    },
    {
      title: "Components",

      items: [
        ...Types.map((type) => ({
          title: type.component,
          //   items: type.types.map((t) => ({
          //     title: t.name,
          //     href: `/docs/components/${t.name.toLowerCase()}`,
          //     items: [],
          //   })),
          href: `/inators/${type.component.toLowerCase()}`,
          items: [],
        })),
      ],
    },
  ],

  sectionsNav: [
    {
      title: "Sections Introduction",
      items: [
        {
          title: "Introduction",
          href: "/sections",
          items: [],
        },
        {
          title: "Installation",
          href: "/sections/installation",
          items: [],
        },
      ],
    },

    {
      title: "Page Sections",
      items: [
        {
          title: "Hero",
          href: "/sections/hero",
          items: [],
        },
        {
          title: "Header",
          href: "/sections/header",
          items: [],
        },
      ],
    },
  ],
};
