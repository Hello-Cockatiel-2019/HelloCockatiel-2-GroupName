import './App.css';




import Navbar from './Components/Navbar'

import React, { Component } from 'react'
import Foxpic from './Components/Foxpic';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar></Navbar>
          <Foxpic></Foxpic>
        </div>
      </div>
    )
  }
}


