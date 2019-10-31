import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const Logo = styled.img `
    width: 95px;
    height: 65px;
`
const LogoText = styled.a `
    color: #FDBE90;
    font-family: 'Allan', cursive;
    font-size: 40px;
    text-decoration: none !important;
`
const NavItem = styled.a `
    font-size: 40px;
    font-family: 'Allan', cursive;
    padding-left: 1em;
    padding-right: 1em;
    text-align: center;
`


export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg nav-style">
                    <LogoText class="navbar-brand" href="/index.html">
                        <Logo src="/images/Projectlogo 3.png" alt="Logo"></Logo>
                        FOX<span style={{color: "#FD8127"}}>HOUND</span>
                    </LogoText>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <NavItem class="nav-link" href="/info.html" style={{color: "#FDBE90"}}>INFO</NavItem>
                            </li>
                            <li class="nav-item">
                                <NavItem class="nav-link" href="/pics.html" style={{paddingRight: "0.5em"} , {color: "#FD8127"}}>PICS</NavItem>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
                )
            }
        }
