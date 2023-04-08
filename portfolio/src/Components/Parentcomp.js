import React, { Component } from 'react'
import Purecomp from './Purecomp'
import Regcomp from './Regcomp'

class Parentcomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name :"SimpliyLearn"
      }
    }

    componentDidMount()
    {
        setInterval(() => {
            this.setState({
                name:"SimplyLearn"
            });
            
        },3000)

    }

  render() {
    return (
      <div>I am the parent component
        <Purecomp name ={this.state.name}/>
        <Regcomp name ={this.state.name}/>
      </div>
      
       
    )
  }


}

export default Parentcomp