import {
  ChatOnlineFriend,
  ChatOnlineImgContainer,
  ChatOnlineWrapper,
  ChatOnlineImg,
  ChatOnlineBedge,
  ChatOnlineName,
} from './ChatOnline.styled';

export const ChatOnline = ({ name, friendImg }) => {
  return (
    <>
      <ChatOnlineWrapper>
        <ChatOnlineFriend>
          <ChatOnlineImgContainer>
            <ChatOnlineImg src={friendImg} alt="avatar" />
            <ChatOnlineBedge></ChatOnlineBedge>
          </ChatOnlineImgContainer>
          <ChatOnlineName>{name}</ChatOnlineName>
        </ChatOnlineFriend>
      </ChatOnlineWrapper>
    </>
  );
};
