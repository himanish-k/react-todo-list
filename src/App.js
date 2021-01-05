import { useState } from 'react'
import './App.css'

function App() {
  let [todos, setTodos] = useState([{ id: 0, done: false, text: "This is a sample todo." }]);
  const [newTodo, setNewTodo] = useState('sample text');

  function toggleDone(id) {
    todos = todos.map(todo => {
      if (todo.id == id)
        todo.done = !todo.done;
      
      return todo;
    });

    setTodos(todos);
  }

  function addTodo(e) {
    const text = newTodo;
    const id = todos.length;

    setTodos([...todos, { id, text, done: false }]);
  }

  return (
    <div className="App">
      <p>Todos:</p>
      <ul>
        {
          todos.map(({ id, text, done }) => {
              let style = {
                color: done ? 'green' : 'crimson',
                'border-color': done ? 'green' : 'crimson'
              };
              return (
                <li key={id} style={style} onClick={() => toggleDone(id)}>
                  {text}
                </li>
              )
            }
          )
        }
      </ul>
      <p>
        Add todo: <input value={newTodo} onChange={e => setNewTodo(e.target.value)} type="text" />
        <button className="add-todo-button" onClick={addTodo}>Add</button>
      </p>  
    </div>
  );
}

export default App;
