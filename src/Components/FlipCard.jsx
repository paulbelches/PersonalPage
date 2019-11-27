import React, { Component } from "react"
import css from './FlipCard.scss'
import EmptyText from "../Components/EmptyText.jsx"
import Carrusel from "./Carrusel.jsx"

class FlipCard extends Component {
    constructor(props) {
      super(props),
      this.state = {
        rotation: 'rotateY(0deg)',
      }
    }
    render() {

      const flex = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }

      return (
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front" style={flex}>
              <EmptyText text="The things I like to do"></EmptyText>
            </div>
            <div class="flip-card-back">
              <Carrusel width={100} height={500} ></Carrusel>
            </div>
          </div>
        </div>
      )
    }
  } 

  export default FlipCard