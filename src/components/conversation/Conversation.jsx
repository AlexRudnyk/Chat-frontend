import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  ConversationContainer,
  ConversationImg,
  ConversationName,
} from './Conversation.styled';

export const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find(
      member => member !== currentUser.id
    );
    const getUser = async () => {
      try {
        const { data } = await axios.get('/users?userId=' + friendId);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [conversation, currentUser]);

  return (
    <>
      {user && (
        <ConversationContainer>
          <ConversationImg src={user.avatarURL} alt="avatar" />
          <ConversationName>{user.username}</ConversationName>
        </ConversationContainer>
      )}
    </>
  );
};
