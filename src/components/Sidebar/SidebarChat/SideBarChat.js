import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';

import './SidebarChat.css';
import db from '../../../firebase';
import { Link } from 'react-router-dom';

const SideBarChat = ({ id, name, addNewChat }) => {
  const [messages, setMessages] = useState([]);
  const createChat = () => {
    const roomName = prompt('Please enter name for chat');

    if (roomName) {
      //do something clever
      db.collection('rooms').add({ name: roomName });
    }
  };
  useEffect(() => {
    if (id) {
      db.collection('rooms')
        .doc(id)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data())),
        );
    }
  }, [id]);

  return !addNewChat ? (
    <Link className="sidebarChat__link" to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/initials/${name}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
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
