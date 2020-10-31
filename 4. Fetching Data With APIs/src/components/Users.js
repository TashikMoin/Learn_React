import React from 'react'
import Posts from './Posts.js'

const Users = (props) =>  
// receiving users data and loading attribute as props to display users data provided by parent component.
{
    return (
        <div style={GridStyle} >
            {props.users.map( user => ( // working on users array to display users data provided by parent component App.
                <Posts key={user.id} user_number={user}/>
            ))}
        </div>
    );
}

const GridStyle =
{
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
}
export default Users
