import React from 'react';
import Config from '../Config/Config';

const Device = (props) => {
    return (
        <div style={{border :'2px solid green', margin:'5px'}}>
            <h1>'Hellow wellcome to Islam'</h1>
            <h2>My Device name:{props.name}</h2>
            <h4>Current Steps:{props.steps}</h4>
            <Config price ={props.price} />
        </div>
    );
};

export default Device;