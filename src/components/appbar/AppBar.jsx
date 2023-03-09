import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/userMenu';
import { AuthNav } from 'components/authNav';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>;
};
