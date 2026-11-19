'use client';

import {
  Box,
  Flex,
  Grid
} from "@radix-ui/themes";

import { Career } from "@/api/career";
import Project from "@/app/_components/Career/Project";
import useCarouselData from "@/hooks/useCarouselData";

export type CarouselProps = {
  projectsPerPage: number;
  company?: Career;
}

export default function ProjectCarousel({ company, projectsPerPage }: CarouselProps) {
  const projectPages = useCarouselData(projectsPerPage, company?.projects);

  return (
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
            {page?.map((project) => (
              <Project project={project} key={`${company?.name}-${project.name}`} />
            ))}
          </Grid>
        </Box>
      ))}
    </Flex>
  )
}