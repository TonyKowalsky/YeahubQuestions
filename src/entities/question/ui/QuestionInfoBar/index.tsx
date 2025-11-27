import styles from "./styles.module.css";
import { useRef } from "react";
import { useClickOutside, useToggle } from "@/shared/lib";
import type { Question } from "@/entities/question/model";
import { QuestionMenu } from "@/entities/question/ui";
import { Popover, RatingBadge } from "@/shared/ui";

interface QuestionInfoBarProps {
  question: Question;
}

const QuestionInfoBar = ({ question }: QuestionInfoBarProps) => {
  const [isOpenPopover, togglePopover, , closePopover] = useToggle(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useClickOutside({
    ref: popoverRef,
    callback: closePopover,
    enabled: isOpenPopover,
    ignoreRef: buttonRef,
  });

  return (
    <div className={styles.infobar}>
      <div className={styles.ratings}>
        <RatingBadge rating={question.rate} label="Рейтинг" />
        <RatingBadge rating={question.complexity} label="Сложность" />
      </div>
      <div className={styles.popoverTrigger}>
        <button
          aria-label="Меню вопроса"
          ref={buttonRef}
          className={styles.button}
          onClick={togglePopover}
        >
          ⋮
        </button>
        {isOpenPopover && (
          <Popover
            ref={popoverRef}
            children={<QuestionMenu question={question} />}
            right={5}
            top={40}
          />
        )}
      </div>
    </div>
  );
};

export default QuestionInfoBar;
