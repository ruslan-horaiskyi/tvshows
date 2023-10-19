import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { API_URL_SEARCH } from "../../constants";

import './ListScreen.css'

const ListScreen = () => {
  const [query, setQuery] = useState('');
  const [showData, setShowData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (query.length >= 2) {
      const fetchShowData = async () => {
        try {
          const response = await fetch(`${API_URL_SEARCH}?q=${query}`);
          const data = await response.json();

          if (data?.length > 0) {
            setShowData(data.map(({ show }) => show));
            setErrorMessage('');
          } else {
            setShowData([]);
            setErrorMessage('Sorry, nothing found with this search');
          }
        } catch (error) {
          setShowData([]);
          setErrorMessage('Error fetching shows');
          console.error('Error fetching shows: ', error);
        }
      };

      fetchShowData();
    } else {
      setShowData([]);
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
        {showData.map(({ id, image, name, rating }) => (
          <li key={id}>
            <Link to={`/details/${id}`}>
              <img src={image?.original} alt={name} />
              <div>
                <p>Name: {name}</p>
                <p>Rating: {rating?.average ?? 'none'}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListScreen;