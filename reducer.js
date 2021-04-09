

export const initialState = {
    user: null,
    account: { password: 'test', userName: 'test' },
    global: [],
    memes: [],
    countryStats: [],
    images: [],
    imagesData: [],
    users: [],
    products: [],
    loading:false
}

function reducer(state, action) {
    switch (action.type) {
        case 'SET__USER':
            return { ...state, user: action.payload }
        case 'GET__USERS':
            case 'SET__LOADING':
                return {...state,loading:action.payload}
            return { ...state, users: action.payload }
        case 'GET__PRODUCTS':
            return { ...state, products:action.payload }
        case 'SET__ACCOUNT':
            return { ...state, account: action.payload }
        case 'SIGN__OUT':
            return { ...state, user: action.payload }
        case 'REMOVE__ACCOUNT':
            return { user: null, account: action.payload }
        case 'GET__GLOBAL':
            return { ...state, global: action.payload }
        case 'GET__MEMES':
            return { ...state, memes: action.payload }
        case 'GET__COUNTRY__STATS':
            return { ...state, countryStats: action.payload }
        case 'GET__IMAGES':
            return { ...state, images: action.payload }
        case 'GET__IMAGES__DATA':
            return { ...state, imagesData: action.payload }
        default:
            return state
    }
}
export default reducer