import React from 'react';
import { Avatar } from '@material-ui/core';

import './SidebarChat.css';
import db from '../../../firebase';
import { Link } from 'react-router-dom';

const SideBarChat = ({ id, name, addNewChat }) => {
  const createChat = () => {
    const roomName = prompt('Please enter name for chat');

    if (roomName) {
      //do something clever
      db.collection('rooms').add({ name: roomName });
    }
  };
  return !addNewChat ? (
    <Link className="sidebarChat__link" to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/initials/${name}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>last message...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h4>Add new chat</h4>
    </div>
  );
};

export default SideBarChat;
