import { SET_YEAR } from '../constants/Page'
import { PHOTOS_REQUEST, PHOTOS_LOADED, PHOTOS_LOADING_ERROR } from '../constants/Page'

export function setYear(year) {
    return {
        type: SET_YEAR,
        payload: year
    }
}

export function getPhotos(year) {
    return (dispatch) => {
        dispatch({
            type: PHOTOS_REQUEST,
            payload: year
        })

        setTimeout(() => {
            if(Math.random() > 0.5) {
                const photosAmount = Math.floor(Math.random() * 20)
                dispatch({
                    type: PHOTOS_LOADED,
                    payload: new Array(photosAmount)
                })
            } else {
                dispatch({
                    type: PHOTOS_LOADING_ERROR,
                    payload: 'some shit occurred'
                })
            }

        }, 1500)
    }
}