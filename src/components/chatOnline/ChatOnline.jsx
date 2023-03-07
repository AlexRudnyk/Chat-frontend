import {
  ChatOnlineFriend,
  ChatOnlineImgContainer,
  ChatOnlineWrapper,
  ChatOnlineImg,
  ChatOnlineBedge,
  ChatOnlineName,
} from './ChatOnline.styled';

export const ChatOnline = () => {
  return (
    <>
      <ChatOnlineWrapper>
        <ChatOnlineFriend>
          <ChatOnlineImgContainer>
            <ChatOnlineImg src="" alt="" />
            <ChatOnlineBedge></ChatOnlineBedge>
          </ChatOnlineImgContainer>
          <ChatOnlineName>John Doe</ChatOnlineName>
        </ChatOnlineFriend>
      </ChatOnlineWrapper>
    </>
  );
};
