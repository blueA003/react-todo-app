function TodoList({ todos, onTodoRemove }) {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => {
          return (
            // onClick={() => handleRemove(todo, index)} 
            // handleRemove에 (todo, index) 인자를 넘기는 과정
            <li key={index}>
              <span>{todo}</span>
              <button onClick={() => onTodoRemove(todo)}>remove</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList
