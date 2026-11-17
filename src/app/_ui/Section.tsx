import type { ComponentProps, PropsWithChildren } from "react";

import {
  Box,
  Card,
  Flex,
  Heading,
  Separator
} from "@radix-ui/themes";

export type SectionProps = {
  id: string;
  heading: string;
  wrapperProps?: Partial<ComponentProps<typeof Flex>>;
  containerProps?: Partial<ComponentProps<typeof Flex>>
};

export default function Section({ id, heading, wrapperProps = {}, containerProps = {}, children }: PropsWithChildren<SectionProps>) {
  return (
    <Box id={id}>
      <Card size="3">
        <Flex direction="column" gap="3" {...wrapperProps}>
          <Heading size="5">
            {heading}
          </Heading>
          <Separator size="4" />
          <Flex direction="column" gap="2" {...containerProps}>
            {children}
          </Flex>
        </Flex>
      </Card>
    </Box>
  )
}