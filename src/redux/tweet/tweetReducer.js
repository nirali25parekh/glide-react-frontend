import {
    FETCH_TWEETS_ONGOING,
    FETCH_TWEETS_SUCCESS,
    FETCH_TWEETS_FAILURE
} from './tweetTypes'

const initialState = {
    loading: false,
    error: null,
    tweets: []
}

export default function tweetReducer (state=initialState, action){
    switch(action.type){
        case FETCH_TWEETS_ONGOING: return {
            ...state,
            loading: true,
        }
        case FETCH_TWEETS_SUCCESS:
        return {
            ...state,
            loading: false,
            tweets: action.payload.tweets,
        }
        case FETCH_TWEETS_FAILURE: return {
            ...state,
            loading: false,
            error: action.payload.error,
        }
        default: 
        return state
    }
}