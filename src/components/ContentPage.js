import React, { Component } from 'react';
import {Link} from "react-router-dom";

class ContentPage extends Component {
    render() {
        return (
            <>
                <div className='onepage flex--start-center flex flex--column'>

                    <Link to="/">
                        <img className='onepage-logo' src={'/assets/images/logo-b.png'} alt='Stark logo'/>
                    </Link>
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default ContentPage;
