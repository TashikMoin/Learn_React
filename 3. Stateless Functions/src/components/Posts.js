import React from 'react'
const Posts = ( {user_number: { user_name, avatar_url, url } } ) =>  {
        return (
            <div className="container card text-center">
                <img class="round-img" src={avatar_url} alt="" style={{ width: '60px'}} />

                <h3> {user_name} </h3>

                <div> 
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book.
                    </p>
                </div>

                <div>
                <a className="btn btn-dark btn-sm my-1" href={url} >
                    View Complete Post
                </a>
                </div>
            </div>
        )
}
export default Posts


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