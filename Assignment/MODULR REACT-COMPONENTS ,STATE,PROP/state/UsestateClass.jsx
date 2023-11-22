import React, { Component } from 'react'
import { Button } from 'reactstrap';

export default class UsestateClass extends Component {
    constructor(){
        super();
        this.state={
            count:1000,
        }
    }
  incrementHandler(){
    console.log("--------->");
    this.setState({count:this.state.count+1})
  }
    render() {
    return (
      <div>
        <h1>UsestateClass</h1>
        <h1>count is {this.state.count}</h1>
        <Button color="danger" onClick={()=>this.incrementHandler() }>inc</Button>
        </div>
    )
  }
}
