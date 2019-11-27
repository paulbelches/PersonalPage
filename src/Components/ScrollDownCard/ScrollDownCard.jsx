import React, { Component } from "react"
import css from './ScrollDownCard.scss'
import EmptyText from "../EmptyText.jsx"

class ScrollDownCard extends Component {
    constructor(props) {
      super(props)
    }
    render() {

      return (
        <div class="container">
            <div class="image"> 
                <EmptyText text="Who am I?"></EmptyText>
            </div>
            <div class="overlay">
                <div class="ProfilePicture"></div>
                <h1 class="Paragraph">Hi my name is Paul, and I am a 3erd year Computer Science student at Del Valle University in Guatemala. I identify myself as a person with insatiable hungry for knowledge, and the will to learn.</h1>
            </div>
        </div>
      )
    }
  } 
  export default ScrollDownCard