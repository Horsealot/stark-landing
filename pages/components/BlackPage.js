import React, { Component } from 'react';

class BlackPage extends Component {
    componentWillMount(){
        // document.querySelector("body").classList.add('darktheme');
        // document.body.classList.add('darktheme');
    }
    componentWillUnmount(){
        // document.querySelector("body").classList.remove('darktheme');
        // document.body.classList.remove('darktheme');
    }

    render() {
        return (
            <>
                {this.props.children}
            </>
        );
    }
}

export default BlackPage;
