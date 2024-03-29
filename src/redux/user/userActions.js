import {
    LOGIN_USER_ONGOING, LOGIN_USER_FAILED, LOGIN_USER_SUCCESS,
    REGISTER_USER_FAILED,
    REGISTER_USER_ONGOING, REGISTER_USER_SUCCESS
} from './userTypes'

export const loginUser = (email, password) => {
    return async (dispatch) => {
        try {
            let endpoint
            dispatch(loginUserOngoing())
            if (process.env.NODE_ENV === 'development'){
                endpoint = "http://localhost:5000/user/login"
            } else {
                endpoint = "https://glide-flask-backend.herokuapp.com/user/login"
            }
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ email: email, password: password })
            });
    
            if (response.ok) {
                const responseJsonSuccess = await response.json()
                dispatch(loginUserSuccess(responseJsonSuccess.token,responseJsonSuccess.sector,responseJsonSuccess.user ))
            } else {
                const responseJsonFailure = await response.json()
                return dispatch(loginUserFailed(responseJsonFailure.error))
            }
        }
        catch (error) {
            // console.log('error', error)
            return dispatch(loginUserFailed('error logging in'))
        }
    }
}


export const registerUser = (name, email, password, sector) => {
    return async (dispatch) => {
        try {
            let endpoint
            dispatch(registerUserOngoing())
            if (process.env.NODE_ENV === 'development'){
                endpoint = "http://localhost:5000/user/register"
            } else {
                endpoint = "https://glide-flask-backend.herokuapp.com/user/register"
            }
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ name: name, email: email, password: password, sector: sector })
            });
            if (response.ok) {
                const responseJsonSuccess = await response.json()
                dispatch(registerUserSuccess(responseJsonSuccess.user, responseJsonSuccess.sector ))
            } else {
                const responseJsonFailure = await response.json()
                return dispatch(registerUserFailed(responseJsonFailure.error))
            }
        }
        catch (error) {
            return dispatch(registerUserFailed('error registering'))
        }
    }
}

// login action creator => function that creates an object
export const loginUserOngoing = () => {
    return {
        type: LOGIN_USER_ONGOING,
    }
}

export const loginUserSuccess = (token, sector, user) => {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: { token, sector, user } // payload has a field called token which contains token
    }
}

export const loginUserFailed = (error) => {
    return {
        type: LOGIN_USER_FAILED,
        payload: { error }
    }
}


// login action creator => function that creates an object
export const registerUserOngoing = () => {
    return {
        type: REGISTER_USER_ONGOING,
    }
}

export const registerUserSuccess = (user, sector) => {
    return {
        type: REGISTER_USER_SUCCESS,
        payload: { user, sector } // payload has a field called userId which contains userId
    }
}

export const registerUserFailed = (error) => {
    return {
        type: REGISTER_USER_FAILED,
        payload: { error }
    }
}