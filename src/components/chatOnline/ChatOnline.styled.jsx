import styled from 'styled-components';

export const ChatOnlineWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;

  &:not(last-child) {
    margin-bottom: 20px;
  }

  &:hover {
    background-color: #e9e5e5;
  }
`;

export const ChatOnlineFriend = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
`;

export const ChatOnlineImgContainer = styled.div`
  position: relative;
  margin-right: 20px;
`;

export const ChatOnlineImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ChatOnlineBedge = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 10px;
  height: 10px;
  background-color: limegreen;
  border-radius: 50%;
`;

export const ChatOnlineName = styled.span``;
