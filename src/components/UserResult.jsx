import React from 'react'
import { useSelector } from 'react-redux'

export const UserResult = () => {
    const {name, age} = useSelector((state) => state)

    return (
        <div>
            <h4>{name}</h4>
            <span>{age}</span>
        </div>
    )
}
