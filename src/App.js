import { useState } from 'react'
import './App.css'

function App() {
  let [todos, setTodos] = useState([{ id: 0, done: false, text: "This is a sample todo." }]);

  function toggleDone(id) {
    todos = todos.map(todo => {
      if (todo.id == id)
        todo.done = !todo.done;
      
      return todo;
    });

    setTodos(todos);
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
    </div>
  );
}

export default App;
