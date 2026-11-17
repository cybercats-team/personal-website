'use client';

import { use } from "react";

import {
  Link
} from "@radix-ui/themes";

import { NavItem } from "@/storage/nav";
import { PopoverNavContext } from "@/app/_providers/PopoverNav";

export type PopoverNavItemProps = {
  item: NavItem;
};

export default function PopoverNavItem ({ item }: PopoverNavItemProps) {
  const setMobileMenuOpen = use(PopoverNavContext);
  const onItemClick = () => setMobileMenuOpen(false);

  return (
    <Link      
      href={`#${item.id}`}
      size="3"
      color="gray"
      underline="hover"
      onClick={onItemClick}
    >
      {item.label}
    </Link>
  );
}