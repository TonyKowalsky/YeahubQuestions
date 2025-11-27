import styles from "./styles.module.css";

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = ({
  message = "Ошибка загрузки данных. Попробуйте еще раз позже.",
}: ErrorMessageProps) => {
  return <p className={styles.error}>{message}</p>;
};

export default ErrorMessage;
