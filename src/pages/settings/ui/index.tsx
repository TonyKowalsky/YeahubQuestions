import { inProgressGif } from "@/shared/assets";
import styles from "./styles.module.css";
import { RedirectLink } from "@/shared/ui";

const SettingsPage = () => {
  return (
    <section className={styles.error}>
      <h2>Страница настроек находится в разработке.</h2>
      <RedirectLink link="/questions" />
      <img alt='В разработке' className={styles.gif} src={inProgressGif} />
    </section>
  );
};

export default SettingsPage;
