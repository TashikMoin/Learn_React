import React from 'react'
const Navbar = (props) => {
        return (
            <navbar className='navbar bg-primary'>
                <h1>
                <i class="fab fa-tumblr"></i>
                {props.title} 
                </h1>    
            </navbar>
        )
}
export default Navbar

/*


                             Stateless Functions 

- If your class based component does not have any state/attribute then it is better to convert the class based component into a function based component because it is of less code and everything looks clean and self explanatory.

Steps:-
- Remove component from  --> import React, { Component } from 'react'
    import React from 'react'

- Replace class,extends and component keyword --> class Users extends Component with this,
        const <function_name/old_class_name> = (<props_if_any>) => {
               
                //code
                //code
                //code
        }

     e.g

        const Navbar = (props) => {
               
                //code
                //code
                //code
        }


- When we define functional components, we do not need render function anymore so remove it too to make code more cleaner.

- Always convert a class component into a functional component when there's no state defined inside class.

- When props are passed to a child functional component from a parent then we receive them in a functional parameter "props" and now since we have converted the class component into a functional component, we do not need to use this. with props we can directly say prop.<any_attribute> for e.g,
  prop.title

  */