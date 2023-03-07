import {
  //   MessageContainer,
  MessageTop,
  MessageBottom,
  MessageTopImg,
  //   MessageTopText,
} from './Message.styled';
import './message.css';

export const Message = ({ own }) => {
  return (
    <>
      <div className={own ? 'message own' : 'message'}>
        <MessageTop>
          <MessageTopImg src="" alt="" />
          <p className="messageText">Hello this is a message</p>
        </MessageTop>
        <MessageBottom>1 hour ago</MessageBottom>
      </div>
    </>
  );
};
