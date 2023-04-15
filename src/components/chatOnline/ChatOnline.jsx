import {
  ChatOnlineFriend,
  ChatOnlineImgContainer,
  ChatOnlineWrapper,
  ChatOnlineImg,
  ChatOnlineBedge,
  ChatOfflineBedge,
  ChatOnlineName,
} from './ChatOnline.styled';

export const ChatOnline = ({ friend }) => {
  return (
    <>
      <ChatOnlineWrapper>
        <ChatOnlineFriend>
          <ChatOnlineImgContainer>
            <ChatOnlineImg src={friend.avatarURL} alt="avatar" />
            {friend.token ? <ChatOnlineBedge /> : <ChatOfflineBedge />}
          </ChatOnlineImgContainer>
          <ChatOnlineName>{friend.username}</ChatOnlineName>
        </ChatOnlineFriend>
      </ChatOnlineWrapper>
    </>
  );
};
