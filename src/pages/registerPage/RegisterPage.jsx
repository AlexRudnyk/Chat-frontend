import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { LinkRouter } from './RegisterPage.styled';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme();

export const RegisterPage = () => {
  const [userName, setUserName] = React.useState('');
  const [userMail, setUserMail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [userNameError, setUserNameError] = React.useState(false);
  const [userMailError, setUserMailError] = React.useState(false);
  const [userPasswordError, setUserPasswordError] = React.useState(false);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    setUserNameError(false);
    setUserMailError(false);
    setUserPasswordError(false);

    if (userName === '') {
      setUserNameError(true);
    }
    if (userMail === '') {
      setUserMailError(true);
    }
    if (userPassword === '') {
      setUserPasswordError(true);
    }

    const form = event.currentTarget;
    dispatch(
      register({
        username: form.elements.username.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={e => setUserName(e.currentTarget.value)}
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Name"
                  error={userNameError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={e => setUserMail(e.currentTarget.value)}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={userMailError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={e => setUserPassword(e.currentTarget.value)}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={userPasswordError}
                  helperText="Password min 7 symbols is required"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <LinkRouter to="/login">
                  Already have an account? Sign in
                </LinkRouter>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};
