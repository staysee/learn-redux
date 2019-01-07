import React from 'react';
import {Link} from 'react-router';

const Photo = React.createClass({

    render() {
        const {post, i, comments} = this.props;

        return (
            <figure className="grid-figure">
                I'm a photo
            </figure>
        )
    }
})

export default Photo;