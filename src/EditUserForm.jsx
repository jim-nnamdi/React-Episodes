import React, { useState, useEffect } from 'react'

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])
  
  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="title"
        value={user.title}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="description"
        value={user.description}
        onChange={handleInputChange}
      />
      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm