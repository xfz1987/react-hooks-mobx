import React, { useRef } from 'react'
import { useObserver, useLocalStore } from 'mobx-react-lite'

export default () => {
const store = useLocalStore(() => ({
    count: 0,
    inc() {
      this.count += 1
    }
  }))
 
  return useObserver(() => (
    <div>
      Count: {store.count}
      <button onClick={store.inc}>Increment</button>
    </div>
  ))
}

// function Counter({ multiplier }) {
//     const observableProps = useAsObservableSource({ multiplier })
//     const store = useLocalStore(() => ({
//         count: 0,
//         get multiplied() {
//             return observableProps.multiplier * this.count
//         },
//         inc() {
//             this.count += 1
//         }
//     }))
 
//     return (
//         <Observer>
//             {() => (
//                 <div>
//                     Multiplied count: {store.multiplied}
//                     <button onClick={store.inc}>Increment</button>
//                 </div>
//             )}
//         </Observer>
//     )
// }