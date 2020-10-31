import React from 'react'
const Navbar = (props) => {
        return (
            <navbar className='navbar bg-primary'>
                <h1>
                <i class="fab fa-tumblr"></i>
                {props.title} 
                </h1>    
            </navbar>
        )
}
export default Navbar

