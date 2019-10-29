import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const NavItem1 = styled.ul `
    padding-left: 30%;
    list-style-type: none;
    font-size: 20px;
`

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="banner">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <a class="navbar-brand" href="#">
                        <img src="/images/fox-logo.png" alt="Logo" />
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <NavItem1 class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">INFO</a>
                            </li>
                        </NavItem1>
                        <NavItem1 class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">GALLERY</a>
                            </li>
                        </NavItem1>
                    </div>
                </nav>
            </div>
        )
    }
}
