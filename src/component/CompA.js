import React, { useState } from 'react'
import CompB from './CompB';

export default function CompA() {
    const [cendrol,setCendrol]=useState();
    const getValue=(value)=>{
        setCendrol(value)
    }
  return <>
  <h1 style={{textAlign:'center'}}>Cendrol Value Is : {cendrol}</h1>
  <CompB getValue={getValue}/>
  </>
}
