import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';

import './Sidebar.css';
import db from '../../firebase';
import SideBarChat from './SidebarChat/SideBarChat';

const Sidebar = () => {
  const [rooms, setRooms] = React.useState('');
  React.useEffect(() => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
    console.log(rooms);
  }, []);
  console.log(rooms);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <IconButton>
          <Avatar />
        </IconButton>
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
        {/* {rooms.map((room) => (
          <SideBarChat key={room.id} id={room.id} name={room.data.name} />
        ))} */}
      </div>
    </div>
  );
};

export default Sidebar;
