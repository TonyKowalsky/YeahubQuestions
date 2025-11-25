import styles from "./styles.module.css";
import { cn } from "@/shared/utils";
import { memo } from "react";
import type { Complexity } from "@/entities/question/model";

interface ComplexityTabProps {
  complexity: Complexity;
  isActive?: boolean;
  onClick?: () => void;
}

const ComplexityTab = memo(
  ({ complexity, isActive, onClick }: ComplexityTabProps) => {
    const parts = complexity.split(",");
    const firstElement = parts[0];
    const lastElement = parts[parts.length - 1];

    return (
      <button
        type="button"
        onClick={onClick}
        className={cn(styles.complexity, isActive && styles.active)}
      >
        {`${firstElement}-${lastElement}`}
      </button>
    );
  }
);

export default ComplexityTab;
