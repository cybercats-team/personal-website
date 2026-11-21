import {
  Flex,
  RadioCards,
  Text
} from "@radix-ui/themes";

import { type Company } from "@/api/career";

export type CompanyListProps = {
  career?: Company[];
}

export default function CompanyList({ career }: CompanyListProps) {
  return career?.map((company) => (
    <RadioCards.Item
      key={company.id}
      value={String(company.id)}
      style={{ cursor: "pointer" }}
    >
      <Flex
        direction="column"
        align="start"
        gap="1"
        width="100%"
      >
        <Text as="div" size="2" weight="bold">
          {company.title}
        </Text>
        <Text as="div" size="1" color="gray">
          {company.timeline}
        </Text>        
      </Flex>
    </RadioCards.Item>
  ))
}