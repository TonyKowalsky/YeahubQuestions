import styles from "./styles.module.css";
import { Tooltip } from "@/shared/ui";
import { arrowDownIcon } from "@/shared/assets";
import type { navTab } from "@/widgets/sidebar/model";
import { cn } from "@/shared/utils";
import { useSidebar } from "@/shared/model";
import { memo } from "react";
import { SidebarItem } from "@/widgets/sidebar/ui";

interface SidebarDropDownItemProps {
  item: navTab;
  onClick: (label: string) => void;
  openedTabs: string[];
}

const SidebarDropDownItem = memo(
  ({ item, onClick, openedTabs }: SidebarDropDownItemProps) => {
    const expanded = openedTabs.includes(item.label);
    const { isOpenSidebar } = useSidebar();

    return (
      <div
        role="menu"
        onClick={() => onClick(item.label)}
        className={cn(
          styles.item,
          { [styles.open]: isOpenSidebar },
          { [styles.expanded]: expanded }
        )}
      >
        <Tooltip text={item.label}>
          <div className={styles.main}>
            <div className={styles.label}>
              <img alt="" src={item.icon} />
              <span className={styles.text}>{item.label}</span>
            </div>

            {isOpenSidebar && (
              <img
                alt=""
                src={arrowDownIcon}
                className={cn(styles.arrow, { [styles.rotated]: expanded })}
              />
            )}
          </div>
        </Tooltip>
        {expanded && (
          <ul className={styles.list}>
            {item.dropDown?.map(item => (
              <li key={item.label} className={styles.dropdownItem}>
                <SidebarItem item={item} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

export default SidebarDropDownItem;
