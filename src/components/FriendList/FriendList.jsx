import styles from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map((f) => (
        <li key={f.id} className={styles.friendListItem}>
          <FriendListItem
            avatar={f.avatar}
            name={f.name}
            isOnline={f.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
