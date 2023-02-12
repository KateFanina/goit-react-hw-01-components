import PropTypes from 'prop-types';
import styles from'./FriendList.module.css';

function FriendList(props) {
  const { friends } = props;
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <li className={styles.friendListItem} key={friend.id}>
          <span
            className={[
              styles.status,
              friend.isOnline ? styles.green : styles.red,
          ].join(" ")}
          >
            {friend.isOnline}
          </span>
          <img className={styles.friendListAvatar} src={friend.avatar} alt={friend.name} width="48" />
          <p className={styles.friendListName}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }))
};

export default FriendList;
