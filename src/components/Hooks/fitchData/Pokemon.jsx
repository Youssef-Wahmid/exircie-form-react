// Pagination

import { useEffect, useState } from 'react';

const Pokemon = () => {
  const [data, setData] = useState({});

  const [URL, setURL] = useState(
    `https://pokeapi.co/api/v2/pokemon/?limit=5&offset=0`,
  );

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          return;
        }
        return response.json();
      })
      .then((json) => {
        console.log(json.results);

        setData(json);
      });
    return () => false;
  }, [URL]);

  const previos = () => {
    if (data.previous !== null) {
      setURL(data.previous);
    }
  };
  const next = () => setURL(data.next);

  return (
    <>
      {data.results &&
        data.results.map((d, i) => (
          <div key={i}>
            <h4>
              {i} {d.name}
            </h4>
          </div>
        ))}
      {data.previous && <button onClick={previos}>Previos</button>}
      {data.next && <button onClick={next}>Next</button>}
    </>
  );
};

export default Pokemon;
