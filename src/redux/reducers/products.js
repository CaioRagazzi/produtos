const INITIAL_STATE = {
    products: []
}

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LIST_PRODUCTS':
            return { ...state, products: action.payload }
        case 'ADD_PRODUCT':
            return { ...state, products: [...state.products, action.payload] }
        case 'REMOVE_PRODUCT':
            return {}
        default:
            return state;
    }
}

export { productReducer }