import { useState, useEffect } from "react";

import './ListScreen.css'

const ListScreen = () => {
  const [query, setQuery] = useState('');
  const [shows, setShows] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (query.length >= 2) {
      const fetchShows = async () => {
        try {
          const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
          const data = await response.json();

          if (data && data.length > 0) {
            setShows(data.map((item) => item.show));
            setErrorMessage('');
          } else {
            setShows([]);
            setErrorMessage('Sorry, nothing found with this search');
          }
        } catch (error) {
          setShows([]);
          setErrorMessage('Error fetching shows');
          console.error('Error fetching shows: ', error);
        }
      };

      fetchShows();
    } else {
      setShows([]);
      setErrorMessage('');
    }
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <h1>TV Shows Search</h1>
      <input value={query} onChange={handleInputChange} type="text" placeholder="Type the show's name" />

      {errorMessage && <div>{errorMessage}</div>}

      <ul className="list">
        {shows.map((show) => (
          <li key={show.id}>
            <img src={show.image && show.image.medium} alt={show.name} />
            <div>
              <p>Name: {show.name}</p>
              <p>Rating: {(show.rating && show.rating.average != null) ? show.rating.average : 'none'}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListScreen;