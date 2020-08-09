import { FETCH_TWEETS_ONGOING, FETCH_TWEETS_SUCCESS, FETCH_TWEETS_FAILURE, } from './tweetTypes'


export const fetchTweets = (keyword) => {
    return async (dispatch) => {
        console.log('keyword', keyword)
        try {
            dispatch(fetchTweetsOngoing())
            let formData = new FormData()
            formData.append("keyword", keyword)
            const response = await fetch("http://localhost:5000/keyword", {
                method: "POST",
                body: formData,
            });
            const tweets = await response.json()
            dispatch(fetchTweetsSuccess(tweets))
        }
        catch (error) {
            return dispatch(fetchTweetsFailure('Error in fetching tweets'))
        }
    }
}

// action creator => function that creates an object
export const fetchTweetsOngoing = () => {
    return {
        type: FETCH_TWEETS_ONGOING,
    }
}

export const fetchTweetsSuccess = (tweets) => {
    // console.log('in here fetchtweetsucess', tweets)
    return {
        type: FETCH_TWEETS_SUCCESS,
        payload: { tweets } // payload has a field called tweets which contains tweets
    }
}

export const fetchTweetsFailure = (error) => {
    return {
        type: FETCH_TWEETS_FAILURE,
        payload: { error }
    }
}