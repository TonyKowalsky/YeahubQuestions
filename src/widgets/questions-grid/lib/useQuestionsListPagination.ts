import type { QuestionsRequest, QuestionsResponse } from "@/entities/question";
import { useCallback } from "react";

interface QuestionsListPagination {
  questionsResponse: QuestionsResponse;
  params: QuestionsRequest;
  updateParams: (params: Partial<QuestionsRequest>) => void;
}

const useQuestionsListPagination = ({
  questionsResponse,
  params,
  updateParams,
}: QuestionsListPagination) => {
  const currentPage = Math.max(1, params.page || 1);
  const limit = params.limit || questionsResponse.limit || 10;
  const totalPages = Math.max(1, Math.ceil(questionsResponse.total / limit));

  const onPrevPageClick = useCallback(() => {
    updateParams({ page: currentPage - 1 });
  }, [updateParams, currentPage]);

  const onNextPageClick = useCallback(() => {
    updateParams({ page: currentPage + 1 });
  }, [updateParams, currentPage]);

  const onChangePage = useCallback(
    (newPage: number) => {
      updateParams({ page: newPage });
    },
    [updateParams]
  );
  return {
    currentPage,
    totalPages,
    onPrevPageClick,
    onNextPageClick,
    onChangePage,
  };
};

export default useQuestionsListPagination;
