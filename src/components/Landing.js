import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import BlackPage from "./BlackPage";

class Landing extends Component {
    render() {
        return (
            <BlackPage>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Stark</title>
                    {/*<link rel="canonical" href="http://mysite.com/example" />*/}
                </Helmet>
                <div className='landing onepage flex flex--center-center flex--column'>
                    <img className='landing-logo' src={'/assets/images/logo-w.png'} alt='Stark logo'/>
                    <h1 className='landing-title'>Inspiring the apps you consume every day.</h1>
                </div>
            </BlackPage>
        );
    }
}

export default Landing;
