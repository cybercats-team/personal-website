'use client';

import {
  Box,
  IconButton
} from "@radix-ui/themes";

import {
  MoonIcon,
  SunIcon
} from "@radix-ui/react-icons";

import useAppearance from "@/hooks/useAppearance";

export default function ThemeButton() {
  const [appearance, toggleAppearance] = useAppearance();
  
  return (
    <Box flexShrink="0">
      <IconButton
        variant="soft"
        color="gray"
        radius="full"
        size="2"
        aria-label="Toggle theme"
        onClick={toggleAppearance}
      >
        {appearance === "dark" ? (
          <SunIcon />
        ) : (
          <MoonIcon />
        )}
      </IconButton>
    </Box>
  )
}