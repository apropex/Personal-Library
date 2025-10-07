import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { dropdownLinkContent } from "@/context/dropdown-link-contents";
import { cn } from "@/lib/utils";
import joinString from "@/utils/joinString";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

export default function DropdownList() {
  return (
    <div className="flex flex-wrap gap-2">
      {dropdownLinkContent?.map((contents, i) => (
        <DropdownMenu key={i}>
          <DropdownMenuTrigger
            asChild
            className="outline-none focus-within:outline-none focus:outline-none"
          >
            <button
              type="button"
              className="text-sm py-1.5 px-2 border rounded-[7px] cursor-pointer hover:border-rose-500/30"
            >
              {contents.title}
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-60 mt-4" align="start">
            {contents?.options?.map((content, i) => (
              <React.Fragment key={i}>
                <DropdownMenuLabel className="text-rose-500">
                  {content.title}
                </DropdownMenuLabel>
                <DropdownMenuGroup>
                  {content?.groups?.map((group, j) => (
                    <DropdownMenuItem key={j} asChild>
                      <Link
                        href={group.href}
                        target={group.target}
                        className={cn(
                          "text-foreground dark:text-[#00e732] hover:text-rose-500 dark:hover:text-rose-500 transition-all duration-200 cursor-pointer",
                          group.class
                        )}
                      >
                        {group.icon ? (
                          <Image
                            src={group.icon}
                            alt={joinString(group.title, " image")}
                            width={20}
                            height={20}
                            className={cn(
                              "size-5 p-[1px] border rounded-full object-cover",
                              group.iconClass
                            )}
                          />
                        ) : (
                          <span className="size-5" />
                        )}
                        {group.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
                {i + 1 !== contents.options.length && <DropdownMenuSeparator />}
              </React.Fragment>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </div>
  );
}
