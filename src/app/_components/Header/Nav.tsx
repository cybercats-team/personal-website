import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import {
  Box,
  Flex,
  IconButton,
  Popover
} from "@radix-ui/themes";

import {
  HamburgerMenuIcon
} from "@radix-ui/react-icons";

import { GetNavItems } from "@/store/nav";
import PopoverNavItem from "@/app/_components/Header/Nav/PopoverNavItem";
import { PopoverNavProvider } from "@/app/_providers/PopoverNav";
import InlineNavItem from "./Nav/InlineNavItem";

const navItems = GetNavItems();

export const InlineNav = () => (
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
                  <InlineNavItem item={item} />
                </NavigationMenu.Link>
              </Box>
            </NavigationMenu.Item>
          ))}
        </Flex>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  </Flex>
);

export const PopoverNav = () => (
  <Box display={{ initial: "block", md: "none" }}>
    <PopoverNavProvider>
      <Popover.Trigger>
        <IconButton
          variant="soft"
          color="gray"
          radius="full"
          size="2"
          style={{ cursor: "pointer" }}
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
          {navItems.map((item) => <PopoverNavItem item={item} key={item.id} />)}
        </Flex>
      </Popover.Content>
    </PopoverNavProvider>
  </Box>
);