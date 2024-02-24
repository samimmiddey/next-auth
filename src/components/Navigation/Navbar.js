import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { setUser } from '../../Store/Slices/authSlice';
import { auth } from '../../Firebase/config';
import { signOut } from 'firebase/auth';

const outerBoxStyle = {
    height: '75px',
    backgroundColor: 'primary.main',
};

const containerStyle = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
};

const logoStyle = {
    fontSize: '2rem',
    color: "#fff",
    fontWeight: 500
};

const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
};

const buttonStyle = {
    borderColor: '#fff !important',
    borderRadius: '8px',
    color: "#fff"
};

const linkStyle = { textDecoration: 'none' };

const userTextStyle = {
    color: '#fff',
    fontWeight: 500
};

const Navbar = () => {
    const { user } = useSelector(state => state.auth);
    const pathname = usePathname();

    const dispatch = useDispatch();
    const router = useRouter();

    const logoutHandler = async () => {
        try {
            await signOut(auth);
            dispatch(setUser(null));
            localStorage.removeItem('user');
            router.push('/login');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Box sx={outerBoxStyle}>
            <Container fixed sx={containerStyle}>
                <Link href='/' style={linkStyle}>
                    <Typography sx={logoStyle}>
                        Next App
                    </Typography>
                </Link>
                {
                    user ? (
                        <Box sx={buttonContainerStyle}>
                            <Typography sx={userTextStyle}>{user.email}</Typography>
                            <Button onClick={logoutHandler} variant='outlined' sx={buttonStyle}>Logout</Button>
                        </Box>
                    ) : (
                        <Box sx={buttonContainerStyle}>
                            {
                                pathname !== '/login' &&
                                <Link href='/login' style={linkStyle}>
                                    <Typography sx={{ color: '#fff' }}>Login</Typography>
                                </Link>
                            }
                            {
                                pathname !== '/register' &&
                                <Link href='/register'>
                                    <Button variant='outlined' sx={buttonStyle}>Register</Button>
                                </Link>
                            }
                        </Box>
                    )
                }
            </Container>
        </Box>
    );
};

export default Navbar;