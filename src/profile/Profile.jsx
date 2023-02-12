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
  const userData = {
    [username]: styles.name,
    [tag]: styles.tag,
    [location]: styles.location,
  }
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={tag} className={styles.avatar} />
        {Object.entries(userData).map(([content, dataStyle], idx) => (
          <p className={dataStyle} key={idx}>
            {content}
          </p>
        ))}
      </div>
      <ul className={styles.stats}>
        {Object.entries(stats).map(([name, value]) => (
          <li className={styles.statsItem} key={name}>
            <span className={styles.label}>{name}</span>
            <span className={styles.quantity}>
              <strong>{value}</strong>
            </span>
          </li>
        ))}
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
