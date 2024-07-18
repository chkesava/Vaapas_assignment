# Movie Search App

## Description

The Movie Search App is a React application that allows users to search for movies using the Open Library Search API. The application fetches movie data based on user input and displays the results as cards, each featuring a random dog image from the Dog CEO API. The app is designed with Material-UI for a responsive and visually appealing interface.

## Features

- Search for movies using the Open Library API.
- Display movie results in card format with relevant information.
- Each movie card includes a random dog image fetched from the Dog CEO API.
- Responsive design using Material-UI.
- Dark and light theme toggle.
- Hover effects on movie cards.
- Smooth scrolling to the top feature.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/movie-search-app.git
    cd movie-search-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

    The app should now be running on `http://localhost:3000`.

## Project Structure



- `components/SearchBar.js`: Contains the search bar UI component.
- `components/MovieCard.js`: Contains the movie card UI component.
- `components/MovieList.js`: Renders a list of `MovieCard` components.
- `api.js`: Handles API requests to fetch movie data.
- `App.js`: Main application component.
- `index.js`: Entry point of the application.
- `App.css`: Contains global styles for the application.

## Usage

### Search for Movies

1. Enter a movie name in the search bar.
2. Press `Enter` or click the search button to submit the query.
3. The application will fetch and display movie data in card format.

### Toggle Theme

1. Use the theme toggle button to switch between light and dark themes.

### Scroll to Top

1. Click the scroll-to-top button to smoothly scroll back to the top of the page.

## API Integration

### Open Library Search API

- Endpoint: `https://openlibrary.org/search.json?q={query}`
- Fetches movie data based on the search query.

### Dog CEO API

- Endpoint: `https://dog.ceo/api/breeds/image/random`
- Fetches a random dog image for each movie card.

## Error Handling

- Displays an error message if the API request fails.
- Handles loading states with a loading spinner.

## Additional Features

- Basic form validation to check if the search input is empty.
- Hover effects on movie cards for improved user experience.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Open Library](https://openlibrary.org/developers/api)
- [Dog CEO](https://dog.ceo/dog-api/)
- [Material-UI](https://mui.com/)

## Contact

For any inquiries or issues, please contact [chkesava54@gmail.com].
