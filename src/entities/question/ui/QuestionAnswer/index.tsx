import { memo, useRef } from "react";
import styles from "./styles.module.css";
import type { Question } from "@/entities/question/model";
import { useProcessedAnswer } from "@/entities/question/lib";

interface QuestionAnswerProps {
  question: Question;
  type: "short" | "long";
}

const QuestionAnswer = memo(({ question, type }: QuestionAnswerProps) => {
  const answerRef = useRef<HTMLDivElement>(null);
  const processedHtml = useProcessedAnswer(question, type, answerRef);

  return (
    <div
      ref={answerRef}
      className={styles.answer}
      dangerouslySetInnerHTML={{ __html: processedHtml }}
    />
  );
});

export default QuestionAnswer;
