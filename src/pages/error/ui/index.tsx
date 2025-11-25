import { errorFig } from "@/shared/assets";
import styles from "./styles.module.css";
import { RedirectLink } from "@/shared/ui";

const ErrorPage = () => {
  return (
    <section className={styles.error}>
      <h2>Такой страницы не существует...</h2>
      <RedirectLink link="/questions" />
      <img alt="Ошибка 404" className={styles.gif} src={errorFig} />
    </section>
  );
};

export default ErrorPage;
