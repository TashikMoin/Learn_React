import React from 'react'

const Alert = (abc) => {
  /* 
     receiving props. we can also destructure the props into an object if we replace props with -> {alert} this
     {alert} menas we are destructuring the props into an object alert and we can direct say alert.boxColor,
     alert.Message instead of typing props.alert.Message and props.alert.boxColor.

     Note: Do not use this keyword with props when accessing inside return scope. this keyword with props
     is only used inside any function scope.
  */
    return (
        abc.alert !== null && (
          <div className={`alert alert-${abc.alert.boxColor}`}>
            <i className='fas fa-info-circle' /> {abc.alert.Message}
          </div>
        )
      );
}

export default Alert