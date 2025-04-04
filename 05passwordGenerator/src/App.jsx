import { useRef } from 'react';
import { useState, useCallback, useEffect } from 'react'

function App() {
//variables
  //useState hook
  const [length, setLength] = useState(8) 
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)

  //useCallback hook
  //passwordGenerator function
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    //if numberAllowed is true, add numbers to the string
    if(numberAllowed) {
      str += "0123456789"
    }
    //if charAllowed is true, add characters to the string
    if(charAllowed) {
      str += "<>^{}()[]@#$%^&*!~`-_+="
    }

    //length of the password
    for (let i = 0; i<=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }
    //set the password
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    //method: select the password
    passwordRef.current.select()
    //range mehthod, passwordRef.current.setSelectionRange(0, 5)
    window.navigator.clipboard.writeText(password)
  }, [password])  

  //useEffect hook
  //when length, numberAllowed, charAllowed changes: call passwordGenerator function
  useEffect(() => {passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator])
  
  //return statement
  //rendering the component
  return (
    //main div
      <div className="w-full max-w-11/12 mx-auto shadow-lg rounded-lg px-6 py-10 my-12 bg-gray-900">
        {/* Header */}
        <h1 className='text-white text-center text-2xl font-semibold mb-6'> Password Generator </h1>

        {/* Input and Copy Button */}
        <div className="flex shadow rounded-lg overflow-hidden bg-gray-100 px-3 py-4"> 
          <input 
          type="text"
          value={password}
          className="outine-none w-full bg-transparent placeholder-gray-400"
          placeholder='Password'
          // readOnly: true, set the input to readOnly
          readOnly
          // ref: passwordRef, set the ref to passwordRef
          ref={passwordRef} // connection with: const passwordRef = useRef(null) we are using this on "const copyPasswordToClipboard" function
          />
          
          {/* Copy Button */}
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-5 py-2 text-lg font-semibold h-full'> copy </button>
        </div>

         {/* Length Slider */}
        <div className='flex items-center gap-x-2 mt-4'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer accent-blue-600'
          onChange={(e) => setLength(e.target.value)}
          />
          <label className="text-orange-500 font-medium">Length: {length}</label>
          {/* Number Checkbox */}
          <div className="flex items-center gap-x-1">
           <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={ () => {
              setNumberAllowed((prev) => !prev)
            }
            }
            />
            <label className="text-orange-500 font-medium">Number {numberAllowed}</label>
           </div>

           {/* Character Checkbox */}
           <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"
            value={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            />
             <label className="text-orange-500 font-medium">Character {charAllowed}</label>
           </div>
           </div>
        </div> 
  );
}
  
export default App;
