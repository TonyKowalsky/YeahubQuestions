import { useEffect, useRef, type RefObject } from "react";

interface useClickOutsideProps {
  ref: RefObject<HTMLElement | null>;
  callback: () => void;
  enabled: boolean;
  ignoreRef?: RefObject<HTMLElement | null>;
}

export const useClickOutside = ({
  ref,
  callback,
  enabled = true,
  ignoreRef,
}: useClickOutsideProps) => {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;
  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (
        ref.current &&
        !ref.current.contains(target) &&
        (!ignoreRef ||
          (ignoreRef.current && !ignoreRef.current.contains(target)))
      ) {
        callbackRef.current();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, enabled, ignoreRef]);
};
