import React, { Component } from "react"
import css from './ScrollDownCard.scss'
import EmptyText from "../Components/EmptyText.jsx"

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
                <EmptyText></EmptyText>
            </div>
        </div>
      )
    }
  } 
  export default ScrollDownCard