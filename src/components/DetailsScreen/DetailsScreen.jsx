import { useParams } from "react-router-dom";
import useShowDetails from './useShowDetails';
import styles from './DetailsScreen.module.css';

const DetailsScreen = () => {
  const { id } = useParams();
  const { showData, errorMessage } = useShowDetails(id);

  if (!showData) {
    return <div>{errorMessage}</div>;
  }

  const { image, name, genres, rating, status, schedule, summary, url } = showData;

  return (
    <div className={styles.wrapper}>
      <h1>{name}</h1>

      <div className={styles.imageAndDetails}>
        <div className={styles.imageContainer}>
          <img src={image?.original} alt={name} />
        </div>

        <div className={styles.showDetails}>
          <p>Name: {name}</p>
          <p>Genres: {genres?.join(', ')}</p>
          <p>Rating: {rating?.average}</p>
          <p>Status: {status}</p>
          <p>Schedule: {schedule?.days?.join(', ')} at {schedule?.time}</p>
        </div>
      </div>

      <div className={styles.showSummary}>
        <p>Summary: {summary}</p>
        <a href={url} target="_blank">Go to the show page</a>
      </div>
    </div>
  );
};

export default DetailsScreen;
