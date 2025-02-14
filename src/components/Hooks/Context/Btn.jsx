import { useContext } from 'react'
import myContext from './myContext';


function Btn() {
  
  const {user,setUser} = useContext(myContext)
  console.log(user);
    const handelClick =()=>{
      if (user=='Yassun') {
        setUser('ahmed')
        return

      }

      setUser('Yassun')
    }
  return (
    <button onClick={handelClick}>Changer name</button>
  )
}

export default Btn