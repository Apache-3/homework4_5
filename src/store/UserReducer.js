const initialState = {
    name: '',
    age: ''
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {...state, name: action.payloadName, age: action.payloadAge }
        default:
            return state
    }
}