import React, { Component } from 'react';
import {Link} from "react-router-dom";

class NotFound extends Component {
    render() {
        return (
            <div className='onepage flex--center-center flex flex--column'>
                <Link to="/" className='not-found'>
                    <h1>404</h1>
                </Link>
            </div>
        );
    }
}

export default NotFound;
