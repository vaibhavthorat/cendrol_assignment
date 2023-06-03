import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import CompA from './component/CompA';

function App() {
  const [count,setCount]=useState(0);
  const [color,setColor]=useState('');
  const [flag,setFlag]=useState(true)
  const increment=()=>{
    setCount(count+1);
  }
  const changeColor=()=>{
    const randomcolor='#'+ Math.floor(Math.random()*16777215).toString(16);
      setColor(randomcolor);
  }
  return (
    <div className="App">
          <div className='container'>
            <div className='circle' style={{background:`${color}`}}>
              <h1>{count}</h1>
              <button onClick={increment} style={{background:`${color}`}}>Click to Increase Counter</button>
            </div>
          </div>
          <div className='button-div'>
          <button onClick={changeColor} style={{background:`${color}`}}>Change Color</button>
          </div>
          <div className="button-div3">
          <button onClick={()=>setFlag(!flag)} style={{backgroundColor:flag? 'red':'blue'}}>{flag? 'True':'False'}</button>
          </div>
          <CompA></CompA>
          
    </div>
  );
}

export default App;
