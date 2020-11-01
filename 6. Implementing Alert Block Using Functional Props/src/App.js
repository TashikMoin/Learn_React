import './App.css';
import React from 'react' ;
import Navbar from './components/Navbar.js'
import GridUsersDisplay from './components/GridUsersDisplay.js'
import axios from 'axios';
import Search from './components/Search';
import Alert from './components/Alert.js';
//import RowUsers from './components/RowUsers';

class App extends React.Component 
{

  state = 
  {
    loading: false, 
    users: [],
    alert: null
  };

  async componentDidMount()
  {
    this.setState({ loading: true }) ;
    const Fetched_Users_Data = await axios.get(`https://api.github.com/users?
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);  
    this.setState( { loading: false , users: Fetched_Users_Data.data } ); 
  }

  searchUsers = async text => 
  {
    this.setState({ loading: true }) ;
    const Fetched_Users_Data = await axios.get(`https://api.github.com/search/users?q=${text}&
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);  
    this.setState( { loading: false , users: Fetched_Users_Data.data.items } ); 
  };

  setAlert = (Message, boxColor) => 
  {
    this.setState({ alert: { Message, boxColor  } }) ;
    setTimeout( () => { this.setState( { alert: null } ) ; } , 3000 ) ;
    /* 
    setTimeout(Function/Expression_To_Be_Called_After_XTime , XTime) ;
    calling the setTimeout function so that it will reset / turn the alert state to null after 3000 so that we
    can only display the alert block / warning for only 3 seconds
    */
  };


  render()
  { 
    return (
      <div>
        <Navbar title="errabuzz"/>
        <Alert alert={this.state.alert} />
        <Search searchUsers={this.searchUsers} setAlert={this.setAlert}/> 
        <div className="container">
          <GridUsersDisplay loading={this.state.loading} users={this.state.users}/> 
        </div>
      </div>
    );
  }
}
export default App;
