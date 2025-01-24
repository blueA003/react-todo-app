import { useState } from "react"
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const value = localStorage.key(i);
    result.push(value);
  }
  return result;
}


function App() {

  // const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState(fetchTodos());
  // const handleInput = (event) => {
  //   console.log(event)
  //   const value = event.target.value;
  //   setInputText(value);
  // }

  
  const addTodo = (todo) => {
    localStorage.setItem(todo, todo);
    setTodos((currentTodos) => {
      return [...currentTodos, todo]
    })
    // setInputText('');
  }

  const removeTodo = (todo) => {
    const result = todos.filter(todoItem => {
      if (todoItem !== todo) {
        return true;
      }
    })
    setTodos(result);
    localStorage.removeItem(todo);
  }
  
  return (
    <div>
      <TodoHeader/>
      {/* <div>
        <input type="text" value={inputText} onChange={handleInput}/>
        <button onClick={handleClick}>add</button>
      </div> */}
      <TodoInput onTodoAdd={addTodo} />
      <TodoList todos={todos} onTodoRemove={removeTodo} />
      {/* <div>
        <ul>
          {todos.map((todo, index) => {
            return (
              // onClick={() => handleRemove(todo, index)} 
              // handleRemove에 (todo, index) 인자를 넘기는 과정
              <li key={index}>
                <span>{todo}</span> 
                <button onClick={() => handleRemove(todo, index)}>remove</button>
              </li>
            )
          })}
        </ul>
      </div> */}
    </div>
  )
}

export default App
