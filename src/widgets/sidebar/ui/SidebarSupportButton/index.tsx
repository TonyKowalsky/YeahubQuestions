import styles from "./styles.module.css";
import { supportIcon } from "@/shared/assets";
import { useSidebar } from "@/shared/model";
import { cn } from "@/shared/utils";
import { memo } from "react";

interface SidebarSupportButtonProps {
  link: string;
}

const SidebarSupportButton = memo(({ link }: SidebarSupportButtonProps) => {
  const { isOpenSidebar } = useSidebar();
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={cn(styles.button, { [styles.open]: isOpenSidebar })}
    >
      <img alt="Обратится в поддержку" src={supportIcon} />
      <span
        className={cn(
          styles.text,
          { [styles.hidden]: !isOpenSidebar }
        )}
      >
        Поддержка
      </span>
    </a>
  );
});

export default SidebarSupportButton;
