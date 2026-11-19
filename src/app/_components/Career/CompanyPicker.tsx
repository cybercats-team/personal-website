'use client';

import { type PropsWithChildren, useState } from "react";

import {
  Flex,
  Heading,
  IconButton,
  Popover,
  RadioCards,
  ScrollArea
} from "@radix-ui/themes";

import {
  ChevronDownIcon
} from "@radix-ui/react-icons";

import { type CompanyID } from "@/hooks/useSelectedCompany";

export type CompanyPickerProps = {  
  companyId?: CompanyID;
  setCompanyId: (id: CompanyID) => void;
}

export default function CompanyPicker({ companyId, setCompanyId, children }: PropsWithChildren<CompanyPickerProps>) {
  const [pickerOpen, setPickerOpen] = useState(false);
  
  const onCompanySelected = (value: CompanyID) => {
    setCompanyId(value);
    setPickerOpen(false);
  }

  return (
    <Popover.Root
      open={pickerOpen}
      onOpenChange={setPickerOpen}
    >
      <Popover.Trigger>
        <IconButton
          variant="soft"
          color="gray"
          size="2"
          radius="full"
          aria-label="Select company"
          title="Select company"
        >
          <ChevronDownIcon />
        </IconButton>
      </Popover.Trigger>
      <Popover.Content
        align="start"
        side="bottom"
        sideOffset={8}
        width="360px"
        maxWidth="calc(100vw - 32px)"
        maxHeight="360px"
        size="2"
      >
        <Flex direction="column" gap="3">
          <Heading size="3">
            Select a company
          </Heading>
          <ScrollArea
            type="always"
            scrollbars="vertical"
            size="2"
            style={{ width: "100%", height: 280 }}
          >
            <Flex
              direction="column"
              gap="2"
              p="1"
              pr="4"
            >
              <RadioCards.Root
                columns="1"
                gap="2"
                size="2"
                color="teal"
                value={companyId}
                onValueChange={onCompanySelected}
              >
                {children}
              </RadioCards.Root>
            </Flex>
          </ScrollArea>

        </Flex>
      </Popover.Content>
    </Popover.Root>
  )
}