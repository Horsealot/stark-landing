import React, { Component } from 'react';

class BlackPage extends Component {
    componentWillMount(){
        document.body.classList.add('darktheme');
    }
    componentWillUnmount(){
        document.body.classList.remove('darktheme');
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
