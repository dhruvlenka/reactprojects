import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  const addValue = () => {
   // count = count + 1;
    setCount(count+1); //new value of count
    console.log("Value Added", Math.random())
  }

  const prevAddValue = () => {
    /*
    generally react uses fiber, if are giving same data, it's make a bunch and pass to the UI, 
    if you don't want this then setCounter() accepts a callback where we take a prevCounter 
    variable which will increase by 1 or by any number, it will pass one by one to the UI.
    
    prevCounter: will give us last updated value.
    prevCounter: is a name/identifier you can take any name.
    */

    setCount(prevCounter => prevCounter+1);
    setCount(prevCounter => prevCounter+1);
    setCount(prevCounter => prevCounter+1);
    setCount(prevCounter => prevCounter+1);
    setCount(prevCounter => prevCounter+1);
  }

  const deleteValue = () => {
    if(count>0){
      setCount(count-1);
    }
  }

  return (
    <>
      <h1> Counter App </h1>
      <h2> Count {count} </h2>
      <button onClick={addValue}>Increase Counter </button>
      <button onClick={deleteValue}> Decrease Counter </button>
      <button onClick={prevAddValue}> Previous Add Counter </button>
    </>
  )
}

export default App
