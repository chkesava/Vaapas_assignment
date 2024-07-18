import React from 'react';
import { Grid } from '@mui/material';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <Grid container justifyContent="center" spacing={2}>
      {movies.map((movie) => (
        <Grid item key={movie.key}>
          <MovieCard
            title={movie.title}
            author={movie.author_name && movie.author_name.join(', ')}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
