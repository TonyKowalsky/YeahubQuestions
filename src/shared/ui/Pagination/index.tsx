import { arrowLeftIcon, arrowRightIcon } from "@/shared/assets";
import styles from "./styles.module.css";
import { cn } from "@/shared/utils";

interface PaginationProps {
  onPrevPageClick: () => void;
  onNextPageClick: () => void;
  onChangePage: (page: number) => void;
  page: number;
  totalPages: number;
}

const Pagination = ({
  onPrevPageClick,
  onNextPageClick,
  onChangePage,
  page,
  totalPages,
}: PaginationProps) => {
  const handleChangePage = (newPage: number) => () => {
    onChangePage(newPage);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 6;
    let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={handleChangePage(1)}
          className={cn({
            [styles.active]: 1 === page,
          })}
          aria-current={1 === page ? "page" : undefined}
        >
          1
        </button>,
        startPage > 2 && <span key="start-ellipsis">...</span>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={handleChangePage(i)}
          className={cn({
            [styles.active]: i === page,
          })}
          aria-current={i === page ? "page" : undefined}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      pages.push(
        endPage < totalPages - 1 && <span key="end-ellipsis">...</span>,
        <button
          key={totalPages}
          onClick={handleChangePage(totalPages)}
          className={cn({
            [styles.active]: totalPages === page,
          })}
          aria-current={totalPages === page ? "page" : undefined}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className={styles.wrapper}>
      <button
        onClick={onPrevPageClick}
        disabled={page === 1}
        aria-label="previous page"
      >
        <img src={arrowLeftIcon} />
      </button>
      {renderPageNumbers()}
      <button
        onClick={onNextPageClick}
        disabled={page === totalPages}
        aria-label="next page"
      >
        <img src={arrowRightIcon} />
      </button>
    </div>
  );
};

export default Pagination;
