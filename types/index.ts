import * as React from "react";

export interface iChildren {
  children: React.ReactNode;
}

export interface iLinkOption {
  title: string;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  class?: string;
  iconClass?: string;
  icon?: string;
}

export interface iLinkContent {
  title: string;
  options: iLinkOption[];
}

export interface iDropdownGroup {
  title: string;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  class?: string;
  iconClass?: string;
  icon?: string;
}

export interface iDropdownOption {
  title: string;
  groups: iDropdownGroup[];
}

export interface iDropdownLinkContent {
  title: string;
  options: iDropdownOption[];
}
