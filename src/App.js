import React, { useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container, Typography, Switch, FormControlLabel, Box, CircularProgress } from '@mui/material';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/footer';
import { fetchMovies } from './api';
import './App.css'; // Import the CSS file for the sticky footer

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          primary: {
            main: darkMode ? '#03dac6' : '#6200ea',
          },
          secondary: {
            main: darkMode ? '#f48fb1' : '#03dac6',
          },
          background: {
            default: darkMode ? '#121212' : '#f5f5f5',
            paper: darkMode ? '#1e1e1e' : '#ffffff',
          },
          text: {
            primary: darkMode ? '#ffffff' : '#000000',
            secondary: darkMode ? '#bbbbbb' : '#555555',
          },
        },
        typography: {
          fontFamily: 'Roboto, Arial, sans-serif',
        },
      }),
    [darkMode]
  );

  const handleSearch = async (query) => {
    setIsLoading(true);
    const results = await fetchMovies(query);
    setMovies(results);
    setIsLoading(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className="app-container">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, mb: 2 }}>
          <Typography variant="h4" component="h1" align="center" sx={{ color: theme.palette.primary.main }}>
            Movie Search
          </Typography>
          <FormControlLabel
            control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
            label="Dark Mode"
            sx={{ color: theme.palette.text.primary }}
          />
        </Box>
        <SearchBar onSearch={handleSearch} />
        {isLoading ? (
          <Box display="flex" justifyContent="center" mt={4}>
            <CircularProgress />
          </Box>
        ) : (
          <MovieList movies={movies} />
        )}
        <ScrollToTop />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
