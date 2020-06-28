import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import ContentPage from "./ContentPage";

class Manifesto extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Manifesto - Stark</title>
                    {/*<link rel="canonical" href="http://mysite.com/example" />*/}
                </Helmet>

                <ContentPage>
                    <div className='manifesto flex--center-center flex flex--column'>
                        <h2>Inspiring the apps you consume every day. We believe at Stark that your passion and deepest emotions should be what rules your connexion to others, and the type of applications that you use. We created a team of people who want to dedicate their life to studying the new models of networks and applications that will help you in your daily life, but also to become who your aspire to be may it be through encounters, a better management of your life, or stronger connexions.</h2>
                        <img className='manifesto-signature' src={'/assets/images/founder-signature.png'} alt='Stark founder'/>
                    </div>
                </ContentPage>
            </>
        );
    }
}

export default Manifesto;
