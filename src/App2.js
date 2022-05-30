import React, { Component } from 'react'

export default class App2 extends Component {
    //this.props.name
    //1. Property Area

    //2. Constructor Area

    //3. Method Area
    render() {
        console.log(this.props);
        console.log(this.props.myfullname2);
        return (
            <div>App2 { this.props.myfullname2} </div>
        )
    }
}
