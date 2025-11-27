import styles from "./styles.module.css";
import { useAccordion, useMobileView } from "@/shared/lib";
import { navTabs as tabs } from "@/widgets/sidebar/model";
import { memo, useMemo } from "react";
import {
  SidebarItem,
  SidebarDropDownItem,
  SidebarSupportButton,
} from "@/widgets/sidebar/ui";

const SUPPORT_LINK = "https://t.me/yeahub_support";

const SidebarItemsList = memo(() => {
  const [openAccordion, toggleAccordion] = useAccordion();
  const isMobileView = useMobileView();
  const displayedTabs = useMemo(
    () =>
      tabs.filter(
        tab => !tab.isMobileView || tab.isMobileView === isMobileView
      ),
    [isMobileView]
  );

  return (
    <nav className={styles.content}>
      <ul className={styles.nav}>
        {displayedTabs.map(tab => (
          <li key={tab.label}>
            {tab.dropDown ? (
              <SidebarDropDownItem
                item={tab}
                onClick={toggleAccordion}
                openedTabs={openAccordion}
              />
            ) : (
              <SidebarItem item={tab} />
            )}
          </li>
        ))}
      </ul>
      <div className={styles.support}>
        <SidebarSupportButton link={SUPPORT_LINK} />
      </div>
    </nav>
  );
});

export default SidebarItemsList;
