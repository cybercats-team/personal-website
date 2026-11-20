import { useEffect, useState, type RefObject } from "react";

export type UseCarouselHook = {  
  canScrollLeft: boolean;
  canScrollRight: boolean;
  scrollByPage: (direction: 1 | -1) => void;
}

export default function useCarousel(ref: RefObject<HTMLDivElement | null>): UseCarouselHook {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  
  useEffect(() => {
    const viewport = ref.current;

    if (!viewport) {
      return;
    }

    const updateControls = () => {
      const maxScroll = viewport.scrollWidth - viewport.clientWidth;
      
      setCanScrollLeft(viewport.scrollLeft > 1);
      setCanScrollRight(viewport.scrollLeft < maxScroll - 1);
    };

    viewport.scrollLeft = 0;
    
    updateControls();
    window.addEventListener("resize", updateControls);
    viewport.addEventListener("scroll", updateControls, { passive: true });
    
    return () => {
      window.removeEventListener("resize", updateControls);
      viewport.removeEventListener("scroll", updateControls);
    }
  }, [ref]);

  return {
    canScrollLeft,
    canScrollRight,

    scrollByPage(direction: 1 | -1) {
      const viewport = ref.current;

      if (!viewport) {
        return;
      }

      viewport.scrollBy({
        left: direction * viewport.clientWidth,
        behavior: "smooth",
      });
    }
  };
}