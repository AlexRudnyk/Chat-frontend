import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Messenger } from 'pages/messenger';
import { Layout } from './layout';
import { PrivateRoute } from './privateRoute/PrivateRoute';
import { RestrictedRoute } from './restrictedRoute/RestrictedRoute';
import { RegisterPage } from 'pages/registerPage';
import { LoginPage } from 'pages/loginPage';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PrivateRoute component={Messenger} redirectTo="/login" />
              }
            />
            <Route
              path="registration"
              element={
                <RestrictedRoute component={RegisterPage} redirectTo="/" />
              }
            />
            <Route
              path="login"
              element={<RestrictedRoute component={LoginPage} redirectTo="/" />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </div>
    )
  );
};
