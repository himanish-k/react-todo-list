import { useState } from 'react'
import './App.css'

function App() {
  let [todos, setTodos] = useState([{ id: 0, done: false, text: "This is a sample todo." }]);
  let [newTodo, setNewTodo] = useState('sample text');
  let [nextId, setNextId] = useState(1);
  
  // function removeTodo(id) {
  //   todos = todos.filter(todo => todo.id != id || (todo.id == id && !todo.done));

  //   setTodos(todos);
  // }

  function toggleDone(id) {
    todos = todos.map(todo => {
      if (todo.id == id) {
        todo.done = !todo.done;
      
        // setTimeout(() => removeTodo(id), 3 * 1000);
      }
      
      return todo;
    });

    setTodos(todos);
  }

  function addTodo(e) {
    const text = newTodo;
    const id = nextId;

    setTodos([...todos, { id, text, done: false }]);
    setNextId(id + 1);
  }

  return (
    <div className="App">
      <p>
        Add todo: <input value={newTodo} onChange={e => setNewTodo(e.target.value)} type="text" />
        <button className="add-todo-button" onClick={addTodo}>Add</button>
      </p>  
      <p>Todos:</p>
      <ul>
        {
          todos.map(({ id, text, done }) => {
              let style = {
                color: done ? 'green' : 'crimson',
                borderColor: done ? 'green' : 'crimson'
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
    </div>
  );
}

export default App;
