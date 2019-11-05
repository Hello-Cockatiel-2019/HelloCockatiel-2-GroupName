import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const Oval = styled.div`
    background-color: #946D46;
    width: 100%;
    height: 150px;
    border-radius: 50% / 100%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
`

const TextFooter = styled.div`
    font-family: 'Allan', cursive;
    color: #ffffff;
    font-size: 20px;
    line-height: 15px;
`

const Header = styled.h3`
    font-family: 'Allan', cursive;
    color: #ffffff;
`

export default class Footer extends React.Component {
    render() {
        return (
            <Oval>
                <Header className="text-center pt-3">All Credit goes to...</Header>
                <TextFooter className="text-center pt-3">
                    <ul>
                        <li className="list">
                            http://yesofcorsa.com/4k-fox/
                        </li>
                        <li className="list">
                            The Little Fox[IOS game]
                        </li>
                        <li className="list">
                            https://cheezburger.com/7937661184
                        </li>
                    </ul>
                    <ul>
                        <li className="list">
                            http://yesofcorsa.com/4k-fox/
                        </li>
                        <li className="list">
                            https://cheezburger.com/7937661184
                        </li>
                    </ul>
                </TextFooter>
            </Oval>
        )
    }

}