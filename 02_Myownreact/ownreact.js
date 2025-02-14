const root = document.querySelector('#root');
// how do react know what to render?
// react has a virtual DOM
// react has a reconciliation algorithm
// react has a diffing algorithm
// react has a commit phase
// react has a render phase
// Example-1
const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        children: 'Click Here To Visit Google'
    }
}
// create a function that will render the react element
// function customrender(reactElement, location) {
//     const domElement = document.createElement(reactElement.type);  
//     domElement.innerHTML = reactElement.props.children; 
//     domElement.setAttribute('href', reactElement.props.href);
//     location.appendChild(domElement);
// }
// customrender(reactElement,root);
// but it is hard to create a react element everytime
// so we can create a function that will create a react element for us
// Example-2
const domElement = document.createElement(reactElement.type);
domElement.innerHTML = reactElement.props.children;
for (const prop in reactElement.props) {
    if (prop !== 'children') {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }  
    root.appendChild(domElement);
};
// as the react is also a js library so we can create and execute the react component as a function and execute it same as js function like "functinName()"