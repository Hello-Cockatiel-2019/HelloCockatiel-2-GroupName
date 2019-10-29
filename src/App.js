import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import Navbar from './Components/Navbar'

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar></Navbar>
        </div>
      </div>
    )
  }
}


