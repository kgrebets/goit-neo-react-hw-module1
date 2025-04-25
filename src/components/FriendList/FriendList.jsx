import "./FriendList.css";
import FriendListItem from "../FriendListItem/FriendListItem";

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((f) => (
        <li key={f.id}>
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
