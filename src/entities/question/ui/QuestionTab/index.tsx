import styles from "./styles.module.css";
import type { Question } from "@/entities/question/model";
import { memo } from "react";
import { arrowDownIcon } from "@/shared/assets";
import { cn } from "@/shared/utils";
import { QuestionAnswer, QuestionInfoBar } from "@/entities/question/ui/";
import { useToggle } from "@/shared/lib";

interface QuestionTabProps {
  question: Question;
}

const QuestionTab = memo(({ question }: QuestionTabProps) => {
  const [isExpanded, toggleExpanded] = useToggle(false);

  return (
    <div className={cn(styles.wrapper, { [styles.expanded]: isExpanded })}>
      <div className={styles.header}>
        <h3 className={styles.title}>{question.title}</h3>
        <button onClick={toggleExpanded}>
          <img
            alt=""
            src={arrowDownIcon}
            className={cn(styles.arrow, { [styles.rotated]: isExpanded })}
          />
        </button>
      </div>
      <div className={cn(styles.content, { [styles.expanded]: isExpanded })}>
        <QuestionInfoBar question={question} />
        <QuestionAnswer question={question} type="short" />
      </div>
    </div>
  );
});

export default QuestionTab;
