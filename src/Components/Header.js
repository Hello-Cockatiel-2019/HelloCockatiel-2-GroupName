import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const Head = styled.h1`
    color: #C29679;
    font-family: 'Allan', cursive;
    letter-spacing: 0.225em;
    font-size: 54px;
`

const Header = ({ herderText }) => {
    return(
        <Head>
            { herderText }
        </Head>
    )
}

export default Header;