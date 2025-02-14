import {useState,useEffect} from 'react'

const useCustemTimer = (initValue=0) => {
    const [timer, setTimer] = useState(initValue);
    useEffect(() => {
      const interval = setInterval(() => {
        setTimer(timer+1);
        console.log(timer);
      }, 1000);
  
      return ()=> clearInterval(interval);
    }, [timer]);

    return timer
  
}

export default useCustemTimer