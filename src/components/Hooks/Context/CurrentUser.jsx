import { useContext } from "react"
import myContext from "./myContext";

function CurrentUser() {
    const xx = useContext(myContext)
    console.log(xx);
    
  return (
    <div> {xx.user}</div>
  )
}

export default CurrentUser