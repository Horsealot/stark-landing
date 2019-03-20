import React, { Component } from 'react';
import Link from 'next/link';

class ContentPage extends Component {
    render() {
        return (
            <>
                <div className='onepage flex--start-center flex flex--column'>

                    <Link href="/">
                        <img className='onepage-logo' src={'/static/images/logo-b.png'} alt='Stark logo'/>
                    </Link>
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default ContentPage;
