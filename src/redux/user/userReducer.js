import {
    LOGIN_USER_ONGOING, LOGIN_USER_FAILED, LOGIN_USER_SUCCESS,
    REGISTER_USER_FAILED,
    REGISTER_USER_ONGOING, REGISTER_USER_SUCCESS,
    GET_SECTOR,
} from './userTypes'

const initialState = {
    userId: null,
    loading: false,
    token: null,
    error: null,
    sector: null,
}

export default function userReducer (state = initialState, action){
    switch (action.type) {
        case LOGIN_USER_ONGOING: return {
            ...state,
            error: null,
            loading: true, 
        }
        case LOGIN_USER_SUCCESS: return {
            ...state,
            loading: false, 
            error: null,
            token: action.payload.token,
            userId: action.payload.user,
            sector: action.payload.sector
        }
        case LOGIN_USER_FAILED: return {
            ...state,
            loading: false,
            error: action.payload.error, 
        }
        case REGISTER_USER_ONGOING: return {
            ...state,
            error: null,
            loading: true, 
        }
        case REGISTER_USER_SUCCESS: return {
            ...state,
            loading: false,
            error: null,
            userId: action.payload.user,
            sector: action.payload.sector 
        }
        case REGISTER_USER_FAILED: return {
            ...state,
            loading: false,
            error: action.payload.error, 
        }
        default: return state
    }
}