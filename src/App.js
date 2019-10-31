import './App.css';




import Navbar from './Components/Navbar'

import React, { Component } from 'react'
import Foxpic from './Components/Foxpic';
import Content from './Components/Content';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar></Navbar>
          <Foxpic></Foxpic>
          <Content></Content>
        </div>
      </div>
    )
  }
}


