'use client';

import { useEffect, useRef, useState } from "react";

import {
  Badge,
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  IconButton,
  Popover,
  RadioCards,
  ScrollArea,
  Separator,
  Text
} from "@radix-ui/themes";

import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "@radix-ui/react-icons";

import { type Career } from "@/api/career";

export type CareerCardProps = {
  career: Career[];
}

export default function CareerCard({ career }: CareerCardProps) {
  const [activeCompany, setActiveCompany] = useState("ApriorIT");

  const [companyPickerOpen, setCompanyPickerOpen] = useState(false);

  const [projectsPerPage, setProjectsPerPage] = useState(3);

  const [canScrollProjectsLeft, setCanScrollProjectsLeft] =
    useState(false);

  const [canScrollProjectsRight, setCanScrollProjectsRight] =
    useState(false);

  const projectsViewportRef = useRef<HTMLDivElement | null>(null);

  const selectedCompany =
    career?.find(
      (company) => company.name === activeCompany
    ) || career?.[0];

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
    index < selectedCompany?.projects.length;
    index += projectsPerPage
  ) {
    projectPages.push(
      selectedCompany?.projects.slice(
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

    window.addEventListener("resize", updateControls);

    return () => {
      viewport.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
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

  return (
    <>  
      <Flex
        align="center"
        justify="between"
        gap="3"
        wrap="wrap"
      >
        <Flex direction="column" gap="1" flexGrow="1">

          <Flex align="center" gap="2" wrap="wrap">

            <Heading size="4">
              {selectedCompany?.name}
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
                        {career?.map((company) => (
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
            {selectedCompany?.timeline}
          </Text>

          <Text
            as="div"
            size="2"
          >
            {selectedCompany?.role}
          </Text>

        </Flex>
      </Flex>
      <Separator size="4" />
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
              {selectedCompany?.projects.length} projects
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
                      key={`${selectedCompany?.name}-${pageIndex}-${index}`}
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

    </>
  );
}