import React, {PropTypes, Component} from 'react'
import PhotosGrid from './PhotoGrid'

export default class Page extends Component {
    onYearBtnClick(e) {
        const year = Number(e.target.textContent)
        this.props.getPhotos(year);
    }

    render() {
        const {year, photos, fetching, error} = this.props;
        return <div>
            <p>
                <button onClick={::this.onYearBtnClick}>2016</button>
                <button onClick={::this.onYearBtnClick}>2015</button>
                <button onClick={::this.onYearBtnClick}>2014</button>
            </p>
            <h3>{year} year</h3>
            <p>
                {fetching && 'Loading...'}
                {(error && !fetching) && <b>{error}</b>}
                {(!error && !fetching) && <PhotosGrid photos={photos}/>}
            </p>
        </div>
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired
}