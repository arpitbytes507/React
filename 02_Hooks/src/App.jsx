import { useState, useEffect, useContext , useReducer ,useRef } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client'  
import './App.css';

// Create context
const context = React.createContext();
const initialState ={count:0} ;
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: initialState.count };
    default:
      throw new Error();
  }
}
function App() {
  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState);  //useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one
  const recount = useRef(0);      //myRef is an object with a current property that is initialized to the argument passed (0)
  // Function to increment count
  const increment = () => {
    setCount(count + 1);
  }
  // Update the document title when count changes
  useEffect(() => {
    document.title = `Clicked ${count} times`
  }, [count]);            //Empty array ensures this effect runs only once when the component mounts
  useEffect(() => {
    recount.current = count;
  });
  // Providing context value for other components to consume
  return (
    <context.Provider value={count}>
      <div>
        <h1 onClick={increment}>{count}</h1>
        <MyContext />
        <p>{state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        <p>Previous count: {recount.current}</p>
      </div>
    </context.Provider>
  );
}
// Component that consumes the context value
const MyContext = () => {
  const value = useContext(context);
  return <h2>Context Value: {value}</h2>;
}


export default App;
