import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const FoxContent = styled.div`
    position: absolute;
    width: 400px;
    height: 400px;
    right: 200px;
    top: 170px; 
    background: #EFB560;
`

export default class Content extends React.Component {
    render() {
        return(
            <FoxContent>
                <br />
            </FoxContent>
        )
    }
}