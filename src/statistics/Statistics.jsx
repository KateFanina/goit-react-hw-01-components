import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

function Statistics(props) {
  const {
    title,
    stats,
  } = props;
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {stats.map(stat => (
          <li
            style={{
              backgroundColor: getRandomHexColor(),
              display: 'flex',
              flexDirection: 'column',
              width: '25%',
              listStyle: 'none',
              borderRight: '2px solid darkgrey',
              borderTop: '2px solid darkgrey',
              padding: '20px',
            }}
            key={stat.id}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
