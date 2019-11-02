import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from './Components/Navbar'
import styled from 'styled-components'
import React, { Component } from 'react'
import Foxpic from './Components/Foxpic';
import Content from './Components/Content';
import Animation from './Components/Animation';
import Carousel from './Components/Carousel'



export default class App extends Component {
	render() {
		return (
			<div>
				<div>
					<Navbar />
					<div className="container justify-content-center">
						<div className="row mt-4" style={{position: 'absolute'}, {zIndex: '-1'}}>
							<div className="col-lg-4">
								<Foxpic />
							</div>
							<div className="col-lg-8">
								<Content />
							</div>
							<Animation />
						</div>
						
						<hr style={{ borderColor: "#C29679" }} />
						<Carousel/>
					</div>
					
				</div>
			</div>
		)
	}
}


