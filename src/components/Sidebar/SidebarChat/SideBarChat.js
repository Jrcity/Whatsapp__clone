import React from 'react'
import { Avatar } from '@material-ui/core';

import  "./SidebarChat.css"

const SideBarChat = ({addNewChat}) => {
    const [seed, setSeed] = React.useState('')
    React.useEffect(()=> {
        setSeed(Math.floor(Math.random() * 7000))
    },[]);

    const createChat = () => {
        const roomName = prompt('Please enter name for chat');

        if(roomName) {
            //do something clever
        }
    };
    return !addNewChat? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="siderbarChat__info">
                <h2>Room name</h2>
                <p>last message...</p>
            </div>
        </div>
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new chat</h2>
        </div>
    )
}

export default SideBarChat
