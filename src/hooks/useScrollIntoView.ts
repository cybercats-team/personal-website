'use client';

import { useCallback, type MouseEventHandler, type MouseEvent } from "react";

export type OnLinkClick = MouseEvent<HTMLAnchorElement>;
export type OnLinkClickHandler = MouseEventHandler<HTMLAnchorElement>;

export default function useScrollIntoView(onClick?: OnLinkClickHandler): OnLinkClickHandler {
  return useCallback((e: OnLinkClick) => {
    if (onClick) {
      onClick(e);
    }
    
    const { href } = e.currentTarget;    
    
    if ("undefined" === typeof URL || "undefined" == typeof window) {
      return;
    }    
    
    const base = window.location.origin;

    if (!href || !URL.canParse(href!, base)) {
      return;
    }

    const url = URL.parse(href, base);

    if (url?.origin !== base || !url!.hash) {
      return;
    }

    const target = document.querySelector(url!.hash!);

    if (!target) {
      return;
    }

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });    
  }, [onClick])
}