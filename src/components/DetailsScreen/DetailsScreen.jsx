import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { API_URL_DETAILS } from "../../constants";

const DetailsScreen = () => {
  const [showData, setShowData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const { id } = useParams();

  const fetchShowDataDetails = async () => {
    try {
      const response = await fetch(`${API_URL_DETAILS}${id}`);
      const data = await response.json();

      setShowData(data);
    } catch (error) {
      setErrorMessage('Error fetching show details.');
      console.error('Error fetching show details: ', error);
    }
  };

  useEffect(() => {
    fetchShowDataDetails();
  }, []);

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