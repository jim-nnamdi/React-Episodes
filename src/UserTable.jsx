import React from 'react'

function UserTable(props) {

  const tableStyle = {
    border: '1px solid red',
  }
  
  return (
    <div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <td>sno</td>
            <td>title</td>
            <td>description</td>
          </tr>
        </thead>
        <tbody>
          {
            props.users.length > 0 ? (
            props.users.map((user, index) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.description}</td>
                <td><button onClick={()=> props.deleteUser(user.id)}>Delete</button></td>
              </tr>
            ))) : (
              <tr colspan="3">
                No users found in table
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
