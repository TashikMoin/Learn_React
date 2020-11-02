import React, { useState } from 'react'
import PropTypes from 'prop-types';

const Search = (props) => {  
    // can destructure props  -> const Search = ({ searchUsers, setAlert}) so that we can avoid props+(dot)

    const[text, setText] = useState('') ;
    /* 
    To define a state inside a functional component, we use useState hook. The syntax for defining a state
    in a functional component is,

    const/var/let [stateName, functionToSetState'sValue] = useState(Default Value For State) ;
    */



    const onChange = e => { 
        setText(e.target.value) 
    };

    const onSubmit = e => {
        e.preventDefault();
        // we can now replace this.state.text with simply text when defining state with setState hook.
        if (text === '') { 
          /* 
          No need to use this keyword with props anymore. we can also directly call props function and can
          directly use props names instead of using props+dot to access props by destructuring the props while 
          receiving the props in the functional component.We can destructure and can replace,
          const Search = (props) => {... }   with const Search = ({ searchUsers, setAlert}) => {
          */
          props.updateAlert(' Please enter something !', 'light'); 
        } else {
          props.searchUsers(text); 
          //setState({ text: ''}); is replace with setText('');
          setText('');
        }

    };

    return (
        <div>
        <form className="form" onSubmit={onSubmit}> 
            <input type="text" name="text" placeholder="Search.." value={text} onChange={onChange}/>
            <input type="submit" value="Search" className="btn btn-dark btn-block"/> 
        </form>
    </div>
    )
    
}

/* 
Remove propTypes from class scope and put them outside the new functional componentand use function name + dot
to define them instead of using static keyword use <function_name>.propTypes = {....}
*/
Search.propTypes = {   
    searchUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
};
export default Search

