import {
  IconButton
} from "@radix-ui/themes";

import {
  ChevronLeftIcon,
  ChevronRightIcon
} from "@radix-ui/react-icons";

export type CarouselControlsProps = {
  left: boolean;
  right: boolean;
  onScroll: (by: 1 | -1) => void;
}

export default function CarouselControls({ left, right, onScroll }: CarouselControlsProps) {
  const scrollLeft = () => onScroll(-1);
  const scrollRight = () => onScroll(1);

  return (
    <>
      <IconButton
        variant="soft"
        color="gray"
        radius="full"
        size="2"
        disabled={!left}
        onClick={scrollLeft}
        aria-label="Previous projects"
      >
        <ChevronLeftIcon />
      </IconButton>
      <IconButton
        variant="soft"
        color="gray"
        radius="full"
        size="2"
        disabled={!right}
        onClick={scrollRight}
        aria-label="Next projects"
      >
        <ChevronRightIcon />
      </IconButton>
    </>
  );
}