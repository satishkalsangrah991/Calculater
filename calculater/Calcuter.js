import React, { useState } from 'react'
import "./calculater.css"

const Calcuter = () => {
  const [result ,setResult]=useState('')

  const resultData=(event)=>{
setResult(result.concat(event.target.value))
  }
  const clearData=()=>{
    setResult("");

  }
  const equleData=()=>{
    setResult(eval(result).toString())
  }
  return (
   <>
    <div className='calc'>
    <input type='text' placeholder='0' id='answer' value={result} onChange={()=>{}}></input>
    <input type="button" value='9' className='button' onClick={resultData}></input>
    <input type="button" value='8' className='button' onClick={resultData}></input>
    <input type="button" value='7' className='button' onClick={resultData}></input>
    <input type="button" value='6' className='button' onClick={resultData}></input>
    <input type="button" value='5' className='button' onClick={resultData}></input>
    <input type="button" value='4' className='button' onClick={resultData}></input>
    <input type="button" value='3' className='button' onClick={resultData}></input>
    <input type="button" value='2' className='button' onClick={resultData}></input>
    <input type="button" value='1' className='button' onClick={resultData}></input>
    <input type="button" value='0' className='button' onClick={resultData}></input>
    <input type="button" value='+' className='button' onClick={resultData}></input>
    <input type="button" value='-' className='button' onClick={resultData}></input>
    <input type="button" value='*' className='button' onClick={resultData}></input>
    <input type="button" value='/' className='button' onClick={resultData}></input>
    <input type="button" value='%' className='button' onClick={resultData}></input>
    <input type="button" value='.' className='button' onClick={resultData}></input>
    <input type="button" value='Clear' className='button w-50' onClick={clearData}></input>
    <input type="button" value='=' className='button w-50' onClick={equleData}></input>
    </div>
   </>
  )
}

export default Calcuter