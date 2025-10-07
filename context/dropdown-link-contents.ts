import { iDropdownLinkContent } from "@/types";
import { iDropdownOption } from "./../types/index";

const shadcnGroups: iDropdownOption[] = [
  {
    title: "Blocks",
    groups: [
      {
        title: "Shadcn UI Blocks",
        href: "https://www.shadcnblocks.com/",
        target: "_blank",
        icon: "https://i.ibb.co.com/1G5xKrCx/shadcnblocks.png",
        iconClass: "bg-white",
      },
      {
        title: "3000",
        href: "http://localhost:3000",
        target: "_blank",
        icon: "https://i.ibb.co.com/7tYzvDT7/nextjs-icon.webp",
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
        icon: "https://i.ibb.co.com/7tYzvDT7/nextjs-icon.webp",
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
