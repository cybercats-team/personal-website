import Contacts, { ContactsProps } from "@/ui/Contacts";

export default function InfoContacts({ contacts }: ContactsProps) {
  return (
    <Contacts
      contacts={contacts}
      iconSize={16}
      linkProps={{ underline: "hover" }}
      labelProps={{ size: "2" }}
    />
  )
}