import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { useParams } from 'react-router-dom';
import { Avatar, IconButton } from '@material-ui/core';
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
  Send,
} from '@material-ui/icons';

//my imports
import db from '../../firebase';
import './Chat.css';
import { useStateValue } from '../../StateProvider';

const Chat = () => {
  const [{ user }] = useStateValue();
  const { roomId } = useParams();
  const [input, setInput] = useState('');
  const [roomName, setRoomName] = useState('');
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

      db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data())),
        );
    }
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('rooms').doc(roomId).collection('messages').add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar
          src={`https://avatars.dicebear.com/api/initials/${roomName}.svg`}
        />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>
            last seen
            {new Date(
              messages[messages.length - 1]?.timestamp?.toDate(),
            ).toUTCString()}
          </p>
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
        {messages.map(({ message, name, timestamp, id }) => (
          <p
            key={id}
            className={`chat__message ${
              name === user.displayName && 'chat__receiver'
            }`}
          >
            <span className="chat__name">{name}</span>
            {message}
            <span className="chat__timestamp">
              {new Date(timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
        {/* <p className="chat__message">Hey peeps!</p> */}
      </div>
      <div className="chat__footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <form onSubmit={(e) => sendMessage(e)}>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Type a message"
            type="text"
          />
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
