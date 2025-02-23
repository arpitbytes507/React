import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../Features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch()
    const [editId, setEditId] = useState(null);
    const [newText, setNewText] = useState('');
    const handleEdit = (todo) => {
        setEditId(todo.id);
        setNewText(todo.text);
    };
    const handleUpdate = (id) => {
        if (newText.trim()) {
            dispatch(updateTodo({ id, text: newText }));
            setEditId(null);
        }
    };
    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        {editId === todo.id ? (
                            <input
                                type="text"
                                value={newText}
                                onChange={(e) => setNewText(e.target.value)}
                                className="text-black px-2 py-1 rounded"
                            />
                        ) : (
                            <div className="text-white">{todo.text}</div>
                        )}

                        <div className="flex gap-2">
                            {editId === todo.id ? (
                                <button
                                    onClick={() => handleUpdate(todo.id)}
                                    className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                                >
                                    Update
                                </button>
                            ) : (
                                <button
                                    onClick={() => handleEdit(todo)}
                                    className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                                >
                                    Edit
                                </button>
                            )}

                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                            >
                                🗑️
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );

}

export default Todos
