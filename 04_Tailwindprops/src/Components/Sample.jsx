import React from 'react'
import ReactDOM from 'react-dom/client'

function Sample(props) {
    console.log(props);
  return (
    <div className="flex flex-col items-center p-7 rounded-2xl">
      <div>
        <img 
          className="size-48 shadow-xl rounded-md" 
          alt="" 
          src="https://images.pexels.com/photos/30238187/pexels-photo-30238187/free-photo-of-stunning-image-of-the-tarantula-nebula.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
        />
      </div>
      <div className="flex">
        <span className="text-2xl font-medium">{props.channel}</span>
        <span className="font-medium text-sky-500">The Anti-Patterns</span>
        <span className="flex">
          <span>No. 4</span>
          <span>·</span>
          <span>2025</span>
        </span>
      </div>
    </div>
  )
}
export default Sample
