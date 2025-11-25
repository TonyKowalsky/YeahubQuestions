import styles from "./styles.module.css";
import { Tooltip } from "@/shared/ui";
import { arrowDownIcon } from "@/shared/assets";
import { NavigationItem } from "@/entities/navigation/ui";
import type { navTab } from "@/entities/navigation/model";
import { cn } from "@/shared/utils";
import { useSidebar } from "@/shared/model";
import { memo } from "react";

interface DropDownItemProps {
  item: navTab;
  onClick: (label: string) => void;
  openedTabs: string[];
}

const DropDownItem = memo(
  ({ item, onClick, openedTabs }: DropDownItemProps) => {
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
                <NavigationItem item={item} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

export default DropDownItem;
