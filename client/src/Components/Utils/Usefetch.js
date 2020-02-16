import React from 'react';



//import axios from 'axios';

const useFetch = (url) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.data;
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    FetchData();
  }, []);
  return { response, error };
};


export default useFetch
