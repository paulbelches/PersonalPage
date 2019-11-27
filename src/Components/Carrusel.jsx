    import React, { Component } from "react"
    
      class CarruselButtonL extends Component {
        constructor(props) {
          super(props)
          this.state = {
            size: '24px',
            ml: '8px'
          }

        }
        mouseEnter() {
          this.setState({size: '44px',ml: '4px'})
        }        
        mouseLeave() {
          this.setState({size: '24px', ml: '8px'})
        }
        render() {
          const Margin = {
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            width: '27px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'end'
          }
          const text ={
                fontSize: this.state.size,
                margin:'0px',
                color: 'white',
                fontFamily: 'Roboto Condensed,sans-serif',
                marginLeft: this.state.ml
              
            }
    
          return (
            <div onMouseOver={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} onClick={this.props.click} style={Margin}>
              <p style={text}>&#x3c;</p>
            </div>
          )
        }
      } 
      class CarruselButtonR extends Component {
        constructor(props) {
          super(props)
          this.state = {
            size: '24px',
            ml: '8px'
          }
        }
        mouseEnter() {
          this.setState({size: '44px',ml: '4px'})
        }        
        mouseLeave() {
          this.setState({size: '24px', ml: '8px'})
        }
        render() {
          const Margin = {
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            width: '30px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'end'
          }
          const text ={
                fontSize: this.state.size,
                margin:'0px',
                color: 'white',
                fontFamily: 'Roboto Condensed,sans-serif',
                marginLeft: this.state.ml
              
            }
    
          return (
            <div onMouseOver={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} onClick={this.props.click} style={Margin}>
              <p style={text}>&#x3e;</p>    
            </div>
          )
        }
      } 
        
      class CarruselButtons extends Component {
        constructor(props) {
          super(props)
        }
        render() {
          const Footer = {
            width: '52px',
            height: '50px',
            alignSelf: 'flex-end',
            marginLeft: '447px',
            display: 'flex',
            zIndex:'2',
            position: 'absolute'
          }

          return (
            <div style={Footer}>   
              <CarruselButtonL click={this.props.prev}></ CarruselButtonL> 
              <CarruselButtonR click={this.props.next}></ CarruselButtonR>    
            </div>
          )
        }
      }
      class Carrusel extends Component {
        constructor(props) {
          super(props)
          this.state = {
            cont: 0,
            img : [
              'url(https://cdn.2kgames.com/2k.com/img/bioshockinfinite_ss_02.jpg)',
              'url(https://cdn.2kgames.com/2k.com/img/bioshockinfinite_ss_04.jpg)',
              'url(https://cdn.2kgames.com/2k.com/img/bioshockinfinite_ss_06.jpg)',
              'url(https://cdn.2kgames.com/2k.com/img/bioshockinfinite_ss_08.jpg)',
              'url(https://cdn.2kgames.com/2k.com/img/bioshockinfinite_ss_09.jpg)'
              ]
          }
        }
        nextImg(){
          this.state.cont = this.state.cont + 1
          console.log("Hola")
          if (this.state.cont == 5 ){
            this.state.cont = 0
          }
          this.setState({size: this.state.cont})
        }
        prevImg(){
          this.state.cont = this.state.cont - 1
          console.log("Hola")
          if (this.state.cont == -1 ){
            this.state.cont = 4
          }
          this.setState({size: this.state.cont})
        }
        render() {
          const Img = {
            width: 'inherit',
            height: 'inherit',
            position: 'absolute',
            backgroundImage:this.state.img[this.state.cont],
            backgroundPosition: '50%',
            backgroundSize: 'cover',
          }
          const Container = {
            width: `${this.props.width}%`,
            height: `${this.props.height}px` ,
            boxSizing: 'border-box',
            postion: 'absolute'  ,
            gridColumn: '1/ 3',
            gridRow: '1' ,
            display:'flex',
            overflow: 'hidden'   
          }
          
          return (
            <div  style={Container}>
              <CarruselButtons prev={this.prevImg.bind(this)} next={this.nextImg.bind(this)} ></CarruselButtons> 
              <div style={Img} >
              </div>
            </div>  
          )
        }
      }
      export default Carrusel