import { FETCH_REDDITS_ONGOING, FETCH_REDDITS_SUCCESS, FETCH_REDDITS_FAILURE, } from './redditTypes'

export const fetchReddits = (sector) => {
    return async (dispatch) => {
        try {
            dispatch(fetchRedditsOngoing())
            let formData = new FormData()
            formData.append("sector", sector)
            const response = await fetch("http://localhost:5000/reddit", {
                method: "POST",
                body: formData,
            });
            console.log(response)
            const reddits = await response.json()
            console.log(reddits)
            dispatch(fetchRedditsSuccess(reddits))
        }
        catch (error) {
            return dispatch(fetchRedditsFailure('Error in fetching reddits'))
        }
    }
}

// action creator => function that creates an object
export const fetchRedditsOngoing = () => {
    return {
        type: FETCH_REDDITS_ONGOING,
    }
}

export const fetchRedditsSuccess = (reddits) => {
    return {
        type: FETCH_REDDITS_SUCCESS,
        payload: { reddits } // payload has a field called reddits which contains tweets
    }
}

export const fetchRedditsFailure = (error) => {
    return {
        type: FETCH_REDDITS_FAILURE,
        payload: { error }
    }
}