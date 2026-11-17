import {
  Box,
  Card,
  Container,
  Flex,
  Text
} from "@radix-ui/themes";

import { InlineNav, PopoverNav } from "@/app/_components/Header/Nav";
import ThemeSwitch from "@/app/_components/Header/ThemeSwitch";

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
            <InlineNav />
            <ThemeSwitch />
          </Flex>
        </Container>
      </Card>
    </Box>    
  )
}