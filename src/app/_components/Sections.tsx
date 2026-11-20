import {
  Flex,
  Text
} from "@radix-ui/themes";

import { getSections } from "@/api/section";
import Section from "@/app/_ui/Section";

export default async function Sections() {
  'use cache';
  const sections = await getSections();

  return sections.map(({ id: sectionId, title, points }) => (
    <Section 
      key={sectionId}
      id={sectionId}
      heading={title}    
    >
      {points.map(({ id, content }) => (
        <Flex
          key={`${sectionId}-${id}`}
          align="start"
          gap="2"
        >
          <Text color="teal" weight="bold">
            &bull;
          </Text>
          <Text size="3">{content}</Text>
        </Flex>
      ))}
    </Section>
  ));
}