'use client';

import { useState } from "react";

import {
  Box,
  Flex,
  IconButton,
  Link,
  Popover
} from "@radix-ui/themes";

import {
  HamburgerMenuIcon
} from "@radix-ui/react-icons";

import { GetNavItems } from "@/storage/nav";

export default function PopoverNav() {
  const navItems = GetNavItems();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Box display={{ initial: "block", md: "none" }}>
      <Popover.Root
        open={mobileMenuOpen}
        onOpenChange={setMobileMenuOpen}
      >
        <Popover.Trigger>
          <IconButton
            variant="soft"
            color="gray"
            radius="full"
            size="2"
            title="Navigation menu"
          >
            <HamburgerMenuIcon />
          </IconButton>
        </Popover.Trigger>

        <Popover.Content
          align="start"
          side="bottom"
          sideOffset={8}
          width="min(280px, calc(100vw - 24px))"
          size="2"
        >
          <Flex direction="column" gap="3">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                size="3"
                color="gray"
                underline="hover"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </Flex>
        </Popover.Content>
      </Popover.Root>
    </Box>
  );
}