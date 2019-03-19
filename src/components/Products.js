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
                        <a href='' className='products__product flex flex--center-center flex--column'>
                            <img src={'/assets/images/trictrac.png'} title='Trictrac Show logo' alt='Trictrac Show logo'/>
                            <div className='products__product-title trictrac'>trictrac</div>
                        </a>
                        <a href='https://www.horsealot.com' className='products__product flex flex--center-center flex--column'>
                            <img src={'/assets/images/horsealot.png'} title='Horsealot logo' alt='Horsealot logo'/>
                            <div className='products__product-title horsealot'>Horsealot</div>
                        </a>
                        <a href='https://brain.horsealot.com' className='products__product flex flex--center-center flex--column'>
                            <img src={'/assets/images/brain.png'} title='Brain logo' alt='Brain logo'/>
                            <div className='products__product-title brain'>BRAIN</div>
                        </a>
                    </div>
                </ContentPage>
            </>
        );
    }
}

export default Group;
