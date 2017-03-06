import React from 'react';
import {Carousel, Caption} from 'react-bootstrap';
import NavbarInstance from '../components/navbarInstance'




//main page for the DroeseRaney Architecture website clone. A comparison can be seen at www.droeseraney.com

const DRA = React.createClass({

  componentWillMount: function(){
    document.body.style.backgroundColor = "#151515";
    document.title="DroeseRaney Architecture";
    document.body.style.maxWidth= 1080;
},
componentWillUnmount: function(){
    document.body.style.backgroundColor = null;
    document.body.style.maxWidth= null;
    

},
  getInitialState() {
    return {
      index: 0,
      direction: null
    };
  },

  handleSelect(selectedIndex, e) {
    
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  },

  render() {
    return (
      <div>
      <NavbarInstance imgURL={'../app/assets/dra.png'}/>
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
        <Carousel.Item>
          		<img src="/app/assets/img1.jpg"/>
            </Carousel.Item>
            <Carousel.Item>
          		<img src="/app/assets/img2.jpg"/>
            </Carousel.Item>
            <Carousel.Item>
          		<img src="v/assets/img3.jpg"/>
            </Carousel.Item>
            <Carousel.Item>
          		<img src="/app/assets/img4.jpg"/>
            </Carousel.Item>
            <Carousel.Item>
          		<img src="/app/assets/img5.jpg"/>
            </Carousel.Item>
            <Carousel.Item>
          		<img src="/app/assets/img6.jpg"/>
            </Carousel.Item>
            <Carousel.Item>
          		<img src="/app/assets/img7.jpg"/>
            </Carousel.Item>
            
          
        
      </Carousel>
      </div>
    );
  }
});

export default DRA;