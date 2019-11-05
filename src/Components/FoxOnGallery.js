import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const FoxGallery = styled.img`
    width: 130px;
`

export default class FoxOnGallery extends React.Component {
    render() {
        return(
            <div>
                <FoxGallery src="/images/foxgallery.png" alt="fox above the carousel"/>
            </div>
        )
    }
}