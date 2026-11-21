'use client';

import {
  Box,
  Flex,
  Grid
} from "@radix-ui/themes";

import type { Company } from "@/api/career";
import Project from "@/app/_components/Career/Project";

export type CarouselProps = {
  company?: Company;
}

export default function ProjectCarousel({ company }: CarouselProps) {
  return (
    <Flex
      width="100%"
      gap="0"
      align="stretch"
      wrap="nowrap"
    >
      {company?.projects.map((project) => (
        <Box
          key={`${company?.id}-${project.id}`}
          width="100%"
          flexShrink="0"
        >
          <Grid
            columns="1"
            gap="3"
            width="100%"
            align="stretch"
            height="stretch"            
          >            
            <Project project={project} />            
          </Grid>
        </Box>
      ))}
    </Flex>
  )
}