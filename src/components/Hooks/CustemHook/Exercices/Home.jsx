import {useState,useEffect} from 'react'
import useAuth from './useAuth'

const Home = () => {
    const [loggedIn,setLogger] = useAuth(0)
    
  return (
    <div>
        <h1>Home</h1>
        {loggedIn} <br />
        <button onClick={()=>setLogger(loggedIn+1)}>Go up</button>
        <button onClick={()=>setLogger(loggedIn-1)}>Go Down</button>
    </div>
  )
}

export default Home