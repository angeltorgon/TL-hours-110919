import React from 'react'

export default function UserCard(props) {
    return (
        <div style={{ border: "1px solid black" }}>
            <h1>{props.user.name}</h1>
            <p>{props.user.email}</p>
            <p>{props.user.website}</p>
        </div>
    )
}
