import { useState, useEffect } from "react";

export const useDebounce = <T>(
  value: T,
  delay: number,
  immediateIfFalsy: boolean = true
) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  if (immediateIfFalsy && !value) return value; // для корректной работы (сброса значения в SearchBar) в случае сброса фильтров через resetParams (хука useQueryParams);

  return debouncedValue;
};
