export type NavItem = {
  id: string;
  label: string;
};

export const GetNavItems = (): NavItem[] => [
  { id: "about",        label: "About" },
  { id: "expertise",    label: "Expertise" },
  { id: "tech-stacks",  label: "Tech stacks" },
  { id: "tech-skills",  label: "Tech skills" },
  { id: "architecture", label: "Architecture" },
  { id: "leadership",   label: "Leadership" },
  { id: "offer",        label: "I offer" },
  { id: "career",       label: "Career" },
];