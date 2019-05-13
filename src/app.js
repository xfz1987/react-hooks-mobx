import React from 'react'
import { FriendlyComponent } from "./components/FriendlyComponent"
import ObservePerson from './components/ObservePerson'
import Person from './components/Person'
import Counter from './components/Counter'
import TodoList from './components/TodoList'
import Calculator from './components/Calculator'

export default () => (
  <div>
    <h2>FriendlyComponent</h2>
    <FriendlyComponent />
    <br />
    <hr />

    <h2>ObservePerson</h2>
    <ObservePerson />
    <br />
    <hr />
    
    <h2>Person</h2>
    <Person />
    <br />
    <hr />

    <h2>Counter</h2>
    <Counter />
    <br />
    <hr />

    <h2>TodoList</h2>
    <TodoList />
    <br />
    <hr />

    <h2>Calculator</h2>
    <Calculator />
  </div>
)