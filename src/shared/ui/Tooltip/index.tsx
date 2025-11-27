import { useState, type ReactNode } from "react";
import styles from "./styles.module.css";
import { useSidebar } from "@/shared/model";

interface TooltipProps {
  children: ReactNode;
  text: string;
}

const Tooltip = ({ children, text }: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const { isOpenSidebar } = useSidebar();

  return (
    <div
      className={styles.tooltip}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {!isOpenSidebar && visible && (
        <div className={styles.tooltiptext}>{text}</div>
      )}
    </div>
  );
};

export default Tooltip;
