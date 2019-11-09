import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'

export default function User(props) {

    const [user, setUser] = useState();

    useEffect(() => {
        setTimeout(function () {
            const id = props.match.params.id
            axios
                .get(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((res) => {
                    setUser(res.data)
                })
                .catch((error) => {
                    console.log(error)
                })

        }, 3000)
    }, [])

    if (!user) {
        return <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs

        />
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.username}</p>
            <p>{user.website}</p>
        </div>
    )
}
