import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { memo } from "react";

interface RedirectLinkProps {
  link: string;
}

const RedirectLink = memo(({ link }: RedirectLinkProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(link);
  };
  return (
    <p className={styles.wrapper}>
      <span>Однако, замечательно функционирует раздел</span>
      <button className={styles.button} onClick={handleClick}>
        Список вопросов
      </button>
    </p>
  );
});

export default RedirectLink;
