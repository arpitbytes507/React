import React from 'react'      // import the StrictMode component
import ReactDOM from 'react-dom/client'    // import the createRoot function
import App from './App.jsx'     // import the App component
// we use the strict mode to check for potential problems in the code
// in react we cannot write the js directly as react has its own syntax and render function for rendering the react element
// so we need to convert the js code into react code
// in react we can use JSX to write the react code
// JSX is a syntax extension for javascript
// use curly braces to write the js code inside the JSX
// const reactElement2 = (
//   <a href="https://www.google.com">Click Here To Visit Google</a>
// );
// createRoot(document.getElementById('root')).render(
//   reactElement2
// )
// but when we use js object directly in jsx then it will not work
// because the syntax of the js object is different from the react element/component
// as we made our own custom render function in the previous example
// so we can use that function to render the react element
// but react has its own render function to render the react element and its own syntax
// let's create reactelement using the react syntax
// const createReactElement = React.createElement(
//   'type',
//   {attributes},
//   remaining arguments
// );
// Example-3                                                                                 
const reactElement3 = React.createElement(      //compare it with the reactElement2
  'a',
  {href: 'https://www.google.com'},
  'Click Here To Visit Google'
);
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <App/>
);