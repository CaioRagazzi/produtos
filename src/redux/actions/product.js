import axios from "axios";

const fetchProducts = () => {
    return function (dispatch) {
        dispatch(isLoading(true))
        return axios.get('https://us-central1-broascasterchat.cloudfunctions.net/api/pokemons/list').then(res => {
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

export { fetchProducts, list }