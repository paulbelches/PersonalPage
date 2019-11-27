import React, { Component } from "react"
import FlipCard from "./FlipCard/FlipCard.jsx"
import ProgressBar from "./ProgressBar/ProgressBar.jsx"
import ScrollDownCard from "./ScrollDownCard/ScrollDownCard.jsx"
import MainImage from "./MainImage/MainImage.jsx"
import ProjectShowUp from "./ProjectShowUp/ProjectShowUp.jsx"

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