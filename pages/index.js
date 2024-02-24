import React from 'react';
import { Container, Typography } from '@mui/material';

const textStyle = {
  fontSize: '3rem',
  fontWeight: 700,
  textAlign: 'center',
  marginTop: '3rem'
};

export default function Home() {
  return (
    <Container fixed>
      <Typography sx={textStyle}>
        This is the home page
      </Typography>
    </Container>
  );
};
