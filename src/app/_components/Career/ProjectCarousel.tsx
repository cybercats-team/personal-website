'use client';

import { useRef } from "react";

import {
  Badge,
  Box,
  Flex,
  Heading
} from "@radix-ui/themes";

import useCarousel from "@/hooks/useCarousel";

import { default as Carousel, type CarouselProps } from "@/app/_components/Career/Carousel";
import CarouselControls from "@/app/_components/Career/CarouselControls";

export default function ProjectCarousel({ company }: CarouselProps) {
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
        overflow="hidden"
      >
      <Carousel company={company} />
    </Box>
    </Flex>
  )
}
