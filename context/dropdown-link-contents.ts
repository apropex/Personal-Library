import { iDropdownLinkContent } from "@/types";

const shadcnGroups = [
  {
    title: "Blocks",
    groups: [
      {
        title: "5173",
        href: "http://localhost:5173",
        target: "_blank",
      },
      {
        title: "3000",
        href: "http://localhost:3000",
        target: "_blank",
      },
    ],
  },
  {
    title: "Components",
    groups: [
      {
        title: "5000",
        href: "http://localhost:5000",
        target: "_blank",
      },
      {
        title: "8000",
        href: "http://localhost:8000",
        target: "_blank",
      },
    ],
  },
];

export const dropdownLinkContent: iDropdownLinkContent[] = [
  // Localhost
  {
    title: "ShadCN",
    options: shadcnGroups,
  },
  {
    title: "DotCN",
    options: shadcnGroups,
  },

  //
];
