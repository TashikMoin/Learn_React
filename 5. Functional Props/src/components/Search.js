import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class Search extends Component {

    state = {
        text: '' 
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired // write ptfr + tab for direct PropTypes.func.isRequired snippet.
        
    };

    onChange = e => {
        this.setState({ text: e.target.value } ) 
        /* 
        setting the text state to the current targetted event value here value == text since we defined the onChange event inside the
        text box input so whenever the text inside the textbox of search changes, the text state will also become the updated one 
        */
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);

        /* 
        This functional prop was passed into the child component by this line  -> Search searchUsers={this.searchUsers}/> in the
        parent component (App.js component ) so that we can call this function through child component ( Search.js component )
        props can be of function type too. here we are calling the function searchUser onSubmit event so that the data will be fetched
        from the github users api and passing the search user function a text parameter ( text current state in search box ) so that we
        can use this text to search accordingly by passing text in the query string. props are still uni-directional means Parent -> child 
        data passing only but we can call functions that are passed from parent component to the child component from child's scope.
        */
        this.setState({text: ''}); // After search, setting the search box text to "" nothing.
    }

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

/*
        <div>
            <form className="form" onSubmit={this.onSubmit}> 
            // Applying onSubmit event on form tag so that all the fields/Data_input inside the form will be submitted 

                <input type="text" name="text" placeholder="Search.." value={this.state.text} onChange={this.onChange}/>
                // defining a onChange event so that text state gets updated everytime whenever a new text is written
                // even after erasing/removing the previous text. Using onChange, we can have updated text state otherwise
                // we will be having only the first input and not the changes/updated text 
                
                <input type="submit" value="Search" className="btn btn-dark btn-block"/>
            </form>
        </div>
*/

