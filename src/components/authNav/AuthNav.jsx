import { Navigation, AppBarLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Navigation>
      <AppBarLink to="signup">Registration</AppBarLink>
      <AppBarLink to="login">Login</AppBarLink>
    </Navigation>
  );
};
