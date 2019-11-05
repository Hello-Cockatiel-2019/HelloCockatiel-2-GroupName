import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const FoxPicFooter = styled.img`
    width: 260px;
    height: 270px;
`

export default class FoxFooter extends React.Component {
    render() {
        return(
            <div>
                <FoxPicFooter src="/images/foxfooter.png"></FoxPicFooter>
            </div>
        )
    }
}