import React, { Component } from 'react'

export default class Classprops extends Component {
    
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>hello,{this?.props?.data?.name}</h1>
        <h1>{this?.props?.data?.greeting}</h1>  
      </div>
    )
  }
}
