'use client';

import { useRef } from "react";

import {
  Badge,
  Box,
  Flex,
  Heading
} from "@radix-ui/themes";

import { Career } from "@/api/career";
import useCarousel from "@/hooks/useCarousel";
import useWindowWidth from "@/hooks/useWindowWidth";

import { default as Carousel, type CarouselProps } from "@/app/_components/Career/Carousel";
import CarouselControls from "@/app/_components/Career/CarouselControls";

export type ProjectCarouselProps = {
  company?: Career;
}

const CarouselInner = ({ company, projectsPerPage }: CarouselProps) => {
  const projectsViewportRef = useRef<HTMLDivElement | null>(null);
  
  const {    
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
      <Carousel company={company} projectsPerPage={projectsPerPage} />
    </Box>
    </Flex>
  )
}

export default function ProjectCarousel({ company }: ProjectCarouselProps) {
  const width = useWindowWidth();
  const itemsPerPage = width >= 1024 ? 3 : width >= 768 ? 2 : 1;    

  return (
    <CarouselInner 
      company={company} 
      projectsPerPage={itemsPerPage} 
      key={itemsPerPage} 
    />
  )
}