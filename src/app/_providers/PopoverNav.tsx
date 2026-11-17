'use client';

import { PropsWithChildren, useState, createContext } from "react";

import {
  Popover
} from "@radix-ui/themes";

export type PopoverNavToggler = (isOpen: boolean) => void;
export const PopoverNavContext = createContext<PopoverNavToggler>(() => { });

export const PopoverNavProvider = ({ children }: PropsWithChildren) => {
  const [mobileMenuOpen, setMobileMenuOpen_] = useState(false);
  const setMobileMenuOpen = (isOpen: boolean) => setMobileMenuOpen_(isOpen);

  return (
    <Popover.Root
      open={mobileMenuOpen}
      onOpenChange={setMobileMenuOpen}
    >
      <PopoverNavContext.Provider value={setMobileMenuOpen}>
        {children}
      </PopoverNavContext.Provider>
    </Popover.Root>
  );
}