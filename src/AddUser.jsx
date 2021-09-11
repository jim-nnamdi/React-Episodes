import React from 'react'
import {useState} from 'react'

function AddUser(props) {

    const initialUser = [{
        id: null,
        title: '',
        description: ''
    }]

    const [user, setUser] = useState(initialUser)

    const handleInput = (event) => {
        const {name, value} = event.target
        setUser({...user, [name]: value})
    }

    return (
        <div>
            <form onSubmit={(event) => {event.preventDefault(); 
                if(!user.title || user.description ) 
                    return props.addUser(user) 
                           setUser(initialUser)}} >

                <label>title</label>
                <input name="title" value={user.title} onChange={handleInput} placeholder="title"/>

                <label>description</label>
                <input name="description" value={user.description} onChange={handleInput} placeholder="description"/>

                <button>Add new user</button>
            </form>
        </div>
    )
}

export default AddUser
