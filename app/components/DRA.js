import React from 'react';
import {Carousel, Caption} from 'react-bootstrap';


//main page for the DroeseRaney Architecture website clone. A comparison can be seen at www.droeseraney.com

const DRA = React.createClass({
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
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
        <Carousel.Item>
          		<img src="/assets/img1.jpg"/>
            </Carousel.Item>
            <Carousel.Item>
          		<img src="/assets/img2.jpg"/>
            </Carousel.Item>
            <Carousel.Item>
          		<img src="/assets/img3.jpg"/>
            </Carousel.Item>
            <Carousel.Item>
          		<img src="/assets/img4.jpg"/>
            </Carousel.Item>
            <Carousel.Item>
          		<img src="/assets/img5.jpg"/>
            </Carousel.Item>
            <Carousel.Item>
          		<img src="/assets/img6.jpg"/>
            </Carousel.Item>
            <Carousel.Item>
          		<img src="/assets/img7.jpg"/>
            </Carousel.Item>
            
          
        
      </Carousel>
    );
  }
});

export default DRA;