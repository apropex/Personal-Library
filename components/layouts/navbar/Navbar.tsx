//

import ThemeSwitcher from "@/components/ui/sky-toggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-container py-4 border-b mb-6 border-primary/15">
      {/* LEFT SIDE */}
      <div>
        <Link href={"/"} className="uppercase text-xl font-bold text-primary hover:text-rose-500">
          Library
        </Link>
      </div>

      {/* MIDDLE */}
      <div></div>

      {/* RIGHT SIDE */}
      <div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
