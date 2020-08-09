import { VIDEO_INSIGHTS_OBTAINED } from './videoIndexerTypes'

//if insights sucessful
export const getInsights = (insights) => {
    // console.log('in getInsights', insights)
    return async (dispatch) => {
        try {
            // console.log('in inner method', insights)
            dispatch(sendInsights(insights))
        } catch(err){
            console.log(err)
        }
    }
}
export const sendInsights = (insights) => {
    // console.log('in sendInsights', insights)
    return {
        type: VIDEO_INSIGHTS_OBTAINED,
        payload: { insights } // payload has a field called token which contains insights
    }
}