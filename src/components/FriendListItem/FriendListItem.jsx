import clsx from "clsx";
import styles from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  const statusClasses = clsx(
    styles.status,
    isOnline ? styles.online : styles.offline
  );
  return (
    <div className={styles.friendCard}>
      <img
        className={styles.friendAvatar}
        src={avatar}
        alt="Avatar"
        width="72"
      />
      <p className={styles.friendName}>{name}</p>
      <p className={statusClasses}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}

export default FriendListItem;
