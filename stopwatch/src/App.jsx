import { useState } from 'react'
import { useRef } from 'react';
import './App.css'

function App() {
  const [milisecond, setCount] = useState(0)
  const counter=()=>{
    setCount(prev=>prev+1);
  }
  const increment= useRef();
  const start=()=>{
    increment.current=setInterval(counter, 1);
  }
  const stop=()=>{
    clearInterval(increment.current)
  }
  const reset=()=>{
    clearInterval(increment.current)
    setCount(0)
  }
  return (
    <>
      <h3>hr  min  sec  milisecond</h3>
      <h3>{Math.floor((milisecond/3600000)%60)}  {Math.floor((milisecond/60000)%60)}  {Math.floor((milisecond/1000)%60)}  {milisecond%1000}</h3>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
