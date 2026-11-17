'use client';

import {
  IconButton
} from "@radix-ui/themes";

import {
  ArrowUpIcon
} from "@radix-ui/react-icons";

const onScrollToTopClicked = () => window.scrollTo({ top: 0, behavior: "smooth" })

export default function ScrollToTop() {
  return (
    <IconButton
      type="button"
      variant="soft"
      color="gray"
      radius="full"
      size="2"
      aria-label="Scroll to top"
      title="Scroll to top"
      onClick={onScrollToTopClicked}
    >
      <ArrowUpIcon />
    </IconButton>
  )
}