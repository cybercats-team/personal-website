import { ComponentProps } from "react";

import {
  Flex,
  Link,
  Text
} from "@radix-ui/themes";

import {
  ArrowUpIcon,
  CalendarIcon,
  ChatBubbleIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  Link2Icon,
  LinkedInLogoIcon,
  MobileIcon,
  PaperPlaneIcon,
  PersonIcon
} from "@radix-ui/react-icons";

import { ContactInfo } from "@/api/info";

const socialIcons: Record<string, typeof ArrowUpIcon> = {
  email: EnvelopeClosedIcon,
  phone: MobileIcon,
  linkedin: LinkedInLogoIcon,
  upwork: Link2Icon,
  github: GitHubLogoIcon,
  telegram: PaperPlaneIcon,
  viber: ChatBubbleIcon,
  gravatar: PersonIcon,
  calendly: CalendarIcon
}

export type ContactsProps = {
  contacts: ContactInfo[];
}

export type ContactsPropsEx = {
  iconSize: number;
  linkProps: Partial<ComponentProps<typeof Link>>;
  include?: string[];
  labelProps?: Partial<ComponentProps<typeof Text>>;
}

export default function Contacts({
  contacts, iconSize, linkProps, include, labelProps
}: ContactsProps & ContactsPropsEx) {
  const filteredContacts = "undefined" === typeof include
    ? contacts : contacts.filter(({ id }) => include!.includes(id));

  return filteredContacts.map(({ id, label, href }) => {    
    const Icon = socialIcons[id]

    return (
      <Link
        key={id}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={
          href.startsWith("http")
            ? "noreferrer"
            : undefined
        }
        color="gray"
        {...linkProps}
      >
        <Flex align="center" gap="1">
          {(id in socialIcons) ? <Icon width={iconSize} height={iconSize} /> : null}
          {"undefined" === typeof labelProps ? label : <Text {...labelProps}>{label}</Text>}
        </Flex>
      </Link>
    )
  })
}
