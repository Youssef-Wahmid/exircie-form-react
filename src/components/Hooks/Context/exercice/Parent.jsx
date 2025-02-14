import { createContext, useState } from "react"
import Child from "./Child"


const MyContext = createContext()
const MyContext2 = createContext()
const users = [
    { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
    { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
    { id: 3, name: 'Charlie', age: 35, email: 'charlie@example.com' },
    { id: 4, name: 'Diana', age: 28, email: 'diana@example.com' },
    { id: 5, name: 'Eve', age: 22, email: 'eve@example.com' }
];

const text = 'string '
const nb = 2223

function Parent() {
    const [state , setState] = useState('String state')
  return (
    <MyContext.Provider value={text}>
        <MyContext2.Provider value={nb}>
            <Child/> 
        </MyContext2.Provider>
    </MyContext.Provider>
  )
}


export {MyContext,MyContext2}
export default Parent