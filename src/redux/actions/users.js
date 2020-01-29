import axios from "axios";

const listUsers= () => {
    return function (dispatch) {
        dispatch(isLoading())
        return axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            dispatch(isSuccess(res.data))
        }).catch(err => {
            dispatch(isError())
        })
    }
}

const isSuccess = (users) => {
    return {
        type: 'IS_LOADING',
        payload: {
            users,
            isLoading: false,
            error: false,
        }
    }
}

const isLoading = () => {
    return {
        type: 'IS_NOT_LOADING',
        payload: {
            users: [],
            isLoading: true,
            error: false,
        }
    }
}

const isError = () => {
    return {
        type: 'IS_ERROR',
        payload: {
            users: [],
            isLoading: false,
            error: true,
        }
    }
}

export { listUsers }