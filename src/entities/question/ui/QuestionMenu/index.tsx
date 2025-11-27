import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import {
  detailsIcon,
  favoriteIcon,
  learnedIcon,
  repeatIcon,
} from "@/shared/assets";
import type { Question } from "@/entities/question/model";
import { cn } from "@/shared/utils";

interface QuestionMenuProps {
  question: Question;
}

const QuestionMenu = ({ question }: QuestionMenuProps) => {
  const navigate = useNavigate();
  const handleNavigate = useCallback(
    (id: number) => {
      navigate(`/question/${id}`);
    },
    [navigate]
  );

  return (
    <ul className={styles.content}>
      <li>
        <button
          className={styles.item}
          onClick={() => handleNavigate(question.id)}
        >
          <img alt="" src={detailsIcon} />
          <span>Подробнее</span>
        </button>
      </li>
      <li>
        <button className={cn(styles.item, styles.disabled)}>
          <img alt="" src={learnedIcon} />
          <span>Изучено</span>
        </button>
      </li>
      <li>
        <button className={cn(styles.item, styles.disabled)}>
          <img alt="" src={repeatIcon} />
          <span>Заново</span>
        </button>
      </li>
      <li>
        <button className={cn(styles.item, styles.disabled)}>
          <img alt="" src={favoriteIcon} />
          <span>Избранное</span>
        </button>
      </li>
    </ul>
  );
};

export default QuestionMenu;
