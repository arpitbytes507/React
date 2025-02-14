import { useState } from 'react'
import { useCallback,useRef  } from 'react';

function App() {
  const [Length,setLength] = useState(8);
  const [numallowed,setnumalloweed] = useState(false);
  const [charallowed,setcharallowed] = useState(false);
  const [Pass,setPass] = useState("");
  const copyhook = useRef(null);
  const passgenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numallowed) {
      str+="0123456789"
    } 
    if (charallowed){
      str+="./,':;\|][}{)(&%$#@!~`";
    }
    for (let i = 0; i < Length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPass(pass);
  },[Length,numallowed,charallowed,setPass]);
  const copytoclip = useCallback(()=>{
    copyhook.current?.select();
    window.navigator.clipboard.writeText(Pass);
  },[Pass]);
  // to handle pass if settings change
  const handleGenerate = () => {
    passgenerator();
  };
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
        <h1 className="text-white text-2xl font-semibold text-center">Password Generator</h1>
        <div className="flex justify-center mb-4">
          <input
            type="text"
            value={Pass}
            className="outline-none w-full py-2 px-4 text-lg text-center bg-gray-700 rounded-md text-white"
            readOnly
            ref={copyhook}
          />
          <button onClick={copytoclip} className='px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition'>Copy</button>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleGenerate}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition"
          >
            Generate Password
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={50} value={Length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
            <label>Length : {Length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
                   defaultChecked={numallowed}
                   id='numberInput'
                   onChange = {() => {
                    setnumalloweed((prev)=>(!prev));
                   }}/>
            <label htmlFor="numbersinput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
                   defaultChecked={charallowed}
                   id='charInput'
                   onChange = {() => {
                    setnumalloweed((prev)=>(!prev));
                   }}/>
            <label htmlFor="charinput">Characters</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
