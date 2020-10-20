import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';

import './Chat.css';
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
  Send,
} from '@material-ui/icons';

const Chat = () => {
  const [seed, setSeed] = React.useState('');
  const [input, setInput] = React.useState('');
  React.useEffect(() => {
    setSeed(Math.floor(Math.random() * 7000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(`You typed: ${input}`);
    setInput('');
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && 'chat__receiver'}`}>
          <span className="chat__name">jrcity</span>Hey peeps!
          <span className="chat__timestamp">12:32pm</span>
        </p>
        <p className="chat__message">Hey peeps!</p>
      </div>
      <div className="chat__footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <form>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Type a message"
            type="text"
          ></input>
          <IconButton onClick={(e) => sendMessage(e)}>
            <Send />
          </IconButton>
        </form>
        <IconButton>
          <Mic />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
