import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';

import './Sidebar.css';
import SideBarChat from './SidebarChat/SideBarChat';

const Sidebar = () => {
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
                <SideBarChat addNewChat />
                <SideBarChat />
                <SideBarChat />
                <SideBarChat />
                <SideBarChat />
                <SideBarChat />
            </div>
        </div>
    );
};

export default Sidebar;