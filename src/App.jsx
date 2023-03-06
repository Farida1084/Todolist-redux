import { useState } from "react";
import { useTodo, addTodo, removeTodo } from "./redux/todos";
import "./App.css";

let count = 1;

function App() {
  const { todoList } = useTodo("");
  const [todoTitle, setTodoTitle] = useState("");

  function handleChange(e) {
    setTodoTitle(e.target.value);
  }

  function handleTodo(e) {
    const todo = {
      title: todoTitle,
      done: false,
      id: count++,
    };

    addTodo(todo);
    setTodoTitle("");
  }

  return (
    <div>
      <div className="mb-10 text-2xl font-bold">Things i have to do:</div>
      <div>
        <input value={todoTitle} type="text" onChange={handleChange} />
        <button
          className=" ml-4  text-blue-800  border border-slate-300 hover:border-indigo-300 rounded-xl w-28"
          onClick={handleTodo}
        >
          Add Todo
        </button>
      </div>
      {todoList.map((todo) => {
        return (
          <div className="  ">
            <div className={`${todo.done ? "line-through" : ""}`}>
              {todo.title}
            </div>
            <div className=" mr-24">
              <button onClick={handleTodo}>
                {todo.done ? "Undo" : "Done"}
              </button>

              <button className=" ml-4" onClick={() => removeTodo(todo.id)}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
