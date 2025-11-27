import styles from "./styles.module.css";
import { logoIconRounded } from "@/shared/assets";
import sidebarArrowRight from "./sidebar-arrow-right.png";
import sidebarArrowLeft from "./sidebar-arrow-left.png";
import YeahubLogo from "./Yeahub.png";
import { useNavigate } from "react-router-dom";
import { forwardRef, useCallback } from "react";
import { useSidebar } from "@/shared/model";
import {SidebarItemsList} from "@/widgets/sidebar/ui";

const Sidebar = forwardRef<HTMLElement>((_, ref) => {
  const navigate = useNavigate();
  const { isOpenSidebar, toggleSidebar } = useSidebar();

  const handleClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <aside
      ref={ref}
      className={`${styles.sidebar} ${isOpenSidebar && styles.open}`}
    >
      <header className={styles.header}>
        <button
          type="button"
          onClick={handleClick}
          className={styles.logoButton}
        >
          <img alt="Логотип Yeahub" src={logoIconRounded} />
          <img alt="Yeahub" className={styles.yeahub} src={YeahubLogo} />
        </button>
        <button
          onClick={toggleSidebar}
          type="button"
          className={styles.sidebarArrow}
        >
          {isOpenSidebar ? (
            <img alt="Скрыть сайббар" src={sidebarArrowLeft} />
          ) : (
            <img alt="Показать сайдбар" src={sidebarArrowRight} />
          )}
        </button>
      </header>
      <SidebarItemsList />
    </aside>
  );
});

export default Sidebar;
