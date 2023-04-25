import React, { useState } from 'react'

function UserList({users}) {
  const [usersList, setUsersList] = useState(users)
 
  const deleteUserBtn = (id) => {
    const newuser = usersList.filter((data) => {
      return data.id !== id
    })
    setUsersList(newuser)
  }
  
  return (
    <ul>
      {usersList.map((data) => {
          while(data.id<5)
          {
        return (
        
          <li key={data.id}>
            <h2>{data.title}</h2>
            <button onClick={() => deleteUserBtn(data.id)}>DELETE</button>
          </li>
        )
          }
      })}
    </ul>
  )
}

export default UserList
