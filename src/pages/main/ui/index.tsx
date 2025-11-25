import { inProgressGif } from "@/shared/assets";
import styles from "./styles.module.css";
import { RedirectLink } from "@/shared/ui";

const MainPage = () => {
  return (
    <section className={styles.error}>
      <h2>Главная страница находится в разработке.</h2>
      <RedirectLink link="/questions" />
      <img className={styles.gif} src={inProgressGif} />
    </section>
  );
};

export default MainPage;
