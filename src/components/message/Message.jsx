import {
  //   MessageContainer,
  MessageTop,
  MessageBottom,
  MessageTopImg,
  //   MessageTopText,
} from './Message.styled';
import './message.css';
import { format } from 'timeago.js';

export const Message = ({ message, own }) => {
  return (
    <>
      <div className={own ? 'message own' : 'message'}>
        <MessageTop>
          <MessageTopImg src="" alt="" />
          <p className="messageText">{message.text}</p>
        </MessageTop>
        <MessageBottom>{format(message.createdAt)}</MessageBottom>
      </div>
    </>
  );
};
