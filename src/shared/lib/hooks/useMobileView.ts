import { useState, useEffect } from "react";

export const useMobileView = (width: number = 1025) => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${width}px)`);
    const handler = (event: MediaQueryListEvent) => setIsMobileView(event.matches);
    mediaQuery.addEventListener('change', handler);
    setIsMobileView(mediaQuery.matches);
    
    return () => mediaQuery.removeEventListener('change', handler);
  }, [width]);

  return isMobileView;
};

