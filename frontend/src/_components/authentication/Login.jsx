import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Box, Container, Typography, 
    TextField, Button, Checkbox, 
    FormControlLabel, SvgIcon, Link, Grid } 
    from '@mui/material';

import { history } from '_helpers';
import { authActions } from '_store';

export { Login };

function Login() {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(x => x.auth.isAuthenticated);
    const authError = useSelector(x => x.auth.error);
    const errSignin = useSelector(x => x.auth.error.signin);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState({
        email: false,
        password: false
    });

    const { email, password } = formData;

    const onChange = (e) => {
        setError({ ...error, [e.target.name]: false });
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        // redirect to home if already logged in
        if (isAuthenticated) history.navigate('/');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function onSubmit(event) {
        event.preventDefault();

        if (email === '') {
            setError({ ...error, email: true });
            return;
        }

        if (password === '') {
            setError({ ...error, password: true });
            return;
        }

        return dispatch(authActions.login(formData));
    }

    return (
        <Container component="main" maxWidth="sm">
            <Box
                sx={{
                    boxShadow: 3,
                    borderRadius: 2,
                    px: 4,
                    py: 6,
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    flex: 1
                }}
            >
                <Typography variant="h4" fontWeight={700} textAlign={'center'}>
                    Sign in to your account
                </Typography>
                <Button
                    type="button"
                    fullWidth
                    variant="outlined"
                    sx={{ mt: 3, mb: 2, fontWeight: '800', color: '#222', textTransform: 'none' }}
                >
                    <SvgIcon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg></SvgIcon>
                    Sign in with Google
                </Button>
                <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={onChange}
                        error={error.email}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onChange={onChange}
                        error={error.password}
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Box>
                        {errSignin !== '' &&
                            <Typography
                                variant='caption'
                                sx={{ color: 'red' }}
                            >
                                {errSignin}
                            </Typography>
                        }
                    </Box>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                Don't have an account?
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}
