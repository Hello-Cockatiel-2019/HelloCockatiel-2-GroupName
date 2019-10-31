import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const FoxImage = styled.img`
    position: absolute;
    left: 200px;
    top: 190px;
    height: 350px;
    width: 350px;
`

export default class Foxpic extends React.Component {
    render() {
        return(
            <div>
                <FoxImage src="/images/image.jpg" alt="Fox image"></FoxImage>
            </div>
        )
    }
} 