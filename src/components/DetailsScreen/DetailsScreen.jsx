import { useState } from "react";

const DetailsScreen = () => {
  const [show, setShow] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div>
      <h1>Show Details</h1>
      {show ? (
        <div>
          <img src={show.image && show.image.medium} alt={show.name} />
          <p>Name:</p>
          <p>Genres:</p>
          <p>Rating:</p>
          <p>Status:</p>
          <p>Schedule:</p>
          <p>Summary:</p>
          <a href={show.url} target="_blank">Go to the show page</a>
        </div>
      ) : (
        <div>{errorMessage}</div>
      )}
    </div>
  );
};

export default DetailsScreen;