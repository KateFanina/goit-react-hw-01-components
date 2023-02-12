import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const statStyle = (color) => ({
  backgroundColor: color,
  borderRight: '2px solid darkgrey',
  borderTop: '2px solid darkgrey',
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  padding: '20px',
  width: '25%',
});

function Statistics(props) {
  const {
    stats,
    title,
  } = props;
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statList}>
        {stats.map(stat => (
          <li
            style={statStyle(getRandomHexColor())}
            key={stat.id}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
  

export default Statistics;
