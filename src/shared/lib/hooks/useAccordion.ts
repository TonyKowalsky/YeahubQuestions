import { useCallback, useState } from "react";

export const useAccordion = (initialState: string[] = []) => {
  const [openAccordion, setOpenAccordion] = useState(initialState);

  const toggleAccordion = useCallback((tabLabel: string) => {
    setOpenAccordion(prev => {
      if (prev.includes(tabLabel)) {
        return prev.filter(item => item !== tabLabel);
      } else {
        return [...prev, tabLabel];
      }
    });
  }, []);

  return [openAccordion, toggleAccordion] as const;
};
