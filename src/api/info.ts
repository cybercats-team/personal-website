export type ContactInfo = {
  id: string;
  label: string;
  href: string;
};

export type Info = {
  contacts: ContactInfo[];
};

export const getInfo = (): Info => {
  const contacts: ContactInfo[] = [
    {
      id: "email",
      label: "email",
      href: "mailto:alexcyberneticist@gmail.com",
    },
    {
      id: "phone",
      label: "phone",
      href: "tel:+380639549357",
    },
    {
      id: "linkedin",
      label: "linkedin",
      href: "#"
    },
    {
      id: "upwork",
      label: "upwork",
      href: '#',
    },
    {
      id: "github",
      label: "github",
      href: '#',
    },
    {
      id: "telegram",
      label: "telegram",
      href: '#',
    },
    {
      id: "viber",
      label: "viber",
      href: '#',
    },
    {
      id: "gravatar",
      label: "gravatar",
      href: '#',
    },
    {
      id: "calendly",
      label: "calendly",
      href: '#',
    },
  ].filter((contact) => Boolean('#' !== contact.href));

  return { contacts };
};