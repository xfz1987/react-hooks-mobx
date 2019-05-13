import React, { useRef } from 'react'
import { observer, useObservable } from 'mobx-react-lite'

export const FriendlyComponent = observer(() => {
  const friendNameRef = React.useRef()

  const data = useObservable({
    friends: [],
    addFriend(favorite = false) {
      if (friendNameRef.current.value) favorite === true ? data.friends.unshift(friendNameRef.current.value + ' * ')
        : data.friends.push(friendNameRef.current.value)

      friendNameRef.current.value = ''
    },
    get friendsCount() {
      return data.friends.length
    }
  })

  return (
    <div>
      <b>Count of friends: {data.friendsCount} </b>
      {data.friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <br />
      <input ref={friendNameRef} />
      <button onClick={data.addFriend}>Add friend </button>
      <button onClick={() => data.addFriend(true)}>Add favorite friend</button>
    </div>
  );
})
