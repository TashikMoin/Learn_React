import './App.css';
import React from 'react' ;
import Navbar from 'C:/Users/TashikMoin/Desktop/learning_reactjs/src/components/Navbar.js'
import Users from 'C:/Users/TashikMoin/Desktop/learning_reactjs/src/components/Users.js'
import axios from 'axios';
import Search from './components/Search';

class App extends React.Component {

  state = 
  {
    loading: false, 
    users: []
  }

  async componentDidMount()
  {
    this.setState({ loading: true }) ;
    const Fetched_Users_Data = await axios.get(`https://api.github.com/users?
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);  
    this.setState( { loading: false , users: Fetched_Users_Data.data } ); 
  }

  searchUsers = async text => {
    this.setState({ loading: true }) ;
    const Fetched_Users_Data = await axios.get(`https://api.github.com/search/users?q=${text}&
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);  
    this.setState( { loading: false , users: Fetched_Users_Data.data.items } ); 
  };


  render()
  { 
    return (
      <div>
        <Navbar title="errabuzz"/>
        <Search searchUsers={this.searchUsers}/> 
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users}/> 
        </div>
      </div>
    );
  }
}
export default App;

/*
<Search searchUsers={this.searchUsers}/>  // passing functional prop to the child component so that child component can call
parent component's functions.

<Users loading={this.state.loading} users={this.state.users}/>  // passing loaded users data array and loading attribute as prop
to the child attribute.


*/
