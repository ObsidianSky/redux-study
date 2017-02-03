import React, { PropTypes, Component } from 'react'
import Photo from './Photo'

export default class PhotoGrid extends Component {
    render() {
        let { photos } = this.props.photos

        if(photos.length === 0) {
            return <span>No photos here.</span>
        }

        photos = photos.map((photo, index) => <Photo likes={photo.likes} />)

        return <div>
            <span>Photos amount: {photos.length}.</span>
        </div>
    }
}

PhotoGrid.propTypes = {
    photos: PropTypes.array.isRequired
}