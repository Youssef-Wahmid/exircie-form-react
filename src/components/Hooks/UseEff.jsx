import React, { useEffect, useState } from 'react'
// useEffect(() => {} , [])
// useEffect(()=>{
    //     //Traitment
    //     console.log('Run code',state);
    //     // runinig before new render (Optional)
    //     return ()=>{console.log('Cleane function'); } 
    // },[state])


    const url = `https://fakestoreapi.com/users`;
    
export default function UseEff() {
    const [data,setData]  = useState([])  ;
    const [dataFilter,setDataFilter]  = useState([])  ;
    const [Input,setInput]  = useState('')  ;

    //Execute only once (first render)
    useEffect(()=>{
        fetch(url)
        .then(response =>response.json())
        .then(Listdata =>setData(Listdata))
        return () =>false
    },[])

    //Execute only once (first render)
    useEffect(() => {        
      setDataFilter(data)
    }, [data])

    useEffect(() => {
        const filterUsers = data.filter(u=>(
            u.username.includes(Input)
            // u.username.includes('')
        ))
        setDataFilter(filterUsers)
    }, [Input])
    
    
    const handelChange = (e) =>setInput(e.target.value)
    

    const Display =()=> {
        return (<>
        Search an User :<input type="text" 
        value={Input}
        onChange={handelChange} />

        <div style={{display:'flex',flexWrap:'wrap'}}>
            {dataFilter.map(u=>{
                return(
                    <div key={u.id} style={{border:'1px solid' , padding:'0 5px',margin:' 5px' , width:'300px'}}>
                        <h5>{u.username} </h5>
                    </div>
                )
            })}
        </div>
        </>)
        
    }
  return Display()
  
}





/*

useEffect(() => {
      setDataFilter(data)
    }, [data])
    
const handelChange = (e) =>{ 
    const filterUsers = data.filter(u=>(
                    u.username.includes(e.target.value)
    ))
    setDataFilter(filterUsers)
}

*/