//

import { ModeToggle } from "@/components/modeToggle";
import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-container py-4 border-b mb-6 border-primary/15">
      {/* LEFT SIDE */}
      <div>
        <Link
          href={"/"}
          className="uppercase text-xl font-bold text-primary hover:text-rose-500"
        >
          Library
        </Link>
      </div>

      {/* MIDDLE */}
      <NavLinks />

      {/* RIGHT SIDE */}
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
}
