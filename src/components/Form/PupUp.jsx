import React, { useState } from 'react'
export default function PupUp({children,messageErr=null}) {
    
    
  return (
    <div id='model'>
      <div  id='model-content'>
        <h1 style={{color: messageErr?'red' :'green'}}> 
          {messageErr ? messageErr : 'Done'}  
        </h1>
      </div>
    </div>
  )
}
