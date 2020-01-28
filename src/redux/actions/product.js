const add = (product) => {
    return {
        type: 'ADD_PRODUCT',
        payload: product
    }
}

const remove = (product) => {
    return {
        type: 'REMOVE_PRODUCT',
        payload: product
    }
}

export { add, remove }