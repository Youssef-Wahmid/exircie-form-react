import { useState, useEffect, useRef } from 'react';

const useAuth = (initState) => {
  const [loggedIn, setLoggedIn] = useState(initState);


  const previos = useRef(initState);

  useEffect(() => {
    console.log(`count changed from  ${previos.current} To ${loggedIn}`);
    previos.current = loggedIn
  }, [loggedIn]);

  return [loggedIn, setLoggedIn];
};
export default useAuth;
