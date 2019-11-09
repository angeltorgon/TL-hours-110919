import React from 'react'
import { Link } from 'react-router-dom'

export default function UserCard(props) {
    return (
        <Link to={`/users/${props.user.id}`}>
            <div className="card" style={{ width: "300px", margin: "20px" }}>
                <h1>{props.user.name}</h1>
                <p>{props.user.email}</p>
                <p>{props.user.website}</p>
            </div>
        </Link>
    )
}
