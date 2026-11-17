import Contacts, { ContactsProps } from "@/ui/Contacts";

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