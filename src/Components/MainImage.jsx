import React, { Component } from "react"
import css from './MainImage.scss'

class MainImage extends Component {
    constructor(props) {
      super(props)
    }
    render() {


      return (
        <div class="containerMain">
            <div class="orbita0">
            </div>
            <div class="orbita">
            </div>
            <div class="orbita2">
            </div>
            <div class="orbita3">
            </div>
            <div class="orbita4">
            </div>
            <div class="orbita5">
            </div>
            <h1 class="text">Paul</h1>
            <br></br>
            <h1 class="text2">Belches</h1>
            <br></br>
            <h1 class="text3">Web developer</h1>
            <br></br>
            <a href="https://github.com/paulbelches"><h1 class="text4">Github |</h1></a>
            <br></br>
            <a href="https://www.linkedin.com/in/paul-belches-flores-g%C3%B3mez-aa503b157/"><h1 class="text5">Linkedin</h1></a>
        </div>
    
      )
    }
  } 

  export default MainImage