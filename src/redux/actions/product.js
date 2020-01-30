import axios from "axios";

const fetchProducts = () => {
    return function (dispatch) {
        dispatch(isLoading(true))
        return axios.get('http://192.168.1.30:3000/products').then(res => {
            dispatch(list(res.data))
            dispatch(isLoading(false))
        }).catch(err => {
            dispatch(isLoading(false))
            dispatch(hasErros(err))
        })
    }
}

const hasErros = (error) => {
    return {
        type: 'HAS_ERRORS',
        payload: error
    }
}

const isLoading = (loading) => {
    return {
        type: 'IS_LOADING',
        payload: loading
    }
}

const list = (products) => {
    return {
        type: 'LIST_PRODUCTS',
        payload: products
    }
}

const add = (product) => {
    return {
        type: 'ADD_PRODUCT',
        payload: product
    }
}

export { fetchProducts }