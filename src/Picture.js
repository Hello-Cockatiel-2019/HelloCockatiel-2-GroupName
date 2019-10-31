import './pics.css';

import Navbar from './Components/Navbar'

import React, { Component } from 'react'
import Carousel from './Components/Carousel';

export default class Picture extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
          <Carousel />
        </div>
      </div>
    )
  }
}


