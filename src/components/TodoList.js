import React, { useRef, useCallback } from 'react'
import { observer, useObservable } from 'mobx-react-lite'

export default observer(() => {
  const todos = useObservable(new Map())
  const todoRef = React.useRef()
  
  // 空数组代表无论什么情况下该函数都不会发生改变
  const addTodo = React.useCallback(() => {
    todos.set(todoRef.current.value, false)
    todoRef.current.value = ''
  }, [])
  
  const toggleTodo = React.useCallback(todo => {
    todos.set(todo, !todos.get(todo))
  }, [])

  return (
    <div>
      {Array.from(todos).map(([todo, done]) => (
        <div onClick={() => toggleTodo(todo)} key={todo}>
          {todo}
          {done ? " ✔" : " ⏲"}
        </div>
      ))}
      <input ref={todoRef} />
      <button onClick={addTodo}>Add todo</button>
    </div>
  )
})