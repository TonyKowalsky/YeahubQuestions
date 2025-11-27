import styles from "./styles.module.css";
import burgerIcon from "./burger.png";
import { logoIconRounded } from "@/shared/assets";
import { memo, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserButton, user, UserMenu } from "@/entities/user";
import { useClickOutside, useToggle } from "@/shared/lib";
import { useSidebar } from "@/shared/model";
import { Popover } from "@/shared/ui";

const Header = memo(() => {
  const [isOpenPopover, toggle, , close] = useToggle(false);
  const { toggleSidebar } = useSidebar();
  const navigate = useNavigate();
  const handleNavigate = useCallback(() => navigate("/"), [navigate]);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useClickOutside({
    ref: popoverRef,
    enabled: isOpenPopover,
    callback: close,
    ignoreRef: buttonRef,
  });
  return (
    <header className={styles.header}>
      <button
        type="button"
        onClick={handleNavigate}
        className={styles.logoButton}
      >
        <img alt="" src={logoIconRounded} />
      </button>
      <div>
        <UserButton ref={buttonRef} user={user} onClick={toggle} />
        {isOpenPopover && (
          <Popover
            ref={popoverRef}
            children={<UserMenu user={user} />}
            top={80}
            left={"calc(100vw - 300px)"}
          />
        )}
      </div>
      <button type="button" onClick={toggleSidebar} className={styles.burger}>
        <img alt="sidebar menu" src={burgerIcon} />
      </button>
    </header>
  );
});

export default Header;
