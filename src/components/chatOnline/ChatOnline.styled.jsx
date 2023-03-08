import styled from 'styled-components';

export const ChatOnlineWrapper = styled.div``;

export const ChatOnlineFriend = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
  margin-top: 10px;
`;

export const ChatOnlineImgContainer = styled.div`
  position: relative;
  border: 1px solid white;
  margin-right: 10px;
`;

export const ChatOnlineImg = styled.img`
  width: 32px;
  height: 32px;
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
