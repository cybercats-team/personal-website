import Contacts, { ContactsProps } from "@/app/_ui/Contacts";

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