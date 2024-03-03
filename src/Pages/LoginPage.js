import React, {  useState } from "react";

import {
  Container,
  Typography,
  Box,
  Grid,
  Link,
  TextField,
  Button,
  CssBaseline,
  Avatar,
} from "@mui/material/";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { login } from "../Redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const defaultTheme = createTheme();

  const [formValue, setFormValue] = useState({ email: "", password: "" });
  const changeHandler = (e) => {
    e.preventDefault();
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login({ formValue })).then(() => {
      navigate('/dashboard'); // Redirect to the dashboard page after successful login
    }).catch((error) => {
      // Handle login error if needed
    });
  };

  return (
    <div>
       <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          onSubmit={loginHandler}
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >

<Box
  sx={{
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: 'url(https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=600)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: (t) =>  t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
    backgroundSize: 'cover',width:'1000px',
    backgroundPosition: 'center',
    minHeight: '100vh', // Ensure the background covers the entire viewport height
  }}
>
  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
  <Typography component="h1" variant="h5">
    Sign in
  </Typography>
  {/* Rest of your content */}
</Box>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={changeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={changeHandler}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign in
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/register" variant="body2">
                  Don't have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </ThemeProvider>
    </div>
  );
};

export default LoginPage;

