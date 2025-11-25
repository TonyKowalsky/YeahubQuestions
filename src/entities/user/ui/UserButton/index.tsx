import styles from "./styles.module.css";
import type { UserProfile } from "@/entities/user/model";
import { profileLargeIcon } from "@/shared/assets";
import sealCheckIcon from "./seal-check.png";
import { forwardRef, memo } from "react";

interface UserButtonProps {
  user: UserProfile;
  onClick: () => void;
}

const UserButton = memo(
  forwardRef<HTMLButtonElement, UserButtonProps>(({ user, onClick }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        type="button"
        className={styles.button}
      >
        <img alt="" src={sealCheckIcon} />
        <span>{user.name || "Гость"}</span>
        <img
          alt={user.name || "Гость"}
          className={styles.avatar}
          src={user.avatar || profileLargeIcon}
        />
      </button>
    );
  })
);

export default UserButton;
