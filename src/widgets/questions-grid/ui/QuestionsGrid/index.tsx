import styles from "./styles.module.css";
import { filterIcon } from "@/shared/assets";
import { useQueryParams } from "@/shared/lib";
import {
  type QuestionsRequest,
  type QuestionsResponse,
  QuestionTab,
} from "@/entities/question";
import { memo } from "react";
import { Pagination } from "@/shared/ui";
import { useQuestionsListPagination } from "@/widgets/questions-grid/lib";

interface QuestionsGridProps {
  questionsResponse: QuestionsResponse;
  toggleFilter: () => void;
}

const QuestionsGrid = memo(
  ({ questionsResponse, toggleFilter }: QuestionsGridProps) => {
    const { params, updateParams, resetParams } =
      useQueryParams<QuestionsRequest>();
    const { data: questions = [] } = questionsResponse;
    const isEmpty = questions.length === 0;
    const {
      currentPage,
      totalPages,
      onPrevPageClick,
      onNextPageClick,
      onChangePage,
    } = useQuestionsListPagination({ questionsResponse, params, updateParams });

    return (
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <span>Вопросы</span>
          <button onClick={toggleFilter}>
            <img alt="" className={styles.filter} src={filterIcon} />
          </button>
        </header>
        {isEmpty ? (
          <div className={styles.reset}>
            <p>
              К сожалению, по данному запросу ничего не найдено. Попробуйте
              изменить запрос.
            </p>
            <button
              className={styles.resetButton}
              onClick={() => resetParams()}
            >
              Сбросить фильтр
            </button>
          </div>
        ) : (
          <>
            <ul>
              {questions.map(question => (
                <li key={question.id}>
                  <QuestionTab question={question} />
                </li>
              ))}
            </ul>
            <Pagination
              onPrevPageClick={onPrevPageClick}
              onNextPageClick={onNextPageClick}
              onChangePage={onChangePage}
              page={currentPage}
              totalPages={totalPages}
            />
          </>
        )}
      </div>
    );
  }
);

export default QuestionsGrid;
