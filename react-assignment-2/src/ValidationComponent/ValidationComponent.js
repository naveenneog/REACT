import React from 'react';

const validationComponent = (props) => {
    let displayText = null;
    if(props.length > 5){
        displayText = (<p>Text is too long</p>);
    }else{
        displayText = (<p>Text is short </p>);
    }
    return (
        <div className = "ValidationComponent"> 
        {displayText}
        </div>
    )
       
   
}
export default validationComponent;