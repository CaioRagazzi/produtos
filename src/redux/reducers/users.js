const INITIAL_STATE = {
    users: [],
    loading: true,
    error: false
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'IS_LOADING':
            return { ...state, users: action.payload.users, loading: action.payload.isLoading, error: action.payload.error }
        case 'IS_NOT_LOADING':
            return { ...state, users: action.payload.users, loading: action.payload.isLoading, error: action.payload.error }
        case 'IS_ERROR':
            return { ...state, users: action.payload.users, loading: action.payload.isLoading, error: action.payload.error }
        default:
            return state;
    }
}

export { userReducer }