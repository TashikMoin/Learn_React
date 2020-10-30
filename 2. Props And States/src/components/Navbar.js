import React, { Component } from 'react';

export class Navbar extends Component {


    render() {
        return (
            <navbar className='navbar bg-primary'>
                <h1>
                <i className="fab fa-github" /> 
                {this.props.title} 
                </h1>    
            </navbar>
        )
    }
}
export default Navbar
