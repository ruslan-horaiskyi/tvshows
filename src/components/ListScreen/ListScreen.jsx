import { useState } from "react";
import { Link } from 'react-router-dom';
import './ListScreen.css';
import useShowData from './useShowData';

const ListScreen = () => {
  const [query, setQuery] = useState('');
  const { showData, errorMessage } = useShowData(query);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <h1>TV Shows Search</h1>
      <input value={query} onChange={handleInputChange} type="text" placeholder="Type the show's name" />

      {query.length < 2 && (
        <p>Type the show's name</p>
      )}

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
