import React, { useState } from 'react'
import "./style.css"
import PupUp from '../PupUp'
export default function Form() {

    const [valuesForm , setValuesForm] = useState({
        name:'',
        age:'',
        phone:'',
        isEmploye:false,
        salary:'',
    })
    const [msg,setMsg] =useState(false)
    const [messageErr,setMessageErr] =useState(null)

    
    function handleSubmit(e){
        e.preventDefault()
        setMessageErr(null)
        if (parseInt(valuesForm.age)<18 || parseInt(valuesForm.age)>100) {
          setMessageErr('Age is invalid')
        }else if (valuesForm.phone.length<10 || valuesForm.phone.length>12) {
          setMessageErr('Phone number is invalid')
          console.log(valuesForm.phone.length);

        }
        setMsg(true)
    }
    
    function isDisaibel(){
      if (valuesForm.name.length==0||valuesForm.age.length==0||valuesForm.phone.length==0) {
      return true
      }
      return false

    }
  
    function handelClickDiv(){
      if (msg) {
        setMsg(false)
      }
    }
    return (
    <>
        <div className="form-container" 
        onClick={handelClickDiv}
        >
                        
            <form onSubmit={handleSubmit}>
            <h2>Requesting a Loan</h2>
              <label htmlFor="name">Name:</label>
              <input type="text" value={valuesForm.name}
              onChange={e=>setValuesForm({...valuesForm,name:e.target.value})}
              />

              <label htmlFor="age">Age:</label>
              <input type="number"  value={valuesForm.age}
              onChange={e=>setValuesForm({...valuesForm,age:e.target.value})}
              />

              <label htmlFor="phone">Phone:</label>
              <input type="tel"  value={valuesForm.phone}
              onChange={e=>setValuesForm({...valuesForm,phone:e.target.value})}
              />

              <label >Are you isEmploye?</label>
              <input type="checkbox" checked={valuesForm.isEmploye} 
              onChange={e=>setValuesForm({...valuesForm,isEmploye:e.target.checked})}
              />

              <label htmlFor="salary">Salary:</label>
              <select  
              onChange={e=>setValuesForm({...valuesForm,salary:e.target.value})}
              >
                <option value="under_20k">Under 20k</option>
                <option value="20k_50k">20k-50k</option>
                <option value="50k_100k">50k-100k</option>
                <option value="over_100k">Over 100k</option>
              </select>

              <button 
                className={isDisaibel() ? 'disaibled' :''}
                disabled={isDisaibel()} 
                type="submit"
              >Submit</button>
            </form>
            {msg &&   <PupUp messageErr={messageErr} />}


        </div>
    </>
  )
}
