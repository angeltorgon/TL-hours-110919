import React from 'react'
import { Link } from 'react-router-dom'

export default function UserCard(props) {
    return (
        <Link to={`/users/${props.user.id}`}>
            <div style={{ border: "1px solid black" }}>
                <h1>{props.user.name}</h1>
                <p>{props.user.email}</p>
                <p>{props.user.website}</p>
            </div>
        </Link>
    )
}
