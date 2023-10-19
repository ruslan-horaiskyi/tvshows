import { useState, useEffect } from "react";
import { API_URL_DETAILS } from "../../constants";

const useShowDetails = (id) => {
  const [showData, setShowData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
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

    fetchShowDataDetails();
  }, [id]);

  return { showData, errorMessage };
};

export default useShowDetails;
