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
                        <h2>Founded in 2019, all the brands, designs and trademarks of the products of our group belong to the Stark corporation and its teams.</h2>
                        <div className='group-offices flex flex--space-between-center'>
                            <div className='group-offices__office'>
                                <div className='group-offices__office-title'>
                                    HIRING TEAM
                                </div>
                                <div className='group-offices__office-address'>
                                    Read our offers here, send us your resume at <a href="mailto:hire@stark.com">hire@stark.com</a>
                                </div>
                            </div>
                            <div className='group-offices__office'>
                                <div className='group-offices__office-title'>
                                    PARIS
                                </div>
                                <div className='group-offices__office-address'>
                                    1 Place Vendôme
                                    75008 Paris
                                    <br/>
                                    <a href="mailto:human@stark.com">human@stark.com</a>
                                </div>
                            </div>
                            <div className='group-offices__office'>
                                <div className='group-offices__office-title'>
                                    SAN FRANCISCO
                                </div>
                                <div className='group-offices__office-address'>
                                    1234 Market St
                                    43567 San Francisco
                                    <br/>
                                    <a href="mailto:human@stark.com">human@stark.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContentPage>
            </>
        );
    }
}

export default Group;
