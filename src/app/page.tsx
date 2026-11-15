'use client';

import { use, useState } from "react";

import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  IconButton,
  Link,
  ScrollArea,
  Separator,
  Text,  
} from "@radix-ui/themes";

import {
  CalendarIcon,
  ChatBubbleIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  Link2Icon,
  MobileIcon,
  MoonIcon,
  PaperPlaneIcon,
  PersonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { AppearanceContext } from "./appearance";

export default function Home({
  photoUrl = "",
  contactLinks = {},
}) {
  const { appearance, toggleAppearance } = use(AppearanceContext);

  // --------------------------------------------------
  // Data
  // --------------------------------------------------

  const navItems = [
    { id: "about", label: "About" },
    { id: "expertise", label: "Expertise" },
    { id: "tech-stacks", label: "Tech stacks" },
    { id: "tech-skills", label: "Tech skills" },
    { id: "architecture", label: "Architecture" },
    { id: "leadership", label: "Leadership" },
    { id: "expectations", label: "Expectations" },
    { id: "career", label: "Career" },
  ];

  const sections = [
    {
      id: "expertise",
      title: "EXPERTISE",
      items: [
        "21 years of experience as a software engineer",
        "16 years as full-stack developer at Web",
        "11 years as team lead/architect",
        "9 years as mobile developer (hybrid/RN/native)",
        "3.5 years as blockchain developer (Ethereum)",
      ],
    },
    {
      id: "tech-stacks",
      title: "TECH STACKS",
      items: [
        "Full-stack: MEAN / MERN => since 2015",
        "Frontend: Angular => since 2015",
        "Frontend: React + ReactRouter/NextJS/Tanstack + Redux/Zustand/Jotai + Axios/Fetch/SWR => since 2016",
        "Backend: NodeJS + MongoDB/MySQL/PgSQL + ExpressJS/AdonisJS => since 2015",
        "Mobile: ReactNative + ReactNavigation + Undux/Jotai + Axios/Fetch => since 2017",
        "Blockchain: React + EthersJS + Tor.US/WalletConnect + LiFi + Textile/Ceramic/IPFS => since 2020",
      ],
    },
    {
      id: "tech-skills",
      title: "TECH SKILLS",
      items: [
        "Languages: C/C++, JavaScript/TypeScript, Java, Swift, Bash/PowerShell/Python scripting",
        "Methodology: OOP, FP, DRY/KISS, GOF patterns, MVC, MVP, BDD, TDD",
        "Architecture: SOLID",
        "SQL DBMS: MySQL, PgSQL, Oracle",
        "noSQL DBMS: MongoDB, Redis, IndexedDB (Dexie/ThreadDB)",
        "Testing: Jest, GTest, Cypress",
        "DevOPS, CI/CI: Heroku, Netlify, Vercel, Github Actions",
      ],
    },
    {
      id: "architecture",
      title: "ARCHITECTURE",
      items: [
        "Best practices suggested by certain framework/library/technology stack",
        "For OOP-based frameworks: SOLID at design, GoF patterns at implementation",
        "Stick to Thinking in React/Rules of Hooks/Advanced Hooks for React projects",
        "Modular/extensible architecture",
        "Highload optimization (UI / server side)",
        "Business objectives analysis & optimal solutions research",
      ],
    },
    {
      id: "leadership",
      title: "LEADERSHIP",
      items: [
        "Small teams (up to 5-6 people) management experience",
        "Up to 3 projects in rotation (at same time).",
        "Communication, aligning responsibilities with different teams (e.g. QA, design, protocol, DevOps)",
        "Describing & delegating tasks over the team",
        "Code review & suggestions",
        "Mentorship: lectures & standups, presenting new approaches/new technologies, team training",
        "Team growth is my main goal as a leader",
      ],
    },
    {
      id: "expectations",
      title: "EXPECTATIONS",
      items: [
        "Team lead/architect/senior developer role at full-time job",
        "Tech consultant/auditor/senior developer role at part-time job",
        "Remote job only",
        "$4K minimal gross revenue monthly",
      ],
    },
  ];

  // Selected project highlights, not the complete project history.
  const experience = [
    {
      name: "ApriorIT",
      timeline: "Aug 2021 – Oct 2026",
      role:
        "Architect, team lead, senior C++ developer, senior NodeJS developer, React tech consultant",
      projects: [
        {
          name:
            "ERCC (Endpoint Risk & Compliance control) Windows application",
          role:
            "Architect, team lead, senior C++ developer, senior NodeJS developer, React tech consultant",
          stack:
            "C++/Win32/gPRC/NodeJS (main product), React/TanStack/Zustand (dashboard)",
        },
        {
          name:
            "Browser Extension / Security solution for FIDO2 authentication",
          role:
            "Team lead, senior C++ developer, senior React/TypeScript developer, macOS native tech consultant",
          stack:
            "C++/Win32/FIDO2/WebAuthN/TypeScript/JavaScript/React",
        },
        {
          name: "Multi-token wallet app",
          role: "Senior React developer, Senior blockchain developer",
          stack:
            "React/NextJS/Jotai/SWR/EthersJS/LiFi/Web3Onboard",
        },
      ],
    },
    {
      name: "Nordwhale",
      timeline: "Mar 2020 – Aug 2021",
      role:
        "Team lead, Architect, Senior full-stack (MERN) developer, Blockchain developer",
      projects: [
        {
          name: "Official wallet app for crypto token",
          role:
            "Team lead, Architect, Senior full-stack (MERN) developer, Blockchain developer",
          stack:
            "MERN/RN for Web/React Paper/React Navigation/Web3JS/Undux/Axios/Realm/ThreadDB",
        },
      ],
    },
    {
      name: "PortaONE",
      timeline: "Dec 2020 – Feb 2021",
      role: "Team lead, Architect, Senior Angular developer",
      projects: [
        {
          name: "Software VoIP station dashboard",
          role: "Team lead, Architect, Senior Angular developer",
          stack: "Angular",
        },
      ],
    },
    {
      name: "SportLabs",
      timeline: "Jul 2019 – Nov 2019",
      role: "Team lead, Architect, Senior full-stack (MERN) developer",
      projects: [
        {
          name: "Score aggregator app (no betting just information)",
          role: "Team lead, Architect, Senior full-stack (MERN) developer",
          stack: "MERN/Redis/WebSocket",
        },
      ],
    },
    {
      name: "Mobilunity",
      timeline: "Jan 2016 – Jun 2019",
      role: "Team lead, Architect, Senior full-stack (MEAN) developer",
      projects: [
        {
          name: "Relocation platform world-wide",
          role: "Team lead, Architect, Senior full-stack (MEAN) developer",
          stack: "MEAN/Websocket",
        },
      ],
    },
    {
      name: "Intelligent Software",
      timeline: "Nov 2009 – Dec 2015",
      role: "Middle NodeJS developer",
      projects: [
        {
          name: "Product marketplace",
          role: "Middle NodeJS developer",
          stack: "MEAN (Angular v1)",
        },
      ],
    },
    {
      name: "IBPro",
      timeline: "Nov 2008 – Nov 2009",
      role: "Database engineer, Full-stack developer",
      projects: [
        {
          name: "Own-developed CMS",
          role: "Database engineer, Full-stack developer",
          stack: "MySQL/Rails/SenchaJS/jQuery",
        },
      ],
    },
    {
      name: "Vik Oil group",
      timeline: "Jun 2007 – Oct 2008",
      role: "Database engineer, Data analyst",
      projects: [
        {
          name: "Working with Business Warehouse system",
          role: "Database engineer, Data analyst",
          stack: "SAP R/3, SAP BI/BW, DB2",
        },
      ],
    },
    {
      name: "DomikNET",
      timeline: "May 2005 – May 2007",
      role: "Database engineer, C++ developer, PL/SQL developer",
      projects: [
        {
          name: "CRM application development",
          role: "Database engineer, C++ developer, PL/SQL developer",
          stack: "Oracle/PL SQL/Borland C++ Builder",
        },
      ],
    },
  ];

  // --------------------------------------------------
  // Contacts
  // --------------------------------------------------

  const contacts = [
    {
      id: "email",
      label: "email",
      href: "mailto:alexcyberneticist@gmail.com",
      Icon: EnvelopeClosedIcon,
    },
    {
      id: "phone",
      label: "phone",
      href: "tel:+380639549357",
      Icon: MobileIcon,
    },
    {
      id: "linkedin",
      label: "linkedin",
      href: '#',
      Icon: LinkedInLogoIcon,
    },
    {
      id: "upwork",
      label: "upwork",
      href: '#',
      Icon: Link2Icon,
    },
    {
      id: "github",
      label: "github",
      href: '#',
      Icon: GitHubLogoIcon,
    },
    {
      id: "telegram",
      label: "telegram",
      href: '#',
      Icon: PaperPlaneIcon,
    },
    {
      id: "viber",
      label: "viber",
      href: '#',
      Icon: ChatBubbleIcon,
    },
    {
      id: "gravatar",
      label: "gravatar",
      href: '#',
      Icon: PersonIcon,
    },
    {
      id: "calendly",
      label: "calendly",
      href: '#',
      Icon: CalendarIcon,
    },
  ].filter((contact) => Boolean('#' !== contact.href));

  // --------------------------------------------------
  // State
  // --------------------------------------------------

  
  const [activeCompany, setActiveCompany] = useState("ApriorIT");

  const selectedCompany =
    experience.find((company) => company.name === activeCompany) ||
    experience[0];

  const footerContacts = contacts.filter((contact) =>
    ["email", "telegram", "linkedin"].includes(contact.id)
  );

  // --------------------------------------------------
  // Render
  // --------------------------------------------------

  return (    
      <Box minHeight="100vh">

        {/* STICKY HEADER */}

        <Box position="sticky" top="0">
          <Container size="3">
            <Card variant="surface" size="2">
              <Flex
                align="center"
                justify="between"
                gap="3"
                wrap="wrap"
              >
                <Text weight="bold" size="3">
                  Oleksii Serdiukov
                </Text>

                <Box overflowX="auto" flexGrow="1">
                  <Flex                    
                    aria-label="CV navigation"
                    align="center"
                    gap="4"
                    width="max-content"
                  >
                    {navItems.map((item) => (
                      <Link
                        key={item.id}
                        href={`#${item.id}`}
                        size="2"
                        color="gray"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </Flex>
                </Box>

                <IconButton
                  variant="soft"
                  color="gray"
                  radius="full"
                  size="2"
                  aria-label={
                    appearance === "dark"
                      ? "Switch to light theme"
                      : "Switch to dark theme"
                  }
                  onClick={toggleAppearance}
                >
                  {appearance === "dark" ? (
                    <SunIcon width="18" height="18" />
                  ) : (
                    <MoonIcon width="18" height="18" />
                  )}
                </IconButton>
              </Flex>
            </Card>
          </Container>
        </Box>

        {/* PAGE CONTENT */}

        <Container size="3">
          <Flex direction="column" gap="4" py="5">

            {/* ABOUT */}

            <Box id="about">
              <Card size="3">
                <Flex
                  direction={{ initial: "column", sm: "row" }}
                  align={{ initial: "start", sm: "center" }}
                  gap="5"
                >
                  <Avatar
                    src={photoUrl || undefined}
                    fallback="OS"
                    size="8"
                    radius="full"
                  />

                  <Flex direction="column" gap="2" flexGrow="1">
                    <Heading size="7">
                      Oleksii Serdiukov
                    </Heading>

                    <Heading
                      size="4"
                      weight="medium"
                      color="gray"
                    >
                      Senior Software Developer, Team lead, Architect
                    </Heading>

                    <Text color="gray" size="2">
                      Ukraine, Kyiv region, Boiarka
                    </Text>

                    <Flex align="center" gap="2">
                      <Badge color="teal" variant="soft">
                        English: Upper-Intermediate
                      </Badge>
                    </Flex>

                    <Separator size="4" my="2" />

                    <Flex gap="3" wrap="wrap">
                      {contacts.map(({ id, label, href, Icon }) => (
                        <Link
                          key={id}
                          href={href}
                          target={
                            href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            href.startsWith("http")
                              ? "noreferrer"
                              : undefined
                          }
                          color="gray"
                          underline="hover"
                        >
                          <Flex align="center" gap="1">
                            <Icon width="16" height="16" />
                            <Text size="2">{label}</Text>
                          </Flex>
                        </Link>
                      ))}
                    </Flex>
                  </Flex>
                </Flex>
              </Card>
            </Box>

            {/* CV SECTIONS */}

            {sections.map((section) => (
              <Box key={section.id} id={section.id}>
                <Card size="3">
                  <Flex direction="column" gap="3">
                    <Heading size="5">
                      {section.title}
                    </Heading>

                    <Separator size="4" />

                    <Flex direction="column" gap="2">
                      {section.items.map((item, index) => (
                        <Flex
                          key={`${section.id}-${index}`}
                          align="start"
                          gap="2"
                        >
                          <Text color="teal" weight="bold">
                            ·
                          </Text>

                          <Text size="3">{item}</Text>
                        </Flex>
                      ))}
                    </Flex>
                  </Flex>
                </Card>
              </Box>
            ))}

            {/* CAREER */}

            <Box id="career">
              <Card size="3">
                <Flex direction="column" gap="4">
                  <Heading size="5">
                    CAREER HISTORY & PROJECT HIGHLIGHTS
                  </Heading>

                  <Separator size="4" />

                  <Grid
                    columns={{ initial: "1", md: "2" }}
                    gap="4"
                  >

                    {/* LEFT: COMPANIES */}

                    <Flex direction="column" gap="3">
                      <Heading size="3" color="gray">
                        Companies
                      </Heading>

                      {experience.map((company) => {
                        const isActive =
                          activeCompany === company.name;

                        return (
                          <Button
                            key={company.name}
                            variant={isActive ? "soft" : "ghost"}
                            color={isActive ? "teal" : "gray"}
                            size="3"
                            onClick={() =>
                              setActiveCompany(company.name)
                            }
                          >
                            <Flex
                              direction="column"
                              align="start"
                              gap="1"
                            >
                              <Text weight="bold" size="2">
                                {company.name}
                              </Text>

                              <Text size="1" color="gray">
                                {company.timeline}
                              </Text>

                              <Text
                                size="1"
                                color="gray"
                                wrap="wrap"
                              >
                                {company.role}
                              </Text>
                            </Flex>
                          </Button>
                        );
                      })}
                    </Flex>

                    {/* RIGHT: PROJECT CAROUSEL */}

                    <Flex direction="column" gap="3">
                      <Flex
                        align="center"
                        justify="between"
                        wrap="wrap"
                        gap="2"
                      >
                        <Heading size="3">
                          {selectedCompany.name}
                        </Heading>

                        <Badge color="teal" variant="soft">
                          {selectedCompany.projects.length}{" "}
                          {selectedCompany.projects.length === 1
                            ? "project"
                            : "projects"}
                        </Badge>
                      </Flex>

                      <Text color="gray" size="2">
                        {selectedCompany.timeline}
                      </Text>

                      <ScrollArea
                        type="auto"
                        scrollbars="horizontal"
                      >
                        <Flex
                          gap="3"
                          width="max-content"
                          pb="3"
                        >
                          {selectedCompany.projects.map(
                            (project, index) => (
                              <Box
                                key={`${selectedCompany.name}-${index}`}
                                width="280px"
                                flexShrink="0"
                              >
                                <Card
                                  size="2"
                                  variant="surface"
                                >
                                  <Flex
                                    direction="column"
                                    gap="3"
                                  >
                                    <Heading size="3">
                                      {project.name}
                                    </Heading>

                                    <Separator size="4" />

                                    <Box>
                                      <Text
                                        size="1"
                                        color="gray"
                                        weight="bold"
                                      >
                                        ROLE
                                      </Text>

                                      <Text size="2">
                                        {project.role}
                                      </Text>
                                    </Box>

                                    <Box>
                                      <Text
                                        size="1"
                                        color="gray"
                                        weight="bold"
                                      >
                                        STACK
                                      </Text>

                                      <Text size="2">
                                        {project.stack}
                                      </Text>
                                    </Box>
                                  </Flex>
                                </Card>
                              </Box>
                            )
                          )}
                        </Flex>
                      </ScrollArea>

                      <Text size="1" color="gray">
                        Scroll horizontally to explore projects
                      </Text>
                    </Flex>
                  </Grid>
                </Flex>
              </Card>
            </Box>

          </Flex>
        </Container>

        {/* FOOTER */}

        <Separator size="4" />

        <Container size="3">
          <Flex
            py="4"
            gap="3"
            align="center"
            justify="between"
            wrap="wrap"
          >
            <Text size="1" color="gray">
              © {new Date().getFullYear()} Oleksii Serdiukov
            </Text>

            <Flex align="center" gap="3" wrap="wrap">
              <Link
                href="https://vercel.com"
                target="_blank"
                rel="noreferrer"
                size="1"
                color="gray"
              >
                Powered by Vercel
              </Link>

              {footerContacts.map(({ id, label, href, Icon }) => (
                <Link
                  key={id}
                  href={href}
                  target={
                    href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    href.startsWith("http")
                      ? "noreferrer"
                      : undefined
                  }
                  size="1"
                  color="gray"
                >
                  <Flex align="center" gap="1">
                    <Icon width="14" height="14" />
                    {label}
                  </Flex>
                </Link>
              ))}
            </Flex>
          </Flex>
        </Container>

      </Box>    
  );
}