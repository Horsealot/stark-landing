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
                    <img className='landing-logo fade-in' src={'/assets/images/logo-b.png'} alt='Stark logo'/>
                    <h1 className='landing-title'>investment COMPANY INVOLVED IN the technology & luxury industries</h1>
                </div>
            </BlackPage>
        );
    }
}

export default Landing;
