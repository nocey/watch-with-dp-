import * as types from '../types'

export const authReducer = (state = '', action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                user: action.payload , 
                auth:true
            }
        default:
            return state
    }
}

