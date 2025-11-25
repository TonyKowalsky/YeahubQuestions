import { searchIcon } from "@/shared/assets";
import styles from "./styles.module.css";
import { memo, useCallback, useEffect, useState } from "react";
import { useDebounce, useQueryParams } from "@/shared/lib";
import type { QuestionsRequest } from "@/entities/question";

const QuestionsSearchBar = memo(() => {
  const { params, updateParams } = useQueryParams<QuestionsRequest>();
  const [search, setSearch] = useState(params.title || "");
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearch !== params.title) {
      updateParams({ title: debouncedSearch || undefined, page: 1, limit: 10 });
    }
  }, [debouncedSearch, params.title]);

  useEffect(() => {
    setSearch(params.title || "");
  }, [params.title]);

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    [setSearch]
  );

  return (
    <div className={styles.wrapper}>
      <img alt="" className={styles.searchIcon} src={searchIcon} />
      <input
        value={search}
        onChange={handleSearch}
        className={styles.searchInput}
        type="text"
        placeholder={`Введите вопрос...`}
      />
    </div>
  );
});

export default QuestionsSearchBar;
