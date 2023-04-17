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
  NoConversationText,
} from './Messenger.styled';
import { Conversation } from 'components/conversation';
import { Message } from 'components/message';
import { useState, useEffect, useRef } from 'react';
import { useAuth } from 'hooks/useAuth';
import axios from 'axios';
import { io } from 'socket.io-client';
import { ChatOnline } from 'components/chatOnline';

export const Messenger = () => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [friends, setFriends] = useState([]);

  const scrollRef = useRef();
  const socket = useRef();
  const { user } = useAuth();

  useEffect(() => {
    socket.current = io('ws://localhost:4040');
    socket.current.on('getMessage', ({ senderId, text }) => {
      setArrivalMessage({
        sender: senderId,
        text: text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages(prev => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit('addUser', user.id);
    socket.current.on('getUsers', users => users);
  }, [user]);

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

  useEffect(() => {
    const getMessages = async () => {
      try {
        const { data } = await axios.get('/messages/' + currentChat?._id);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, [currentChat]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const { data } = await axios.get('/users/all');
        const friends = data.filter(item => item._id !== user.id);
        setFriends(friends);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsers();
  }, [user.id]);

  const handleSubmit = async event => {
    event.preventDefault();
    const message = {
      sender: user.id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(member => member !== user.id);

    socket.current.emit('sendMessage', {
      senderId: user.id,
      receiverId,
      text: newMessage,
    });

    try {
      const { data } = await axios.post('/messages', message);
      setMessages([...messages, data]);
      setNewMessage('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnFriendClick = async friendId => {
    const newConversation = {
      senderId: user.id,
      receiverId: friendId,
    };
    const res = conversations.filter(item => item.members.includes(friendId));
    if (res.length === 0) {
      try {
        const { data } = await axios.post('/conversations', newConversation);
        setConversations([...conversations, data]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <MessengerContainer>
        <ChatMenu>
          <ChatMenuWrapper>
            <ChatMenuInput type="text" placeholder="Search for friends" />
            {conversations.map(conversation => (
              <div
                onClick={() => setCurrentChat(conversation)}
                key={conversation._id}
              >
                <Conversation conversation={conversation} currentUser={user} />
              </div>
            ))}
          </ChatMenuWrapper>
        </ChatMenu>
        <ChatBox>
          <ChatBoxWrapper>
            {currentChat ? (
              <>
                <ChatBoxTop>
                  {messages.map(message => (
                    <div key={message._id} ref={scrollRef}>
                      <Message
                        message={message}
                        own={message.sender === user.id}
                        currentUser={user}
                        friendId={currentChat.members.find(
                          member => member !== user.id
                        )}
                      />
                    </div>
                  ))}
                </ChatBoxTop>
                <ChatBoxBottom>
                  <ChatBoxInput
                    placeholder="Write something..."
                    onChange={e => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></ChatBoxInput>
                  <ChatBoxBtn type="submit" onClick={handleSubmit}>
                    Send
                  </ChatBoxBtn>
                </ChatBoxBottom>
              </>
            ) : (
              <NoConversationText>
                Open a conversation to start a chat
              </NoConversationText>
            )}
          </ChatBoxWrapper>
        </ChatBox>
        <ChatOnlineContainer>
          <ChatOnlineWrapper>
            {friends.map(friend => (
              <div
                key={friend._id}
                onClick={() => handleOnFriendClick(friend._id)}
              >
                <ChatOnline friend={friend} />
              </div>
            ))}
          </ChatOnlineWrapper>
        </ChatOnlineContainer>
      </MessengerContainer>
    </>
  );
};
