import { useParams } from "react-router-dom";
import useShowDetails from './useShowDetails';

const DetailsScreen = () => {
  const { id } = useParams();
  const { showData, errorMessage } = useShowDetails(id);

  if (!showData) {
    return <div>{errorMessage}</div>
  }

  const { image, name, genres, rating, status, schedule, summary, url } = showData;

  return (
    <>
      <h1>Show Details</h1>

      <div>
        <img src={image?.original} alt={name} />
        <p>Name: {name}</p>
        <p>Genres: {genres?.join(', ')}</p>
        <p>Rating: {rating?.average}</p>
        <p>Status: {status}</p>
        <p>Schedule: {schedule?.days?.join(', ')} at {schedule?.time}</p>
        <p>Summary: {summary}</p>
        <a href={url} target="_blank">Go to the show page</a>
      </div>
    </>
  );
};

export default DetailsScreen;
