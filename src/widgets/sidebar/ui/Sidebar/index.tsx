import styles from "./styles.module.css";
import { logoIconRounded } from "@/shared/assets";
import sidebarArrowRight from "./sidebar-arrow-right.png";
import sidebarArrowLeft from "./sidebar-arrow-left.png";
import YeahubLogo from "./Yeahub.png";
import { MainNavigation } from "@/entities/navigation";
import { useNavigate } from "react-router-dom";
import { SupportButton } from "@/features/support-navigation";
import { forwardRef, useCallback } from "react";
import { useSidebar } from "@/shared/model";

const SUPPORT_LINK = "https://t.me/yeahub_support";

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
      <MainNavigation />
      <div className={styles.support}>
        <SupportButton link={SUPPORT_LINK} />
      </div>
    </aside>
  );
});

export default Sidebar;
