import styles from "./styles.module.css";
import { useAccordion, useMobileView } from "@/shared/lib";
import { DropDownItem } from "@/entities/navigation/ui";
import { NavigationItem } from "@/entities/navigation/ui";
import { navTabs as tabs } from "@/entities/navigation/model";
import { memo, useMemo } from "react";

const MainNavigation = memo(() => {
  const [openAccordion, toggleAccordion] = useAccordion();
  const isMobileView = useMobileView();
  const displayedTabs = useMemo(
    () =>
      tabs.filter(
        tab => !tab.isMobileView || (tab.isMobileView === isMobileView)
      ),
    [isMobileView]
  );

  return (
    <nav className={styles.content}>
      <ul className={styles.nav}>
        {displayedTabs.map(tab => (
          <li key={tab.label}>
            {tab.dropDown ? (
              <DropDownItem
                item={tab}
                onClick={toggleAccordion}
                openedTabs={openAccordion}
              />
            ) : (
              <NavigationItem item={tab} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default MainNavigation;
