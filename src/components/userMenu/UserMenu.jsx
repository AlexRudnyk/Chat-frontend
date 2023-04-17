import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { Container, UserMenuText, UserMenuImg } from './UserMenu.styled';
import { Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <UserMenuText>
        Welcome, <strong>{user.username}</strong>
      </UserMenuText>
      <UserMenuImg src={user.avatarURL} alt="avatar" />
      <Button type="button" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
};
