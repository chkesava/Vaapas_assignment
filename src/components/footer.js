import React from 'react';
import { Container, Typography, Link, useTheme } from '@mui/material';

const Footer = () => {
  const theme = useTheme();
  const backgroundColor = theme.palette.mode === 'dark' ? '#303030' : '#f0f0f0';
  
  return (
    <footer style={{ backgroundColor }}>
      <Container maxWidth="md" style={{ textAlign: 'center' }}>
        <Typography variant="body1">
          Created by <strong>Kesava Chintha</strong>
        </Typography>
        <Link href="https://www.linkedin.com/in/kesava-chintha/" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
          <Typography variant="body2" color="primary">
            Connect with me on LinkedIn
          </Typography>
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;
