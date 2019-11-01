import React from 'react';
import axios from 'axios';
import DisplayList from './DisplayList';

class FetchList extends React.Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
    };

    componentDidMount(){
        axios
        .get('')
        .then (res =>{console.log(res.data)})
    }

    render(){
        return(
        <div><h1>Title of Page</h1>
        <DisplayList/>
        </div>)
    }
};

export default FetchList;