import React from 'react'
import {useState} from 'react'
import AddUser from './AddUser'
import UserTable from './UserTable'


function App() {

  const initialState = [
    {
      id:1,
      title: 'Merlin',
      description:'Magician'
    }
  ]

  const initialUser = [{
    id:null,
    title: '',
    description:''
  }]

  const [users, setUsers] = useState(initialState)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const [editing, setEditing] = useState(false)

  const [currentUser, setCurrentUser] = useState(initialUser)

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({id:user.id, title:user.title, description:user.description})
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map((user) => user.id == id ? updatedUser : user))
  }
  
  return (
    <div>
      <AddUser addUser={addUser}/>
      <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
    </div>
  )
}

export default App
