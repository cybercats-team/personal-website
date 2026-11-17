'use client';

import { use } from "react";

import {
  Box,
  IconButton
} from "@radix-ui/themes";

import {
  MoonIcon,
  SunIcon
} from "@radix-ui/react-icons";

import { AppearanceContext } from "@/providers/appearance";

export default function ThemeSwitch() {
  const [appearance, toggleAppearance] = use(AppearanceContext)
  
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