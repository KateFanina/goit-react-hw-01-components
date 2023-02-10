import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

function Profile(props) {
  const {
    avatar,
    location,
    stats,
    tag,
    username,
  } = props;
  return (
    <div className="profile">
      <div className="description">
        <img
          src={avatar}
          alt={tag}
          className="avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li className='stats_item'>
          <span className="label">Followers</span>
          <span className="quantity">
            <strong>
              {stats.followers}
              </strong>
              </span>
        </li>
        <li className='stats_item'>
          <span className="label">Views</span>
          <span className="quantity">
          <strong>
            {stats.views}
            </strong>
            </span>
        </li>
        <li className='stats_item'>
          <span className="label">Likes</span>
          <span className="quantity">
          <strong>
            {stats.likes}
            </strong>
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
