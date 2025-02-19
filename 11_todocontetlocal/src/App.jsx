import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./Context/TodoContext";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]); // return empty array as null or undefined can made the system complex
  const addTodo = (todo) => {
    setTodos((prev) => [{id:Math.floor(Math.random()*100)+1,...todo},...prev]) //to genrate random id 
  }
  const updateTodo = (id,todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))  //to genrate loop for each id and check the id 
  }                         // i can also use forEach loop also but map makes it more easy(be updated)
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id))  //filter will add the todos which id does not match it into array
  }
  const completeTodo = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo,completed : !prevTodo.completed} : prevTodo)))
  }
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('Todos'));
    if(todos && todos.length > 0){
      setTodos(todos);
    }
  },[])
  useEffect(() => {
    localStorage.setItem('Todos', JSON.stringify(todos));
  },[todos])
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,completeTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key = {todo.id} className="w-full">
                <TodoItem todo =  {todo}/>
              </div>
            ))}
          </div>
          </div>
      </div>
    </TodoProvider>
  );
}

export default App;
