import { forwardRef, type ComponentProps, type ForwardRefExoticComponent, type RefAttributes } from "react";

import {
  type IconProps,
  Flex,
  Link,
  Text
} from "@radix-ui/themes";

import {
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

import { type InfoContact, ContactType } from "@/api/info";

export type IconType = ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;

const socialIcons: Record<ContactType, IconType> = {
  [ContactType.kUnspecified]: forwardRef(function NoIcon () { return null; }),
  [ContactType.kEmail]:       EnvelopeClosedIcon,
  [ContactType.kPhone]:       MobileIcon,
  [ContactType.kLinkedIn]:    LinkedInLogoIcon,
  [ContactType.kUpWork]:      Link2Icon,
  [ContactType.kGitHub]:      GitHubLogoIcon,
  [ContactType.kTelegram]:    PaperPlaneIcon,
  [ContactType.kViber]:       ChatBubbleIcon,
  [ContactType.kGravatar]:    PersonIcon,
  [ContactType.kGoogleMeet]:  CalendarIcon
}

export type ContactsProps = {
  contacts: InfoContact[];
}

export type ContactsPropsEx = {
  iconSize: number;
  linkProps: Partial<ComponentProps<typeof Link>>;
  include?: ContactType[];
  labelProps?: Partial<ComponentProps<typeof Text>>;
}

const formatLabel = ({ type, account }: InfoContact): string => {
  switch (type) {
    case ContactType.kUpWork:
      return "Upwork";
    case ContactType.kLinkedIn:
      return account.replace(/\-[0-9a-f]+$/, "");
    default:
      return account;
  }
}

export default function Contacts({
  contacts, iconSize, linkProps, include, labelProps
}: ContactsProps & ContactsPropsEx) {
  const filteredContacts = "undefined" === typeof include
    ? contacts : contacts.filter(({ type }) => include!.includes(type));

  return filteredContacts.map((contact: InfoContact) => {    
    const { type, url } = contact;
    const Icon = socialIcons[type]
    const isHttp = url.startsWith("http")
    const label = formatLabel(contact);    

    return (
      <Link
        key={type}
        href={url}
        target={isHttp ? "_blank" : undefined}
        rel={isHttp ? "noreferrer" : undefined}
        color="gray"
        {...linkProps}
      >
        <Flex align="center" gap="1">
          {(type in socialIcons) ? <Icon width={iconSize} height={iconSize} /> : null}
          {"undefined" === typeof labelProps ? label : <Text {...labelProps}>{label}</Text>}
        </Flex>
      </Link>
    )
  })
}
