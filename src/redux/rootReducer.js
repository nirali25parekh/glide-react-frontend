import { combineReducers } from 'redux'
import tweetReducer from './tweet/tweetReducer'
import userReducer from './user/userReducer'
import redditReducer from './reddit/redditReducer'
import videoReducer from './videoindexer/videoIndexerReducer'

const rootReducer = combineReducers({
    tweet: tweetReducer,
    user: userReducer,
    reddit : redditReducer,
    video: videoReducer,
})

export default rootReducer