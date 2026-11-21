import {
  Box,
  Card,
  Flex,
  Heading,
  Separator,
  Text
} from "@radix-ui/themes";

import { type CompanyProject } from "@/api/career";

export type ProjectProps = {
  project: CompanyProject;
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
      >
        <Flex
          direction="column"
          gap="3"
          height="100%"
        >          
          <Heading size="3">
            {project.summary}
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
          <Flex direction="column" gap="1">
            <Text
              as="div"
              size="1"
              weight="bold"
              color="gray"
            >
              TASKS
            </Text>
            <Text as="div" size="2">
              {project.tasks.map(({ id, content }) => (
                <Flex
                  key={`${project.id}-${id}`}
                  align="start"
                  gap="2"
                >
                  <Text color="teal" weight="bold" size="2">
                    &bull;
                  </Text>
                  <Text size="2">{content}</Text>
                </Flex>
              ))}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Card>
  )
}