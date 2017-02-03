import React, { PropTypes, Component } from 'react'

export default class Photo extends Component {
    render() {
        return <div className="photo">
            <span>Likes: {this.props.likes} </span>
            <button>Add Like</button>
        </div>
    }
}
