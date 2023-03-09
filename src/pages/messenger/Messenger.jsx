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
import { Conversation } from 'components/conversation';
import { Message } from 'components/message';
import { ChatOnline } from 'components/chatOnline';
import { useState, useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import axios from 'axios';

export const Messenger = () => {
  const [conversations, setConversations] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const getConversations = async () => {
      try {
        const { data } = await axios.get('/conversations/' + user.id);
        setConversations(data);
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
  }, [user.id]);

  return (
    <>
      <MessengerContainer>
        <ChatMenu>
          <ChatMenuWrapper>
            <ChatMenuInput type="text" placeholder="Search for friends" />
            {conversations.map(conversation => (
              <Conversation
                key={conversation._id}
                conversation={conversation}
                currentUser={user}
              />
            ))}
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
