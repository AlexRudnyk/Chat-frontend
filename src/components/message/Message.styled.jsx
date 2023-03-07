import styled from 'styled-components';

// export const MessageContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 20px;
//   align-items: ${props => props.own};
// `;

export const MessageTop = styled.div`
  display: flex;
`;

export const MessageBottom = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;

export const MessageTopImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const MessageTopText = styled.p`
  padding: 10px;
  border-radius: 20px;
  background-color: #1877f2;
  color: white;
  max-width: 300px;
`;
