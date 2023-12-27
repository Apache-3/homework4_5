import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export const UserForm = () => {
    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState('')
    const dispatch = useDispatch()

    const enterUser = () => {
        dispatch({ type: 'ADD_USER', 
            payloadName: userName,
            payloadAge: userAge
        })
    }

    const handlerSubmit = (event) => {
        event.preventDefault()
        enterUser()
    }

    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <label htmlFor="userName">Name</label>
                <input type="text" id='userName' value={userName}
                    onChange={(event) => setUserName(event.target.value)} />
                <label htmlFor="userAge">Age</label>
                <input type="text" id='userAge' value={userAge}
                    onChange={(event) => setUserAge(event.target.value)}/>
                <button type='submit'>Save</button>
            </form>
        </div>
    )
}