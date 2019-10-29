import React from 'react';
import styled from 'styled-components';
import Logo from '../Components/images/fox-logo.png';


export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Info</a>
                        </li>
                    </ul>
                </div>
                <a className="navbar-brand mx-auto" href="#">
                    <img src={Logo} alt="Logo" style={{ width: "50px" }, { height: "50px" }} />
                </a>
                <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Go!</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
