import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import ContentPage from "./components/ContentPage";
import Layout from "../Layout";

class Group extends Component {
    render() {
        return (
            <Layout>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Our products - Stark</title>
                    {/*<link rel="canonical" href="http://mysite.com/example" />*/}
                </Helmet>

                <ContentPage>
                    <div className='products flex--space-between-center flex'>
                        <a href='' className='products__product flex flex--center-center flex--column'>
                            <img src={'/static/images/trictrac.png'} title='Trictrac Show logo' alt='Trictrac Show logo'/>
                            <div className='products__product-title trictrac'>trictrac</div>
                        </a>
                        <a href='https://www.horsealot.com' className='products__product flex flex--center-center flex--column'>
                            <img src={'/static/images/horsealot.png'} title='Horsealot logo' alt='Horsealot logo'/>
                            <div className='products__product-title horsealot'>Horsealot</div>
                        </a>
                        <a href='https://brain.horsealot.com' className='products__product flex flex--center-center flex--column'>
                            <img src={'/static/images/brain.png'} title='Brain logo' alt='Brain logo'/>
                            <div className='products__product-title brain'>BRAIN</div>
                        </a>
                    </div>
                </ContentPage>
            </Layout>
        );
    }
}

export default Group;
