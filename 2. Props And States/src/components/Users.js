import React, { Component } from 'react'
import User_Details from 'C:/Users/TashikMoin/Desktop/learning_reactjs/src/components/User_Details.js'

class Users extends Component {

    
    state = 
    {
        users:
        [
            {
                "login": "mojombo",
                "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
                "url": "https://api.github.com/users/mojombo"
            },
            {
                "login": "defunkt",
                "avatar_url": "https://avatars0.githubusercontent.com/u/2?v=4",
                "url": "https://api.github.com/users/defunkt"
            },
            {
                "login": "pjhyett",
                "avatar_url": "https://avatars0.githubusercontent.com/u/3?v=4",
                "url": "https://api.github.com/users/pjhyett"
            }
        ]
    }

    render() {
        return (
            <div style={GridStyle} >
                {this.state.users.map( user => ( 
                    <User_Details key={user.id} user_number={user}/>
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
