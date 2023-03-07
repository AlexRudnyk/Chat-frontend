import {
  MessengerContainer,
  ChatBox,
  ChatMenu,
  ChatOnlineContainer,
  ChatMenuWrapper,
  ChatBoxWrapper,
  ChatOnlineWrapper,
  ChatMenuInput,
  ChatBoxTop,
  ChatBoxBottom,
  ChatBoxInput,
  ChatBoxBtn,
} from './Messenger.styled';
import { AppBar } from 'components/appbar';
import { Conversation } from 'components/conversation';
import { Message } from 'components/message';
import { ChatOnline } from 'components/chatOnline';

export const Messenger = () => {
  return (
    <>
      <AppBar />
      <MessengerContainer>
        <ChatMenu>
          <ChatMenuWrapper>
            <ChatMenuInput type="text" placeholder="Search for friends" />
            <Conversation />
          </ChatMenuWrapper>
        </ChatMenu>
        <ChatBox>
          <ChatBoxWrapper>
            <ChatBoxTop>
              <Message />
              <Message own={true} />
              <Message />
            </ChatBoxTop>
            <ChatBoxBottom>
              <ChatBoxInput placeholder="Write something..."></ChatBoxInput>
              <ChatBoxBtn type="submit">Send</ChatBoxBtn>
            </ChatBoxBottom>
          </ChatBoxWrapper>
        </ChatBox>
        <ChatOnlineContainer>
          <ChatOnlineWrapper>
            <ChatOnline />
          </ChatOnlineWrapper>
        </ChatOnlineContainer>
      </MessengerContainer>
    </>
  );
};
