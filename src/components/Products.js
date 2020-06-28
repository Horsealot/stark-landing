import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import ContentPage from "./ContentPage";

class Group extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Our products - Stark</title>
                    {/*<link rel="canonical" href="http://mysite.com/example" />*/}
                </Helmet>

                <ContentPage>
                    <div className='products flex--space-between-center flex'>
                        <div className='products__product flex flex--center-center flex--column'>
                            <img className="fade-in" src={'/assets/images/horsealot.png'} title='Horsealot Show logo' alt='Triktrak Show logo'/>
                            <div className='products__product-title horsealot'>
                                Leading social network dedicated to equestrian sports, lifestyle and luxury. Horsealot gathered 250,000 members and was recognized by Product Hunt among the Top 3 breakthrough social networks to follow in 2019 alongside TikTok. The company was Acquired in December 2019 by Czech Media Invest.
                            </div>
                        </div>
                        <div className='products__product flex flex--center-center flex--column'>
                            <img className="fade-in" src={'/assets/images/bird.png'} title='Bird logo' alt='Brain logo'/>
                            <div className='products__product-title bird'>
                                Micromobility company based in Santa Monica, California. Founded in September 2017, Bird operates shared electric scooters in over 100 cities in Europe, the Middle East, and North America with 10 million rides in its first year of operation. Investment in the $275M  series D of the company. 
                            </div>
                        </div>
                    </div>
                </ContentPage>
            </>
        );
    }
}

export default Group;
