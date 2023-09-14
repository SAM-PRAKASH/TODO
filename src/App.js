import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (name && description) {
      const newTodo = { name, description, status: "Not completed" };
      setTodos([...todos, newTodo]);
      setName("");
      setDescription("");
    }
  };

  return (
    <div className="App">
      <div className='ToDocard'>
        <div className='MyToDo'>
          <input type='text' value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" />
          <input type='text' value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Description" />
          <button onClick={handleAddTodo}>ADD</button>
        </div>
      </div>
      
      {todos.map((todo, index) => (
        <AddToDo key={index} name={todo.name} description={todo.description} />
      ))}
    </div>
  );

  function AddToDo({ name, description }) {
    const [status, setStatus] = useState("Not completed");
    const toggleStatus = () => {
      setStatus(status === "Not completed" ? "Completed" : "Not completed");
    };
  
    return (
      <div className='card'>
        <div className="card-content">
          <div>Name: {name}</div>
          <div>Description: {description}</div>
          <lable>Status: </lable>
          <button
        type="button"
        className={`btn ${status === "Not completed" ? "btn-success" : "btn-danger"}`}
        onClick={toggleStatus}
      >
        {status === "Not completed" ? "Completed" : "Not Completed"}
      </button>
      <div className='funBtn'>
          <button type="button" class="btn btn-success">Edit</button>
          <button type="button" class="btn btn-danger">Delete</button>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
