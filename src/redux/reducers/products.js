const INITIAL_STATE = {
    products: [],
    isLoading: true,
    errorMessage: null
}

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LIST_PRODUCTS':
            return { ...state, products: action.payload }
        case 'IS_LOADING':
            return { ...state, isLoading: action.payload }
        case 'HAS_ERRORS':
            return { ...state, errorMessage: action.payload.message }
        default:
            return state;
    }
}

export { productReducer }