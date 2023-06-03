import React, { useState } from 'react'

export default function CompB({getValue}) {
  const [value,setValue]=useState(0);
  const increament=()=>{
    setValue(value+10);
    getValue(value);
  }
  return <>
 <div className='button-div2'>

  <button onClick={increament}>Increament By 10</button>
  </div>
  </>
}
