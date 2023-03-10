import styled from 'styled-components';

export const MessengerContainer = styled.div`
  height: calc(100vh - 70px);
  display: flex;
`;

export const ChatMenu = styled.div`
  flex: 3.5;
`;

export const ChatBox = styled.div`
  flex: 5.5;
`;

export const ChatOnlineContainer = styled.div`
  flex: 3;
`;

export const ChatMenuWrapper = styled.div`
  padding: 10px;
  height: 100%;
`;

export const ChatBoxWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  height: 100%;
`;

export const ChatOnlineWrapper = styled.div`
  padding: 10px;
  height: 100%;
`;

export const ChatMenuInput = styled.input`
  width: 90%;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid gray;
`;

export const ChatBoxTop = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding-right: 10px;
`;

export const ChatBoxBottom = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ChatBoxInput = styled.textarea`
  width: 80%;
  height: 90px;
  padding: 10px;
`;

export const ChatBoxBtn = styled.button`
  width: 70px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: teal;
  color: white;
`;

export const NoConversationText = styled.span`
  position: absolute;
  top: 10%;
  font-size: 50px;
  color: rgb(224, 217, 217);
  cursor: default;
`;
