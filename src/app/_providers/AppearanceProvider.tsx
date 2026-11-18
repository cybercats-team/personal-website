'use client';

import type { PropsWithChildren } from "react";
import { Theme } from "@radix-ui/themes";
import useAppearance from "@/hooks/useAppearance";

export default function AppearanceProvider({ children }: PropsWithChildren) {
  const [appearance] = useAppearance();

  return (
    <Theme
      appearance={appearance}
      accentColor="teal"
      grayColor="slate"
      radius="large"
      scaling="100%"
      panelBackground="solid"
    >      
      {children}      
    </Theme>
  );
};

