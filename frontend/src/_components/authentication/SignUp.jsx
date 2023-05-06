import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button, TextField,
  Link, Grid, Box,
  Typography, Container, SvgIcon
}
  from '@mui/material';

import { history } from '_helpers';
import { authActions } from '_store';

export default function SignUp() {
  const dispatch = useDispatch();
  const errSignup = useSelector(state => state.auth.error.signup);
  const isAuthenticated = useSelector(x => x.auth.isAuthenticated);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false
  });

  useEffect(() => {
    // redirect to home if already logged in
    if (isAuthenticated) history.navigate('/');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { firstName, lastName, email, password } = formData;

  const onChange = (e) => {
    setError({ ...error, [e.target.name]: false });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstName === '') {
      setError({ ...error, firstName: true });
      return;
    }
    if (lastName === '') {
      setError({ ...error, lastName: true });
      return;
    }
    if (email === '') {
      setError({ ...error, email: true });
      return;
    }
    if (password === '') {
      setError({ ...error, password: true });
      return;
    }

    return dispatch(authActions.signup(formData));
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
        }}
      >
        <Typography variant="h4" fontWeight={700} textAlign={'center'}>
          Sign up to get started
        </Typography>
        <Button
          type="button"
          fullWidth
          variant="outlined"
          sx={{ mt: 3, mb: 2, fontWeight: '800', color: '#222', textTransform: 'none' }}
        >
          <SvgIcon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg></SvgIcon>
          Sign up with Google
        </Button>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={onChange}
                error={error.firstName}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                onChange={onChange}
                error={error.lastName}
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={onChange}
                error={error.email}
                autoComplete="email"
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
                onChange={onChange}
                error={error.password}
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              {errSignup !== '' &&
                <Typography
                  variant='caption'
                  sx={{ color: 'red' }}
                >
                  {errSignup}
                </Typography>
              }
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
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}