import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard'

export default function UserList() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setUsers(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <>
            <h1>User List</h1>
            {
                users.map((user) => (
                    <UserCard user={user} />
                ))
            }
        </>
    )
}
