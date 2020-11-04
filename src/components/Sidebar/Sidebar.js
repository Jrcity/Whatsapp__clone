import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';

import './Sidebar.css';
import db from '../../firebase';
import SideBarChat from './SidebarChat/SideBarChat';
import { useStateValue } from '../../StateProvider';

const Sidebar = () => {
  const [{ user }] = useStateValue();
  const { photoURL, displayName } = user;

  const [rooms, setRooms] = useState('');
  useEffect(() => {
    const unsubscribe = db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });

    return () => {
      unsubscribe();
    };
  }, [rooms]);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__headerLeft">
          <IconButton>
            <Avatar src={photoURL} />
          </IconButton>
          <span>{displayName}</span>
        </div>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SideBarChat addNewChat />
        {rooms.length
          ? rooms.map((room) => (
              <SideBarChat key={room.id} id={room.id} name={room.data.name} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Sidebar;
