import styles from "./styles.module.css";
import type { UserProfile } from "@/entities/user/model";
import { useNavigate } from "react-router-dom";
import { profileLargeIcon } from "@/shared/assets";
import sealCheckWhiteIcon from "./seal-check-white.png";
import logoutIcon from "./logout.png";
import { cn } from "@/shared/utils";
import { useCallback } from "react";

interface UserMenuProps {
  user: UserProfile;
}

const UserMenu = ({ user }: UserMenuProps) => {
  const navigate = useNavigate();
  const handleProfileClick = useCallback(
    (id: string) => {
      navigate(`/user/${id}`);
    },
    [navigate]
  );
  const handleSettingsClick = useCallback(() => {
    navigate("/settings");
  }, [navigate]);

  return (
    <>
      <div className={styles.header}>
        <img
          alt={user.name || "Гость"}
          className={styles.avatar}
          src={user.avatar || profileLargeIcon}
        />
        <span>{user.name || "Гость"}</span>
        <span>{user.email || ""}</span>
        <div className={styles.role}>
          {user.role === "Участник сообщества" && (
            <img alt="" src={sealCheckWhiteIcon} />
          )}
          <span>{user.role}</span>
        </div>
      </div>
      {user.role === "Гость" ? (
        <ul className={styles.content}>
          <li>
            <button className={styles.item}>Зарегистрироваться</button>
          </li>
          <li>
            <button className={styles.item}>Войти</button>
          </li>
        </ul>
      ) : (
        <ul className={styles.content}>
          <li>
            <button
              onClick={() => handleProfileClick(user.id)}
              className={styles.item}
            >
              Мой профиль
            </button>
          </li>
          <li>
            <button className={cn(styles.item, styles.disabled)}>
              Выбрать членство
            </button>
          </li>
          <li>
            <button onClick={handleSettingsClick} className={styles.item}>
              Настройки
            </button>
          </li>
          <li>
            <button className={cn(styles.item, styles.disabled)}>
              <img alt="" src={logoutIcon} />
              <span>Выйти</span>
            </button>
          </li>
        </ul>
      )}
    </>
  );
};
export default UserMenu;
