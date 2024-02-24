import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const textStyle = {
    fontSize: '3rem',
    fontWeight: 600,
    textAlign: 'center',
    marginTop: '3rem'
}

const Dashboard = () => {
    const { user } = useSelector(state => state.auth);
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    });

    return (
        <Typography sx={textStyle}>
            This is the protected dashboard route.
        </Typography>
    );
};

export default Dashboard;