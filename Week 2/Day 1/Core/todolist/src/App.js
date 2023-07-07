import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("Todos")) || []
  );
  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, todo]);
    setNewTodo("");
  };
  const handleComplete = (idx) => {
    let updatedTodos = [...todos]; //creating a copy of the todos array to avoid mutating
    updatedTodos[idx].completed = !updatedTodos[idx].completed; // revert boolean value of completed
    //console.log(updatedTodos);
    setTodos(updatedTodos);
  };
  const deleteTodo = (idx) => {
    const updatedList = todos.filter((todo, i) => i !== idx);
    setTodos(updatedList);
  };

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={(e) => handleChange(e)} />
        <button>Add todo</button>
      </form>
      <div className="mt-3">
        {todos.map((todo, i) => (
          <div
            key={i}
            className="d-flex justify-content-center align-items-center gap-2 mb-3"
          >
            <input type="checkbox" onClick={() => handleComplete(i)} />
            <span
              style={
                todo.completed
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(i)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
