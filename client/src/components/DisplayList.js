import React from 'react';

const DisplayList = props => {
    console.log(props);

        return(<h2>{props.data.name}</h2>)
    
};

export default DisplayList;