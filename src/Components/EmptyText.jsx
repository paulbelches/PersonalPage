import React, { Component } from "react"

class EmptyText extends Component {
    constructor(props) {
      super(props),
      this.state = {
        rotation: 'rotateY(0deg)',
      }
    }
    render() {
        const text = {
            backgroundColor: 'white',
            color: 'black',
            paddingLeft: '10px',
            paddingRight: '10px',
            fontSize: '5vw', 
            fontWeight: 'bold',
          }
      return (
        <div style={text}>{this.props.text}</div>
      )
    }
  } 

  export default EmptyText