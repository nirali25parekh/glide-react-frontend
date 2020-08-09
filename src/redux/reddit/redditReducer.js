import {
    FETCH_REDDITS_ONGOING,
    FETCH_REDDITS_SUCCESS,
    FETCH_REDDITS_FAILURE
} from './redditTypes'

const initialState = {
    loading: false,
    error: null,
    reddits: []
}

export default function redditReducer (state=initialState, action){
    switch(action.type){
        case FETCH_REDDITS_ONGOING: return {
            ...state,
            loading: true,
        }
        case FETCH_REDDITS_SUCCESS:
        return {
            ...state,
            loading: false,
            reddits: action.payload.reddits,
        }
        case FETCH_REDDITS_FAILURE: return {
            ...state,
            loading: false,
            error: action.payload.error,
        }
        default: 
        return state
    }
}