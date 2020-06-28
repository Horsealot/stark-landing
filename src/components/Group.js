import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import ContentPage from "./ContentPage";

class Group extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Our Group - Stark</title>
                    {/*<link rel="canonical" href="http://mysite.com/example" />*/}
                </Helmet>
                <ContentPage>
                    <div className='group flex--center-center flex flex--column'>
                        <div className='group-offices__office'>
                            <div className='group-offices__office-title'>
                                PARIS OFFICE
                            </div>
                            <div className='group-offices__office-address'>
                                STARK SAS
                                <br/>31 avenue Pierre 1er de Serbie
                                <br/>75008 Paris
                            </div>
                        </div>
                    </div>
                </ContentPage>
            </>
        );
    }
}

export default Group;
