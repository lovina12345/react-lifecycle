import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UsersFunction() {
    const [users, setUsers] = useState([])

    async function getUser() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data)
    }

    useEffect(()=> {
        getUser();
        return(
            setUsers([])
        )
    }, [])
    return (
        users.map((user)=>{
            return(
                <div key={user.id}>
                    <h4>{user.name}</h4>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    <hr/>
                </div>
            )
        })
    )
}

export default UsersFunction