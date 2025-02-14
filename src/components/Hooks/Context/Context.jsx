//Every child component under a Provider 
// can access the value provided by the context.

import  { useState } from 'react'
import User from './User'
import myContext from './myContext'


export default function Context() {
  const [user,setUser] = useState('Yassun')

  const values={user,setUser}
  return (
    <h1>
      {
        <myContext.Provider value={values}>
            <User />
        </myContext.Provider>
      }
    </h1>
  )
}
