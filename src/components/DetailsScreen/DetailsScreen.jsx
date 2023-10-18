import { useState } from "react";

const DetailsScreen = () => {
  const [showData, setShowData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  if (!showData) {
    return <div>{errorMessage}</div>
  }

  const { image, name, genres, rating, status, schedule, summary } = showData;

  return (
    <>
      <h1>Show Details</h1>

      <div>
        <img src={image?.original} alt={name} />
        {name && <p>Name: {name}</p>}
        {genres && <p>Genres: {genres.join(', ')}</p>}
        {rating && <p>Rating: {rating?.average}</p>}
        {status && <p>Status: {status}</p>}
        {schedule && <p>Schedule: {schedule.days?.join(', ')} at {schedule.time}</p>}
        {summary && <p>Summary: {summary}</p>}
        {url && <a href={url} target="_blank">Go to the show page</a>}
      </div>
    </>
  );
};

export default DetailsScreen;