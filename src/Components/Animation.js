import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const Animate = styled.img`
    width: 1000px;
    height: 305px;
    
`

export default class Animation extends React.Component {
    render() {
        return (
           
                <Animate src="/images/mascot.gif" alt="fox animation" />
     
        )
    }
}