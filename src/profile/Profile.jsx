import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile(props) {
  const {
    avatar,
    location,
    stats,
    tag,
    username,
  } = props;
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={tag} className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>
            <strong>{stats.followers}</strong>
          </span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>
            <strong>{stats.views}</strong>
          </span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>
            <strong>{stats.likes}</strong>
          </span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

export default Profile;
