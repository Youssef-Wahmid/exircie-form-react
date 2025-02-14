import { useState } from "react";
import useQuery from "./useQuery"

function Index() {

    const [pokeName , setPokename]=useState('')
   const url =`https://pokeapi.co/api/v2/pokemon/ditto`
   const {data,fetcher} =useQuery(url)

//    console.log(data&&data.name);
   const handelClick = () => { 
    
    fetcher(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)

    }
  return (
    <div>
        <h1>Index</h1>
        <h4>Name ; {data?.name} </h4>
        <input type="text" value={pokeName}
        onChange={(e)=>setPokename(e.target.value)} />
        <button onClick={handelClick}>Click</button>
    </div>
  )
}

export default Index