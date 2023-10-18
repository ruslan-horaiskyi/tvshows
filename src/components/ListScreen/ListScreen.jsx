import { useState, useEffect } from "react";
import { API_URL } from "../../constants";

import './ListScreen.css'

const ListScreen = () => {
  const [query, setQuery] = useState('');
  const [shows, setShows] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (query.length >= 2) {
      const fetchShows = async () => {
        try {
          const response = await fetch(`${API_URL}?q=${query}`);
          const data = await response.json();

          if (data?.length > 0) {
            setShows(data.map(({ show }) => show));
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
        {shows.map(({ id, image, name, rating }) => (
          <li key={id}>
            <img src={image?.original} alt={name} />
            <div>
              <p>Name: {name}</p>
              <p>Rating: {rating?.average ?? 'none'}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListScreen;