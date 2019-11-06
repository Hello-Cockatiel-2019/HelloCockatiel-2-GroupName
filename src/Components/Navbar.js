import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const Logo = styled.img `
    width: 100px;
    height: 87px;
    margin-left: 20px;
`
const LogoText = styled.a `
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
function showHome() {
    document.getElementById("home").style.display = 'block';
    document.getElementById("info").style.display = 'none';
    document.getElementById("pics").style.display = 'none';
    document.getElementById("infoLink").style.color = "#FDBE90";
    document.getElementById("homeLink").style.color = "#FD8127";
    document.getElementById("picsLink").style.color = "#FDBE90";
}

function showInfo() {
    document.getElementById("home").style.display = 'none';
    document.getElementById("info").style.display = 'block';
    document.getElementById("pics").style.display = 'none';
    document.getElementById("homeLink").style.color = "#FDBE90";
    document.getElementById("infoLink").style.color = "#FD8127";
    document.getElementById("picsLink").style.color = "#FDBE90";
}

function showPics() {
    document.getElementById("home").style.display = 'none';
    document.getElementById("info").style.display = 'none';
    document.getElementById("pics").style.display = 'block';
    document.getElementById("homeLink").style.color = "#FDBE90";
    document.getElementById("picsLink").style.color = "#FD8127";
    document.getElementById("infoLink").style.color = "#FDBE90";
}

export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg nav-style fixed-top">
                    <LogoText class="navbar-brand" href="/index.html">
                        <Logo src="/images/Projectlogo 3.png" alt="Logo"></Logo>
                        <span style={{color: "#FDBE90" }}>FOX</span><span style={{color: "#FD8127"}}>SLAVE</span>
                    </LogoText>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <NavItem class="nav-link" href="#home" style={{color: "#FD8127"}} onClick={showHome} id="homeLink">HOME</NavItem>
                            </li>
                            <li class="nav-item">
                                <NavItem class="nav-link" href="#info" style={{color: "#FDBE90"}} onClick={showInfo} id="infoLink">INFO</NavItem>
                            </li>
                            <li class="nav-item">
                                <NavItem class="nav-link" href="#pics" style={{color: "#FDBE90"}} onClick={showPics} id="picsLink">PICS</NavItem>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
                )
            }
        }
