import { useState, useEffect } from "react";
import { API_URL_SEARCH } from "../../constants";

const useShowData = (query) => {
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

  return { showData, errorMessage };
};

export default useShowData;
