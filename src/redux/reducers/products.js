const INITIAL_STATE = {
    products: [
        {
            id: '1',
            name: 'caio',
            price: 80
        },
        {
            id: '2',
            name: 'douglas',
            price: 80
        },
        {
            id: '3',
            name: 'Amaral',
            price: 100
        },
    ]
}

const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return { ...state, products: [...state.products, action.payload] }
        case 'REMOVE_PRODUCT':
            return {}
        default:
            return state;
    }
}

export { productReducer }