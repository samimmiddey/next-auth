import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const Spinner = () => {
    return (
        <Box sx={containerStyle}>
            <CircularProgress sx={{ zIndex: 999, color: 'primary.main' }} />
        </Box>
    );
};

export default Spinner;