//     Convertig App.js and Search.js class components into functional components using useState() hook.
import './App.css';
import React, { Fragment, useState } from 'react' ;
import Navbar from './components/Navbar.js'
import GridUsersDisplay from './components/GridUsersDisplay.js'
import axios from 'axios';
import Search from './components/Search';
import Alert from './components/Alert.js';
import About from './components/pages/About.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import RowUsers from './components/RowUsers';

const App = () =>
{

    const[loading , setLoading] = useState(false) ;
    const[users , setUsers] = useState([]) ; // intializing users array with an empty array[]
    const[alert, setAlert] = useState(null) ; // setting Alert's state to null

  /* 
      Life cycle method like componentDidMount() are imlemented using useEffect hook insdie functional components

  async componentDidMount()
  {
    this.setState({ loading: true }) ;
    const Fetched_Users_Data = axios.get(`https://api.github.com/users?
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);  
    this.setState( { loading: false , users: Fetched_Users_Data.data } ); 
  }

  */

  /*
  useEffect hook syntax
  useEffect(() => {
     // action here
  }, [props.counter]); // checks for changes in the values in this array
  */

  const searchUsers = async (text)  => 
  {
    setLoading(true);
    const Fetched_Users_Data = await axios.get(`https://api.github.com/search/users?q=${text}&
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);  
    setLoading(false);
    setUsers(Fetched_Users_Data.data.items);
  };

  const updateAlert = (Message, boxColor) => 
  {
    setAlert({Message, boxColor}) ; 
    /*                      * IMPORTANT * 
    when assigning multiple values (means object) to a state then use curly braces otherwise the
     value will not be assigned correctly.
     */
    setTimeout( () => { setAlert(null) ; } , 3000 ) ;
  }

  return (
    <Router>
    <div>
      <Navbar title="errabuzz"/>
      <Switch>

        <Route exact path='/' render={ props => (
          <Fragment>
            <Alert alert={alert} />
            <Search searchUsers={searchUsers} updateAlert={updateAlert}/> 
            <div className="container">
            <GridUsersDisplay loading={loading} users={users}/>  
            </div>
          </Fragment>
        )} 
        />

        <Route exact path='/About' component={About}
        />

      </Switch>
    </div>
    </Router>
  );
}
export default App;

// after defining states using useState hook, we can direct access states without using this.state keyword