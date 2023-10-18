import { useState, useEffect } from "react";

const ListScreen = () => {
  const [query, setQuery] = useState('');
  const [shows, setShows] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');


  return (
    <div>
      <h1>TV Shows Search</h1>
      <input type="text" placeholder="Type the show's name" />

      {errorMessage && <div>{errorMessage}</div>}

      <ul>
        {shows.map((show) => (
          <li key={show.id}>
            <img src={show.image && show.image.medium} alt={show.name} />
            <div>
              <p>Name: {show.name}</p>
              <p>Rating: {show.rating && show.rating.avarage}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListScreen;