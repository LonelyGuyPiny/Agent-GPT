import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Box, AppBar, Toolbar, Typography, Button, Menu, IconButton, MenuItem, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { authActions } from '_store';

export { Nav };

const pages = ['FAQs', 'Pricing'];

function Nav() {
    const authUser = useSelector(x => x.auth.user);
    const dispatch = useDispatch();
    const logout = () => dispatch(authActions.logout());

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // only show nav when logged in

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar >
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 5,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        DimaChat
                    </Typography>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 5,
                            display: { xs: 'flex', md: 'none' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                            flexGrow: 1
                        }}
                    >
                        DimaChat
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            href={'/#FAQs'}
                            sx={{ my: 1, color: 'inherit', display: 'block' }}
                        >
                            FAQs
                        </Button>
                        <Button
                            href={'/pricing'}
                            sx={{ my: 1, color: 'inherit', display: 'block' }}
                        >
                            Pricing
                        </Button>
                        <Button
                            href={'/dashboard/chat'}
                            sx={{ my: 1, color: 'inherit', display: 'block' }}
                        >
                            Dashboard
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Typography href="/login" component="a"
                            sx={{ my: 1, mr: 2, color: 'inherit', display: 'block', textDecoration: 'none', fontWeight: 600 }}
                        >
                            SignIn
                        </Typography>
                        <Typography href="/signup" component="a"
                            sx={{ my: 1, color: 'inherit', display: 'block', textDecoration: 'none', fontWeight: 600 }}
                        >
                            SignUp
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem component={Link} href={'/#FAQs'} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">FAQs</Typography>
                            </MenuItem>
                            <MenuItem component={Link} href={'/pricing'} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Pricing</Typography>
                            </MenuItem>
                            <MenuItem component={Link} href={'/dashboard/chat'} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Dashboard</Typography>
                            </MenuItem>
                            <MenuItem component={Link} href={'/login'} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">SignIn</Typography>
                            </MenuItem>
                            <MenuItem component={Link} href={'/signup'} onClick={handleCloseNavMenu}>
                                <Typography href='/signup' textAlign="center">SignUp</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}