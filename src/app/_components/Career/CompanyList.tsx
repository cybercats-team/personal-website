import {
  Flex,
  RadioCards,
  Text
} from "@radix-ui/themes";

import { type Career } from "@/api/career";

export type CompanyListProps = {
  career?: Career[];
}

export default function CompanyList({ career }: CompanyListProps) {
  return career?.map((company) => (
    <RadioCards.Item
      key={company.name}
      value={company.name}
    >
      <Flex
        direction="column"
        align="start"
        gap="1"
        width="100%"
      >
        <Text as="div" size="2" weight="bold">
          {company.name}
        </Text>
        <Text as="div" size="1" color="gray">
          {company.timeline}
        </Text>
        <Text as="div" size="1" color="gray">
          {company.role}
        </Text>
      </Flex>
    </RadioCards.Item>
  ))
}