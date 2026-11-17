'use client';

import {
  Box,
  Card,
  Container,
  Flex,
  Text
} from "@radix-ui/themes";

import { InlineNav, PopoverNav } from "@/components/Header/Nav";
import ThemeSwitch from "@/components/Header/ThemeSwitch";

export default function Header() {
  return (
    <Box
      position="sticky"
      top="0"
      width="100%"
      style={{ zIndex: 1 }}
    >
      <Card size="2" variant="surface">
        <Container size="3">
          <Flex
            align="center"
            justify="between"
            gap="3"
            wrap="nowrap"
            width="100%"
          >
            {/* LEFT: mobile hamburger + name; desktop name only */}
            <Flex
              align="center"
              gap="2"
              flexShrink="0"
              wrap="nowrap"
            >
              <PopoverNav />
              <Box flexShrink="0">
                <Text weight="bold" size="3">
                  Oleksii Serdiukov
                </Text>
              </Box>
            </Flex>

            {/* DESKTOP NAVIGATION */}
            <InlineNav />

            {/* THEME SWITCH: always on the right */}
            <ThemeSwitch />
          </Flex>
        </Container>
      </Card>
    </Box>    
  )
}