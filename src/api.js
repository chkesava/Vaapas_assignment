export const fetchMovies = async (query) => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      console.log(data.docs)
      return data.docs;
    } catch (error) {
      console.error('Fetch error:', error);
      return [];
    }
  };
  