import React, { Component } from 'react';
import './App.scss';
import Link from 'next/link';
import Head from 'next/head';

class Layout extends Component {
    render() {
        return (
            <div className={'Stark flex ' + this.props.class}>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet"/>
                    <link rel="stylesheet" href="https://use.typekit.net/hrr1rqk.css"/>
                </Head>
                <nav>
                    <ul>
                        <li>
                            <Link href="/manifesto">Manifesto</Link>
                        </li>
                        <li>
                            <Link href="/group">Group</Link>
                        </li>
                        <li>
                            <Link href="/products/">Products</Link>
                        </li>
                    </ul>
                </nav>
                <div className={'top-left-border'}/>
                <div className={'top-right-border'}/>
                <footer>
                    © Stark {(new Date().getFullYear())}
                </footer>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;
