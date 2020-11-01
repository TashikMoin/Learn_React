import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Search extends Component {

    state = {
        text: '' 
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        setAlert: PropTypes.func.isRequired
    };


    onChange = e => {
        this.setState({ text: e.target.value } ) 
    };

    onSubmit = e => {
        e.preventDefault();
        if (this.state.text === '') {
          this.props.setAlert(' Please enter something !', 'light'); 
          /* calling functional prop setAlert which will call the setAlert function of App.js (parent component)
          and then it will set the alert state of parent component to !null means there will be some alert message
          and boxColor insdie alert state and now this !null alert state is passed to alert component to display the
          alert component/block only if alert !== null that is why we have a conditional rendering expression block
          inside the Alert component to only display Alert component only when it is not null which means when there's
          no alert message in it.
          */
        } else {
          this.props.searchUsers(this.state.text);
          this.setState({ text: ''});
        }

    };

    render() {
        return (
            <div>
            <form className="form" onSubmit={this.onSubmit}> 
                <input type="text" name="text" placeholder="Search.." value={this.state.text} onChange={this.onChange}/>
                <input type="submit" value="Search" className="btn btn-dark btn-block"/> 
            </form>
        </div>
        )
    }
}
export default Search

