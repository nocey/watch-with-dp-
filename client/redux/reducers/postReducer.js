import * as types from '../types'

const initialState = {
    posts: ['1st post', '2nd post', '3nd post'],
    post: {},
    loading: false,
    error: null
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_POST:
            return {
                ...state,
                post: action.payload,
                    loading: false,
                    error: null
            }
        default:
            return state
    }
}

