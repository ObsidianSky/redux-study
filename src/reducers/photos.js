import { PHOTOS_REQUEST, PHOTOS_LOADED, PHOTOS_LOADING_ERROR } from '../constants/Page'

const initialState = []

export default function photos(state = initialState, action) {
    switch (action.type) {
        case PHOTO_LIKE:
            const id = action.payload.id;
            const index = state.findIndex((item) => {
                return item.id = id;
            });
            return [
                ...state.slice(0, index),
                {...state[index], like: state[index].like + 1},
                ...state.slice(index + 1)
            ]
        default:
            return state
    }
}
