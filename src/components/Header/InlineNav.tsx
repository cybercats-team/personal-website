'use client';

import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import {
  Box,
  Flex,
  Link
} from "@radix-ui/themes";

import { GetNavItems } from "@/storage/nav";

export default function InlineNav() {
  const navItems = GetNavItems();

  return (
    <Flex
      display={{ initial: "none", md: "flex" }}
      flexGrow="1"
      justify="end"
      minWidth="0"
    >
      <NavigationMenu.Root orientation="horizontal">
        <NavigationMenu.List asChild>
          <Flex
            as="div"
            role="list"
            align="center"
            justify="end"
            gap="3"
            wrap="wrap"
          >
            {navItems.map((item) => (
              <NavigationMenu.Item
                key={item.id}
                asChild
              >
                <Box as="div" role="listitem">
                  <NavigationMenu.Link asChild>
                    <Link
                      href={`#${item.id}`}
                      size="2"
                      color="gray"
                      underline="hover"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenu.Link>
                </Box>
              </NavigationMenu.Item>
            ))}
          </Flex>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </Flex>
  )
}