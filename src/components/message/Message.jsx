import { useEffect, useState } from 'react';
import {
  //   MessageContainer,
  MessageTop,
  MessageBottom,
  MessageTopImg,
  //   MessageTopText,
} from './Message.styled';
import './message.css';
import { format } from 'timeago.js';
import axios from 'axios';

export const Message = ({ message, own, friendId, currentUser }) => {
  const [friend, setFriend] = useState({});

  useEffect(() => {
    const getFriend = async () => {
      try {
        const { data } = await axios.get('/users?userId=' + friendId);
        setFriend(data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriend();
  }, [friendId]);

  return (
    <>
      <div className={own ? 'message own' : 'message'}>
        <MessageTop>
          <MessageTopImg
            src={own ? currentUser.avatarURL : friend.avatarURL}
            alt="avatar"
          />
          <p className="messageText">{message.text}</p>
        </MessageTop>
        <MessageBottom>{format(message.createdAt)}</MessageBottom>
      </div>
    </>
  );
};
