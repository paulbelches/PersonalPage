import React, { Component } from "react"

class ProgressBar extends Component {
    constructor(props) {
      super(props),
      this.state = {
        rotation: 'rotateY(0deg)',
        scrolled: '0%'
      }
    }


    render() {
        window.onscroll = function() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight
            var scrolled = (winScroll / height) * 100
            document.getElementById("myBar").style.width = scrolled + "%"
            console.log("hola")
        }
      /* The progress container (grey background) */
        const progressContainer = {
            position: 'fixed',
            top: '0',
            zIndex: '1',
            width: '100%',
            height: '8px',
            background: 'black'
        }
    
        /* The progress bar (scroll indicator) */
        const progressBar = {
            height: '8px',
            background: '#ccc',
            width: '0%'
        }

      return (
        <div style={progressContainer}>
            <div style={progressBar} id="myBar"></div>
        </div>
      )
    }
  } 

  export default ProgressBar