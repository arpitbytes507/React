// to create a random background color changer
import { useState } from 'react'
function App() {
  const [color, setColor] = useState("white");
// Function to change the background color
  const changeColor = () => {
    const colors = ['black', 'red', 'green', 'blue', 'yellow'];
    const newColor = colors[Math.floor(Math.random() * colors.length)]
    setColor(newColor);
  };
  const buttontextcolor=color ==="black" ? "white" : "black";
  return (
    <div 
      className='w-full h-screen duration-100' 
      style={{backgroundColor: color}}
    >
      <button 
        onClick={changeColor} 
        style={{position:'fixed', top:'50%', left:'50%',transform:'translate(-50%, -50%)', padding: '10px 20px',fontSize: '20px',color:buttontextcolor}}
      >
      Change Background Color
      </button>
    </div>
  )
}
export default App;
