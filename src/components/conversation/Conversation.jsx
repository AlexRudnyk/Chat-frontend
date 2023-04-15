import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  ConversationContainer,
  ConversationImg,
  ConversationName,
} from './Conversation.styled';

export const Conversation = ({ conversation, currentUser }) => {
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find(
      member => member !== currentUser.id
    );
    const getUser = async () => {
      try {
        const { data } = await axios.get('/users?userId=' + friendId);
        setFriend(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [conversation, currentUser]);

  return (
    <>
      {friend && (
        <ConversationContainer>
          <ConversationImg src={friend.avatarURL} alt="avatar" />
          <ConversationName>{friend.username}</ConversationName>
        </ConversationContainer>
      )}
    </>
  );
};
