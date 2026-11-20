'use client';

import { useRef } from "react";

import {
  Badge,
  Box,
  Flex,
  Heading
} from "@radix-ui/themes";

import { Career } from "@/api/career";
import Carousel from "@/app/_components/Career/Carousel";
import useCarousel from "@/hooks/useCarousel";
import CarouselControls from "./CarouselControls";

export type ProjectCarouselProps = {
  company?: Career;
}

export default function ProjectCarousel({ company }: ProjectCarouselProps) {
  const projectsViewportRef = useRef<HTMLDivElement | null>(null);
  
  const {
    itemsPerPage,
    canScrollLeft,
    canScrollRight,
    scrollByPage
  } = useCarousel(projectsViewportRef);

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
          <CarouselControls 
            left={canScrollLeft} 
            right={canScrollRight} 
            onScroll={scrollByPage} 
          />
        </Flex>
      </Flex>
      <Box
        ref={projectsViewportRef}
        width="100%"
        height="360px"
        overflow="hidden"
      >
        <Carousel company={company} projectsPerPage={itemsPerPage} />
      </Box>
    </Flex>
  )
}