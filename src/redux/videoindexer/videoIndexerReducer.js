import {
    VIDEO_INSIGHTS_OBTAINED
} from './videoIndexerTypes'

const initialState = {
    insights: null,
}

export default function videoIndexerReducer (state=initialState, action){
    // console.log('in reducer')
    switch(action.type){
        case VIDEO_INSIGHTS_OBTAINED: 
        // console.log('in reducer')
        return {
            ...state,
            insights: action.payload.insights
        }
        default: 
        return state
    }
}