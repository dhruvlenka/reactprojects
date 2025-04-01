import {useState} from "react"

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div 
    className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="flex items-center justify-center h-screen">
          <h1 className={`text-center text-9xl font-bold ${color === "black" ? "text-white" : "text-black"}`}> Background Changer</h1>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

        {/* button 1 for red */}
        <button 
        onClick={() => setColor("red")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "red"}}> Red </button>

        {/* button 1 for black*/}
        <button 
        onClick={() => setColor("black")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "black"}}> Black </button>

        {/* button 1 for green */}
        <button 
        onClick={() => setColor("green")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "green"}}> Green </button>

        {/* button 1 for blue */}
        <button 
        onClick={() => setColor("blue")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "blue"}}> Blue </button>

        {/* button 1 for yellow */}
        <button
        onClick={() => setColor("yellow")}
        className="outline-none px-4 py-1 rounded-full black shadow-lg" 
        style={{backgroundColor: "yellow"}}> Yellow </button>

        {/* button 1 for violet*/}
        <button
        onClick={() => setColor("violet")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "violet"}}> Violet </button>

        {/* button 1 for yellow */}
        <button
        onClick={() => setColor("cyan")}
        className="outline-none px-4 py-1 rounded-full black shadow-lg" 
        style={{backgroundColor: "cyan"}}> Cyan </button>

        {/* button 1 for violet*/}
        <button
        onClick={() => setColor("gray")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "gray"}}> Gray </button>
        
        </div> 
        </div>
    </div>
  );
};

export default App
