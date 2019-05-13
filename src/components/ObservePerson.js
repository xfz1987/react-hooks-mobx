import React from 'react'
import { Observer, useObservable } from 'mobx-react-lite'
 
export default function ObservePerson(props) {
  const person = useObservable({ name: 'John' })
  return (
    <div>
      {person.name}
      {/*<Observer>{() => <div>{person.name}</div>}</Observer>*/}
      <Observer render={() => <div>{person.name}</div>} />
      <button onClick={() => (person.name = 'Mike')}>No! I am Mike</button>
    </div>
  )
}
