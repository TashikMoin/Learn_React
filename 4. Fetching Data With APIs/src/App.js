import './App.css';
import React from 'react' ;
import Navbar from 'C:/Users/TashikMoin/Desktop/learning_reactjs/src/components/Navbar.js'
import Users from 'C:/Users/TashikMoin/Desktop/learning_reactjs/src/components/Users.js'
import axios from 'axios';

class App extends React.Component {

  state = 
  {
    loading: false, 
    users: []
  }

  async componentDidMount()
  {
    this.setState({ loading: true }) ;
    const Fetched_Users_Data = await axios.get('https://api.github.com/users'); 
    /* 
    we can also call then() if we want to call. syntax to call then(),
      const Fetched_Users_Data = await axios.get('https://api.github.com/users').then(<function/arrow_function>); 
    */
    this.setState( { loading: false , users: Fetched_Users_Data.data } ); 
    /* setting loading state to false so that it can indicate that data fetching is completed */
  }

  /*

  The Component Lifecycle
    Each component has several “lifecycle methods” that you can override to run code at particular times in 
    the process. You can use this lifecycle diagram as a cheat sheet. In the list below, commonly used lifecycle 
    methods are marked as bold. The rest of them exist for relatively rare use cases.

  Mounting ( Means Addition Of A Node Into DOM )
    These methods are called in the following order when an instance of a component is being created and inserted 
    into the DOM,
      1. Constructor()
      2. Static getDerivedStateFromProps()
      3. Render()
      4. ComponentDidMount()

  Unmounting ( Means Removal Of A Node From DOM )
    This method is called when a component is being removed from the DOM:
      - ComponentWillUnmount()

  componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). 
  Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint (API), 
  this is a good place to instantiate the network request. It is the first method called after the insertion of 
  the component node into the DOM. This function provides a perfect time for fetching data for the page. We can
  immediately fetch data from remote location after calling render by calling this function. It is a best practice
  to fetch remote data in this method for fast fetching.

  Axios is an advanced API module similar to Fetch API axios also works on promisess and we can call then()
  as it returns a promise. We do not need to call json(), text() it extracts the data from the raw format
  and returns us data in appropriate format in it's .data attriute. we can simply use response.data to get 
  data in proper format directly suing 'data' attribute of axios.


  */

  render()
  { 
    return (
      <div>
        <Navbar title="errabuzz"/>
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users}/> 
        </div>
        
      </div>
    );
  }
}
export default App;

/*

      <div>
        <Navbar title="errabuzz"/>
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users}/> 

          //Passing states ( users data, loading information ) to child component 'Users' so that it can
          //display users data and it can use laoding attribute/prop to display loading spinner at the time 
          //of loading

        </div>
        
      </div>

*/
