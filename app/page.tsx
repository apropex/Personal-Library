//

import DropdownList from "@/components/DropdownMenu";
import Navbar from "@/components/layouts/navbar/Navbar";
import { linkContent } from "@/context/link-content";
import { cn } from "@/lib/utils";
import chunkMaker from "@/utils/chunkMaker";
import joinString from "@/utils/joinString";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const linkContentChunk = chunkMaker(linkContent, Math.ceil(linkContent.length / 7));

  return (
    <div className="">
      <Navbar />

      <div className="p-container">
        <h1 className="uppercase text-2xl text-center font-bold mb-8 text-black/80 dark:text-white/80">
          Quick Links
        </h1>

        <div className="border-b mb-5 pb-2">
          <DropdownList />
        </div>

        <div className="grid grid-cols-7 gap-3">
          {linkContentChunk.map((chunk, i) => (
            <div key={i} className="space-y-3">
              {chunk.map(({ title, options }, i) => (
                <div
                  key={i}
                  className=" p-3 rounded-[8px] inset-shadow-[0px_0px_10px_rgba(0,0,0,0.2)] dark:inset-shadow-[0px_0px_10px_rgba(0,255,0,0.3)]"
                >
                  <h3 className="text-rose-500 border-b mb-2 font-medium">{title}</h3>
                  <div className="flex flex-col gap-1">
                    {options.map((option, i) => (
                      <Link
                        key={i}
                        href={option.href}
                        target={option.target}
                        className={cn(
                          "flex items-center gap-1.5 text-foreground dark:text-[#00e732] hover:text-rose-500 dark:hover:text-rose-500 transition-all duration-200 cursor-pointer text-sm",
                          option.class
                        )}
                      >
                        {option.icon ? (
                          <Image
                            src={option.icon}
                            alt={joinString(option.title, " image")}
                            width={20}
                            height={20}
                            className={cn(
                              "size-4 p-[1px] rounded-full object-cover",
                              option.iconClass
                            )}
                          />
                        ) : (
                          <span className="size-5" />
                        )}
                        {option.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
