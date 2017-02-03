import { PHOTOS_REQUEST, PHOTOS_LOADED, PHOTOS_LOADING_ERROR } from '../constants/Page'

const initialState = {
    year: 2016,
    photos: [],
    fetching: false,
    error: ''
}

export default function page(state = initialState, action) {
    switch (action.type) {
        case PHOTOS_REQUEST:
            return { ...state, fetching: true, year: action.payload, error: '' }
        case PHOTOS_LOADED:
            return { ...state, fetching: false, photos: action.payload }
        case PHOTOS_LOADING_ERROR:
            return { ...state, fetching: false, error: action.payload }
        default:
            return state
    }
}
