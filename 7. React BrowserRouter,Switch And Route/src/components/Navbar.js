import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = (props) => {
        return (
            <navbar className='navbar bg-primary'>
                <h1>
                <i class="fab fa-tumblr"></i>
                {props.title} 
                </h1>    

                <ul>
                    <li>
                        <Link to='/'> Home </Link>
                    </li>

                    <li>
                        <Link to='/Profile'> Profile </Link>
                    </li>

                    <li>
                        <Link to='/About'> About </Link>
                    </li>
                </ul>
            </navbar>
        )
}
export default Navbar

