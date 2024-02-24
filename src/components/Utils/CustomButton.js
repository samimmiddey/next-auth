import React from 'react';
import { Button } from '@mui/material';

const buttonStyle = {
    minWidth: 0,
    minHeight: 0,
    padding: '0 20px',
    height: '45px',
    textTransform: 'none',
    color: "#fff",
    width: '100%',
    borderRadius: '8px',
    backgroundColor: 'primary.main',
    fontSize: '14px',
    '&:hover': {
        backgroundColor: 'primary.main'
    }
};

const CustomButton = ({ type, loading, text }) => {
    return (
        <Button
            disableElevation
            variant='contained'
            type={type}
            disabled={loading}
            sx={buttonStyle}
        >
            {text}
        </Button>
    );
};

export default CustomButton;