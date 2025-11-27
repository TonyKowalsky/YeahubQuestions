import styles from "./styles.module.css";
import { forwardRef } from "react";

type CSSValue = number | string;

interface PopoverProps {
  children: React.ReactNode;
  top?: CSSValue;
  bottom?: CSSValue;
  left?: CSSValue;
  right?: CSSValue;
  width?: CSSValue;
}

const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  ({ children, top, bottom, left, right, width }, ref) => {
    return (
      <div
        ref={ref}
        style={{ width, top, bottom, left, right }}
        className={styles.popover}
      >
        {children}
      </div>
    );
  }
);

export default Popover;
