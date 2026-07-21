import { useState } from "react";
function App(){
  // const counter =10;
  const [counter, setCounter]=useState(10);
  const addButton=()=>{
    setCounter(counter+1);
  }
  const removeButton=()=>{
    setCounter(counter-1);
  }
  return(
    <>
    <div className="flex justify-center items-center min-h-screen">
    <div className="w-80 h-50 rounded-lg mx-auto border border-black bg-amber-500">
    <h2 className="text-amber-700 text-3xl font-bold pt-3 pb-2">Welcome to counter</h2>
    <button onClick={addButton} className="bg-blue-500 text-white p-1 rounded hover:bg-blue-700 w-20 mx-auto">Add</button>
    <br></br>
    <h2 className="pt-4">{counter}</h2>
    <br></br>
    <button onClick={removeButton} className="bg-blue-500 text-white p-1 rounded hover:bg-blue-700 w-20 mx-auto">Remove</button>
    </div>
    </div>
    </>
  )
}
export default App