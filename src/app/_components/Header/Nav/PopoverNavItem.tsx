'use client';

import { use } from "react";

import {
  Link
} from "@radix-ui/themes";

import { PopoverNavContext } from "@/app/_providers/PopoverNav";
import useScrollIntoView from "@/hooks/useScrollIntoView";
import type { NavItemProps } from "@/app/_components/Header/Nav/_types";

export default function PopoverNavItem ({ item }: NavItemProps) {
  const setMobileMenuOpen = use(PopoverNavContext);
  const onItemClick = useScrollIntoView(() => setMobileMenuOpen(false));

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