import { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './ListScreen.module.css';
import useShowData from './useShowData';

const ListScreen = () => {
  const [query, setQuery] = useState('');
  const { showData, errorMessage } = useShowData(query);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <h1>TV Shows Search</h1>
      <input value={query} onChange={handleInputChange} type="text" placeholder="Spider ..." />

      {query.length < 2 && (
        <h3>Type the show's name</h3>
      )}

      {errorMessage && <div>{errorMessage}</div>}

      <ul className={styles.list}>
        {showData.map(({ id, image, name, rating }) => (
          <li key={id}>
            <Link to={`/details/${id}`}>
              <img src={image?.original} alt={name} />
              <div className={styles.showInfo}>
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
