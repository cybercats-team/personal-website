import Contacts, { ContactsProps } from "@/app/_ui/Contacts";

export default function FooterContacts({ contacts }: ContactsProps) {
  return (
    <Contacts
      contacts={contacts}
      iconSize={14}
      linkProps={{ size: "1" }}
      include={["email", "telegram", "linkedin"]}
    />
  )
}