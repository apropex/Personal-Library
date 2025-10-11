"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Dashboard",
    href: "/dashboard/home",
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn("bg-primary/20 py-0.5 px-2 rounded hover:bg-primary/90", {
            "bg-primary/90 text-white hover:bg-primary": pathname === link.href,
          })}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
