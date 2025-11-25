import { QuestionsAPI } from "@/entities/question";
import styles from "./styles.module.css";
import { useRef } from "react";
import { closeIcon } from "@/shared/assets";
import {
  useClickOutside,
  useMobileView,
  useQueryParams,
  useToggle,
} from "@/shared/lib";
import type { QuestionsRequest } from "@/entities/question";
import { FiltersSection, QuestionsGrid } from "@/widgets";
import { cn } from "@/shared/utils";
import { Skeleton, ErrorMessage } from "@/shared/ui";

const FILTER_SECTION_BREAKPOINT = 1280;
const { useGetQuestionsQuery } = QuestionsAPI;

const QuestionsListPage = () => {
  const isMobileView = useMobileView(FILTER_SECTION_BREAKPOINT);
  const [isOpenFilter, toggleFilter] = useToggle(false);
  const filterRef = useRef<HTMLDivElement | null>(null);
  const isMobileFilter = isOpenFilter && isMobileView;
  useClickOutside({
    ref: filterRef,
    enabled: isMobileFilter,
    callback: toggleFilter,
  });
  const { params } = useQueryParams<QuestionsRequest>();

  const {
    data: questionsResponse,
    isLoading,
    isError,
  } = useGetQuestionsQuery(params);

  return (
    <section>
      <div className={cn(styles.wrapper, isMobileFilter && "no-pointer")}>
        <div className={styles.content}>
          <div className={styles.questions}>
            {isError && <ErrorMessage />}
            {isLoading && <Skeleton height={`70px`} count={10} />}
            {questionsResponse?.data && (
              <QuestionsGrid
                toggleFilter={toggleFilter}
                questionsResponse={questionsResponse}
              />
            )}
          </div>
          {!isMobileView && (
            <div className={styles.filter}>
              <FiltersSection />
            </div>
          )}
        </div>
      </div>
      {isMobileFilter && (
        <div ref={filterRef} className={styles.filterMobile}>
          <div className={styles.close}>
            <button onClick={toggleFilter}>
              <img alt="" src={closeIcon} />
            </button>
          </div>
          <FiltersSection />
        </div>
      )}
    </section>
  );
};

export default QuestionsListPage;
