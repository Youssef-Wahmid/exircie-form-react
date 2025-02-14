import { useEffect, useRef, useState } from 'react';

const useQuery = (url) => {
  const [data, setData] = useState();
  const cahe = useRef(new Map());

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        cahe.current.set(url, json);
        setData(json);
      });
  }, []);

  const fetcher = (newUrl) => {
    //In the cach
    if (cahe.current.has(newUrl)) {
      // Get data from cache
      console.log(`cahe Data`, cahe.current);
      setData(cahe.current.get(newUrl));
      return;
    }

    //Not in the cach
    fetch(newUrl)
      .then((response) => response.json())
      .then((json) => {
        //put in the cache it
        cahe.current.set(newUrl, json);
        console.log(`not cahe Data `);
        setData(json);
      });
  };

  return { data, fetcher };
};

export default useQuery;
