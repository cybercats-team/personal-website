'use client';

import { useEffect, useRef, useState } from "react";

import {
  Avatar,
  Badge,
  Box,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  IconButton,
  Link,
  Popover,
  RadioCards,
  ScrollArea,
  Separator,
  Text,
} from "@radix-ui/themes";

import {
  ArrowUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "@radix-ui/react-icons";

import FooterContacts from "@/components/Footer/Contacts";
import Header from "@/components/Header";
import InfoContacts from "@/components/Info/Contacts";
import { getContacts } from "@/api/info";

export default function Home({
  photoUrl = "",
  contactLinks = {},
}) {
  const contacts = getContacts();
  
  // --------------------------------------------------
  // Data
  // --------------------------------------------------

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
        {
          name: "ERCC dashboard",
          role: "Tech consultant at webapp (dashboard)",
          stack: "React/TanStack/Zustand",
        },
        {
          name: "Official website / webapp for crypto token",
          role: "Team lead, Architect, Tech consultant",
          stack: "RN for Web/NativeBase/React Navigation/EthersJS",
        },
        {
          name: "Official wallet app for crypto token",
          role: "Team lead, Architect, Senior full-stack (MERN) developer, Blockchain developer",
          stack:
            "MERN/RN for Web/NativeBase/React Paper/React Navigation/Web3JS/Undux/Axios/Realm/ThreadDB",
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
  // State
  // --------------------------------------------------
  
  const [activeCompany, setActiveCompany] = useState("ApriorIT");

  const [companyPickerOpen, setCompanyPickerOpen] = useState(false);

  const [projectsPerPage, setProjectsPerPage] = useState(3);

  const [canScrollProjectsLeft, setCanScrollProjectsLeft] =
    useState(false);

  const [canScrollProjectsRight, setCanScrollProjectsRight] =
    useState(false);

  const projectsViewportRef = useRef<HTMLDivElement | null>(null);

  const selectedCompany =
    experience.find(
      (company) => company.name === activeCompany
    ) || experience[0];

  // Responsive number of visible projects.
  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;

      const next = width >= 1024 ? 3 : width >= 768 ? 2 : 1;

      setProjectsPerPage((current) =>
        current === next ? current : next
      );
    };

    update();

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  // Group projects into pages.
  const projectPages = [];

  for (
    let index = 0;
    index < selectedCompany.projects.length;
    index += projectsPerPage
  ) {
    projectPages.push(
      selectedCompany.projects.slice(
        index,
        index + projectsPerPage
      )
    );
  }

  // Reset position and maintain arrow state.
  useEffect(() => {
    const viewport = projectsViewportRef.current;

    if (!viewport) return;

    const updateControls = () => {
      const maxScroll = viewport.scrollWidth - viewport.clientWidth;

      setCanScrollProjectsLeft(viewport.scrollLeft > 1);
      setCanScrollProjectsRight(
        viewport.scrollLeft < maxScroll - 1
      );
    };

    viewport.scrollLeft = 0;
    updateControls();

    viewport.addEventListener("scroll", updateControls, {
      passive: true,
    });

    const observer =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(updateControls)
        : null;

    observer?.observe(viewport);

    window.addEventListener("resize", updateControls);

    return () => {
      viewport.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
      observer?.disconnect();
    };
  }, [activeCompany, projectsPerPage]);

  // Move by one complete page.
  const moveProjectPage = (direction) => {
    const viewport = projectsViewportRef.current;

    if (!viewport) return;

    viewport.scrollBy({
      left: direction * viewport.clientWidth,
      behavior: "smooth",
    });
  };

  // --------------------------------------------------
  // Render
  // --------------------------------------------------

  return (    
      <Box minHeight="100vh">
        <Header />        
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
                      <InfoContacts contacts={contacts} />
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

                  {/* TITLE */}

                  <Heading size="5">
                    CAREER HISTORY & PROJECT HIGHLIGHTS
                  </Heading>

                  <Separator size="4" />

                  {/* COMPANY HEADER */}

                  <Flex
                    align="center"
                    justify="between"
                    gap="3"
                    wrap="wrap"
                  >
                    <Flex direction="column" gap="1" flexGrow="1">

                      <Flex align="center" gap="2" wrap="wrap">

                        <Heading size="4">
                          {selectedCompany.name}
                        </Heading>

                        {/* ICON-ONLY COMPANY PICKER */}

                        <Popover.Root
                          open={companyPickerOpen}
                          onOpenChange={setCompanyPickerOpen}
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

                              {/* COMPANY LIST SCROLL AREA */}

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
                                    value={activeCompany}
                                    onValueChange={(value) => {
                                      setActiveCompany(value);
                                      setCompanyPickerOpen(false);
                                    }}
                                  >
                                    {experience.map((company) => (
                                      <RadioCards.Item
                                        key={company.name}
                                        value={company.name}
                                      >
                                        <Flex
                                          direction="column"
                                          align="start"
                                          gap="1"
                                          width="100%"
                                        >
                                          <Text as="div" size="2" weight="bold">
                                            {company.name}
                                          </Text>

                                          <Text as="div" size="1" color="gray">
                                            {company.timeline}
                                          </Text>

                                          <Text as="div" size="1" color="gray">
                                            {company.role}
                                          </Text>
                                        </Flex>
                                      </RadioCards.Item>
                                    ))}
                                  </RadioCards.Root>
                                </Flex>
                              </ScrollArea>

                            </Flex>
                          </Popover.Content>
                        </Popover.Root>

                      </Flex>

                      <Text
                        as="div"
                        size="2"
                        color="gray"
                      >
                        {selectedCompany.timeline}
                      </Text>

                      <Text
                        as="div"
                        size="2"
                      >
                        {selectedCompany.role}
                      </Text>

                    </Flex>
                  </Flex>

                  <Separator size="4" />

                  {/* PROJECTS */}

                  <Flex direction="column" gap="3">

                    {/* PROJECT HEADER */}

                    <Flex
                      align="center"
                      justify="between"
                      gap="3"
                    >
                      <Heading size="3">
                        Projects
                      </Heading>

                      <Flex align="center" gap="2">

                        <Badge color="teal" variant="soft">
                          {selectedCompany.projects.length} projects
                        </Badge>

                        <IconButton
                          variant="soft"
                          color="gray"
                          radius="full"
                          size="2"
                          disabled={!canScrollProjectsLeft}
                          onClick={() => moveProjectPage(-1)}
                          aria-label="Previous projects"
                        >
                          <ChevronLeftIcon />
                        </IconButton>

                        <IconButton
                          variant="soft"
                          color="gray"
                          radius="full"
                          size="2"
                          disabled={!canScrollProjectsRight}
                          onClick={() => moveProjectPage(1)}
                          aria-label="Next projects"
                        >
                          <ChevronRightIcon />
                        </IconButton>

                      </Flex>
                    </Flex>

                    {/* PROJECT CAROUSEL */}

                    {/* Buttons are the only carousel navigation. The clipped Box has no
                        visible scrollbar and cannot be manually scrolled by wheel/touch. */}
                    <Box
                      ref={projectsViewportRef}
                      width="100%"
                      height="360px"
                      overflow="hidden"
                    >
                      <Flex
                        width="100%"
                        gap="0"
                        align="stretch"
                        wrap="nowrap"
                      >
                        {projectPages.map((page, pageIndex) => (
                          <Box
                            key={pageIndex}
                            width="100%"
                            flexShrink="0"
                          >
                            <Grid
                              columns={String(projectsPerPage)}
                              gap="3"
                              width="100%"
                              align="stretch"
                            >
                              {page.map((project, index) => (
                                <Card
                                  key={`${selectedCompany.name}-${pageIndex}-${index}`}
                                  asChild
                                  size="3"
                                  variant="surface"
                                >
                                  <Box
                                    width="100%"
                                    minWidth="0"
                                    height="320px"
                                  >
                                    <Flex
                                      direction="column"
                                      gap="3"
                                      height="100%"
                                    >
                                      {/* PROJECT TITLE */}

                                      <Heading size="3">
                                        {project.name}
                                      </Heading>

                                      <Separator size="4" />

                                      {/* ROLE */}

                                      <Flex direction="column" gap="1">
                                        <Text
                                          as="div"
                                          size="1"
                                          weight="bold"
                                          color="gray"
                                        >
                                          ROLE
                                        </Text>

                                        <Text as="div" size="2">
                                          {project.role}
                                        </Text>
                                      </Flex>

                                      {/* STACK */}

                                      <Flex direction="column" gap="1">
                                        <Text
                                          as="div"
                                          size="1"
                                          weight="bold"
                                          color="gray"
                                        >
                                          STACK
                                        </Text>

                                        <Text as="div" size="2">
                                          {project.stack}
                                        </Text>
                                      </Flex>
                                    </Flex>
                                  </Box>
                                </Card>
                              ))}
                            </Grid>
                          </Box>
                        ))}
                      </Flex>
                    </Box>

                  </Flex>

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

              <FooterContacts contacts={contacts} />

              <IconButton
                type="button"
                variant="soft"
                color="gray"
                radius="full"
                size="2"
                aria-label="Scroll to top"
                title="Scroll to top"
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              >
                <ArrowUpIcon />
              </IconButton>
            </Flex>
          </Flex>
        </Container>

      </Box>    
  );
}