import React, { Component } from 'react'
import updatedcomp from './Higherorder';
export class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      };
    }

    incremented=()=>{
        this.setState({count:this.state.count+1})
    }

  render() {
    const {count} = this.state
    return (
      <div>
        <button onMouseEnter={this.incremented}>
            {this.props.name}Incremented {count} times
        </button>
      </div>
    )
  }
}

export default updatedcomp(Counter);