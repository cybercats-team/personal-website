import {
  Box,
  Card,
  Flex,
  Heading,
  Separator,
  Text
} from "@radix-ui/themes";

import { type CareerProject } from "@/api/career";

export type ProjectProps = {
  project: CareerProject;
}

export default function Project({ project }: ProjectProps) {
  return (
    <Card
      asChild
      size="3"
      variant="surface"
    >
      <Box
        width="100%"
        minWidth="0"
        height="320px"
      >
        <Flex
          direction="column"
          gap="3"
          height="100%"
        >          
          <Heading size="3">
            {project.name}
          </Heading>
          <Separator size="4" />
          <Flex direction="column" gap="1">
            <Text
              as="div"
              size="1"
              weight="bold"
              color="gray"
            >
              ROLE
            </Text>
            <Text as="div" size="2">
              {project.role}
            </Text>
          </Flex>
          <Flex direction="column" gap="1">
            <Text
              as="div"
              size="1"
              weight="bold"
              color="gray"
            >
              STACK
            </Text>
            <Text as="div" size="2">
              {project.stack}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Card>
  )
}