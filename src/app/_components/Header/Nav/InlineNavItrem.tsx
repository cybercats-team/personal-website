'use client';

import {
  Link
} from "@radix-ui/themes";

import { NavItemProps } from "@/app/_components/Header/Nav/_types";
import useScrollIntoView from "@/hooks/useScrollIntoView";

export default function InlineNavItem({ item }: NavItemProps) {
  const onClick = useScrollIntoView();

  return (
    <Link
      href={`#${item.id}`}
      size="2"
      color="gray"
      underline="hover"
      onClick={onClick}
    >
      {item.label}
    </Link>    
  )
}