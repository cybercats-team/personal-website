'use client';

import { useEffect, useRef, useState } from "react";

import {
  Badge,
  Box,
  Flex,
  Heading,
  IconButton
} from "@radix-ui/themes";

import {
  ChevronLeftIcon,
  ChevronRightIcon
} from "@radix-ui/react-icons";

import { Career } from "@/api/career";
import Carousel from "@/app/_components/Career/Carousel";

export type ProjectCarouselProps = {
  company?: Career;
}

export default function ProjectCarousel({ company }: ProjectCarouselProps) {
  const [projectsPerPage, setProjectsPerPage] = useState(3);  

  const [canScrollProjectsLeft, setCanScrollProjectsLeft] =
    useState(false);

  const [canScrollProjectsRight, setCanScrollProjectsRight] =
    useState(false);

  const projectsViewportRef = useRef<HTMLDivElement | null>(null);

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
  }, [company, projectsPerPage]);

  // Move by one complete page.
  const moveProjectPage = (direction: 1 | -1) => {
    const viewport = projectsViewportRef.current;

    if (!viewport) return;

    viewport.scrollBy({
      left: direction * viewport.clientWidth,
      behavior: "smooth",
    });
  };
  
  return (
    <Flex direction="column" gap="3">
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
            {company?.projects?.length ?? 0} projects
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
      <Box
        ref={projectsViewportRef}
        width="100%"
        height="360px"
        overflow="hidden"
      >
        <Carousel company={company} projectsPerPage={projectsPerPage} />
      </Box>
    </Flex>
  )
}