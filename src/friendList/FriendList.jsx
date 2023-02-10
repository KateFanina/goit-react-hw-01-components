import React from 'react';
import PropTypes, { func } from 'prop-types';
import './FriendList.css';

function FriendList(props) {
  const { friends } = props;
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li className="friend-list_item" key={friend.id}>
          <span
            style={{
              backgroundColor: friend.isOnline ? 'green' : 'red',
              borderRadius: '50%',
              width: '10px',
              height: '10px',
            }}
          >
            {friend.isOnline}
          </span>
          <img className="friend-list_avatar" src={friend.avatar} alt={friend.name} width="48" />
          <p className="friend-list_name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
