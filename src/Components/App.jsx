import React, { Component } from "react"
import FlipCard from "../Components/FlipCard.jsx"
import ProgressBar from "../Components/ProgressBar.jsx"
import ScrollDownCard from "../Components/ScrollDownCard.jsx"
import MainImage from "./MainImage.jsx"
import ProjectShowUp from "./ProjectShowUp.jsx"

class App extends Component {
        constructor(props) {
          super(props)
        }
        render() {
          const style ={
            backgroundColor: "black"
          } 
          return (
            <div style={style}>
              <ProgressBar></ProgressBar>
              <MainImage></MainImage>
              <ScrollDownCard></ScrollDownCard>
              <FlipCard></FlipCard>
              <ProjectShowUp></ProjectShowUp>  
            </div>
          )
        }
      }
      export default App