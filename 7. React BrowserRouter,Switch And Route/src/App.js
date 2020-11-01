import './App.css';
import React, { Fragment } from 'react' ;
import Navbar from './components/Navbar.js'
import GridUsersDisplay from './components/GridUsersDisplay.js'
import axios from 'axios';
import Search from './components/Search';
import Alert from './components/Alert.js';
import About from './components/pages/About.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
      <Router>
      <div>
        <Navbar title="errabuzz"/>
        <Switch>

          <Route exact path='/' render={ props => (
            <Fragment>
              <Alert alert={this.state.alert} />
              <Search searchUsers={this.searchUsers} setAlert={this.setAlert}/> 
              <div className="container">
              <GridUsersDisplay loading={this.state.loading} users={this.state.users}/> 
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
}
export default App;


/*

- React Router, and dynamic, client-side routing, allows us to build a single-page web application with 
navigation without the page refreshing as the user navigates. React Router uses component structure to 
call components, which display the appropriate information.

- BrowserRouter is used for doing client side routing with URL segments. You can load a top level component 
for each route. This helps separate concerns in your app and makes the logic/data flow more clear.

- BrowserRouter should be placed at the top of components hierarchy.

- BrowserRouter --> Router (Alias in our code)

- A Switch is just like a switch case. It has some Routes just like switch has some 'cases' in it. The Switch
starts matching the current URL with each Route path (like each case is matched one after another in switch cases)
and when it finds the first path that matches with the current browser URL, it redirects to that page URL.

- Difference between exact path and path,
    - Exact path matches the current page URL with the exact path provided however path only matches the 
    current URL with the path provided means that if we have path like path='/home' and we send requests
    for /home/details path will also redirect to possible combinations of /home that is /home/details but 
    exact path will not redirect such combinations.

    - If we change <Route exact path='/'   ....../> to  <Route path='/'   ....../> means that if we remove
    exact and if this Route is the very first route in the Switch, then '/' means that all possible combinations
    of / means /home , /about , /home/details etc all these requested Route paths will become '/' and there will 
    be no redirection to the provided / requested path. In our code, if we do this, and request for /about page
    in the browser, then there will be no redirection to the about page because we choose path and not exact path 
    so Switch founds the first combination that is /about -> / (/ includes all other combinations too ) and that is
    why we stuck at the home i.e / root page however if we would have used exact path, then it will match the
    entire path string and then redirect. The order of routes do matter if we do not use exact path. To solve the
    problem even if we use path, we can palce /about route above the / route so that /about path will be matched
    first and then we can redirect to it.

- There are two route matching components: Switch and Route. When a <Switch> is rendered, it searches through 
its children <Route> elements to find one whose path matches the current URL. When it finds one, it renders that 
<Route> and ignores all others. This means that you should put <Route>s with more specific (typically longer) paths 
before less-specific ones.

- Using anchor tag when we redirect to a new page/link the previous page state is lost but if we use Link component
of react then the previous page state is also preserved and we can have the same state of the previous page when we 
visit the older page again.

- We can either render or we can assign a complete component. rendering means defining at the same point however
when we assign a component, component is totally created in a different file.

- If no <Route> matches, the <Switch> renders nothing (null).

*/