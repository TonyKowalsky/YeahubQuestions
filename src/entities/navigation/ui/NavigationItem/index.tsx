import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import { Tooltip } from "@/shared/ui";
import type { navTab } from "@/entities/navigation/model";
import { cn } from "@/shared/utils";
import { memo, useCallback } from "react";
import { useSidebar } from "@/shared/model";
import type { MouseEvent } from "react";
import { useMobileView } from "@/shared/lib";

interface NavigationItemProps {
  item: navTab;
}

const NavigationItem = memo(({ item }: NavigationItemProps) => {
  const { isOpenSidebar, toggleSidebar } = useSidebar();
  const isMobileView = useMobileView();
  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.stopPropagation();
      if (isMobileView) toggleSidebar();
    },
    [toggleSidebar, isMobileView]
  );
  return (
    <Tooltip text={item.label}>
      <NavLink
        to={item.link}
        onClick={handleClick}
        className={({ isActive }) =>
          cn(
            styles.item,
            { [styles.open]: isOpenSidebar },
            { [styles.active]: isActive }
          )
        }
      >
        <img alt="" src={item.icon} />
        <span className={styles.text}>{item.label}</span>
      </NavLink>
    </Tooltip>
  );
});

export default NavigationItem;
