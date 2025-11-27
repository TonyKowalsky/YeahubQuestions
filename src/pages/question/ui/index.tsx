import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { useRef } from "react";
import { closeIcon, noImageIcon, statsIcon } from "@/shared/assets";
import { QuestionAnswer, QuestionsAPI } from "@/entities/question";
import { imageSrcGenerator, useClickOutside, useMobileView, useToggle } from "@/shared/lib";
import { QuestionStatsSection } from "@/widgets";
import { cn } from "@/shared/utils";
import { ErrorMessage, Skeleton } from "@/shared/ui";

const LOGO_BREAKPOINT = 1280;
const PAGE_MOBILEVIEW_BREAKPOINT = 1085;
const { useGetQuestionByIdQuery } = QuestionsAPI;

const QuestionPage = () => {
  const { id } = useParams();
  const {
    data: question,
    isLoading,
    isError,
  } = useGetQuestionByIdQuery(Number(id));
  const isMobileViewPage = useMobileView(PAGE_MOBILEVIEW_BREAKPOINT);
  const isMobileViewLogo = useMobileView(LOGO_BREAKPOINT);
  const [isOpenStats, toggleStats] = useToggle(false);
  const isMobileStats = isOpenStats && isMobileViewPage;
  const statsRef = useRef<HTMLDivElement | null>(null);

  useClickOutside({
    ref: statsRef,
    enabled: isMobileStats,
    callback: toggleStats,
  });

  const firstSkillTitle = question?.questionSkills?.[0]?.title;
  const imageSrc = firstSkillTitle
    ? imageSrcGenerator(firstSkillTitle)
    : noImageIcon;

  return (
    <section>
      <div className={cn(styles.wrapper, isMobileStats && "no-pointer")}>
        {isError && <ErrorMessage />}
        {isLoading && <Skeleton height={`200px`} count={3} />}
        {question && (
          <div className={styles.content}>
            <div className={styles.question}>
              <div className={styles.main}>
                {!isMobileViewLogo && (
                  <img
                    alt=""
                    className={styles.logo}
                    src={imageSrc}
                    width={150}
                    height={150}
                    onError={e => {
                      if (e.target instanceof HTMLImageElement) {
                        e.target.src = noImageIcon;
                      }
                    }}
                  />
                )}
                <div className={styles.header}>
                  <h2 className={styles.title}>{question.title}</h2>
                  <p>{question.description}</p>
                </div>
                {isMobileViewPage && (
                  <button
                    onClick={() => toggleStats()}
                    className={styles.statsButton}
                  >
                    <img alt="" src={statsIcon} width={20} height={20} />
                  </button>
                )}
              </div>
              <div className={styles.shortAnswer}>
                <p className={styles.title}>Краткий ответ</p>
                <QuestionAnswer question={question} type="short" />
              </div>
              <div className={styles.longAnswer}>
                <p className={styles.title}>Полный ответ</p>
                <QuestionAnswer question={question} type="long" />
              </div>
            </div>
            {!isMobileViewPage && (
              <div className={styles.stats}>
                <QuestionStatsSection question={question} />
              </div>
            )}
          </div>
        )}
      </div>
      {question && isMobileStats && (
        <div ref={statsRef} className={styles.statsMobile}>
          <div className={styles.close}>
            <button onClick={toggleStats}>
              <img alt="" src={closeIcon} />
            </button>
          </div>
          <QuestionStatsSection question={question} />
        </div>
      )}
    </section>
  );
};

export default QuestionPage;
