import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: theme.spacing(2),
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[10],
  },
}));

const MovieCard = ({ title, author }) => {
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    const fetchDogImage = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImage(data.message);
    };

    fetchDogImage();
  }, []);

  return (
    <StyledCard>
      <CardMedia component="img" height="140" image={dogImage} alt="Random dog" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {author}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default MovieCard;
