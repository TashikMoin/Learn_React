import React from 'react'
import Posts from './Posts.js'
import Spinner from './Spinner.js';

const Users = (props) =>  
{
    if(props.loading)
    {
        return <Spinner/> ;
    }
    else
    {
        return (
            <div style={GridStyle} >
                {props.users.map( user => ( // working on users array to display users data provided by parent component App.
                    <Posts key={user.id} user_number={user}/>
                ))}
            </div>
        );
    }

}
const GridStyle =
{
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
}
export default Users
