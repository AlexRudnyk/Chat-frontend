import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { Container, UserMenuText } from './UserMenu.styled';
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
        Welcome, <strong>{user.email}</strong>
      </UserMenuText>
      <Button type="button" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
};
