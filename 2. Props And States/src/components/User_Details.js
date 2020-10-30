import React, { Component } from 'react'
class User_Details extends Component {
    render() {
        const { user_name, avatar_url, url } = this.props.user_number ; 
        return (
            <div className="card text-center">
                <img class="round-img" src={avatar_url} alt="" style={{ width: '60px'}} />

                <h3> {user_name} </h3>

                <div>
                <a className="btn btn-dark btn-sm my-1" href={url} >
                    Visit Profile
                </a>

                </div>
            </div>
        )
    }
}
export default User_Details
