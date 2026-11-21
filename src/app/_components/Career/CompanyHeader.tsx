import { type PropsWithChildren } from "react";

import {
  Flex,
  Heading,
  Text
} from "@radix-ui/themes";

import { type Company } from "@/api/career";

export type CompanyHeaderProps = {  
  company?: Company;
}

export default function CompanyHeader({ company, children }: PropsWithChildren<CompanyHeaderProps>) {
  return (
    <Flex
      align="center"
      justify="between"
      gap="3"
      wrap="wrap"
    >
      <Flex direction="column" gap="1" flexGrow="1">
        <Flex align="center" gap="2" wrap="wrap">
          <Heading size="4">
            {company?.title}
          </Heading>
          {children}
        </Flex>
        <Text
          as="div"
          size="2"
          color="gray"
        >
          {company?.timeline}
        </Text>        
      </Flex>
    </Flex>
  )
}
