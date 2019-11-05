import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const CarouselImage = styled.img`
    width: 800px;
    height: 533px;
`

/*const SlideIndicators = styled.img`
    width: 100px;
    height: 67px;
`*/

export default class Carousel extends React.Component {
    render() {
        return (
            <div>
                <div id="carouselFade" class="carousel slide carousel-fade" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <CarouselImage src="/images/1.png" class="d-block" alt="fox1" />
                        </div>
                        <div class="carousel-item">
                            <CarouselImage src="/images/2.png" class="d-block" alt="fox2" />
                        </div>
                        <div class="carousel-item">
                            <CarouselImage src="/images/3.png" class="d-block" alt="fox3" />
                        </div>
                        <div class="carousel-item">
                            <CarouselImage src="/images/4.png" class="d-block" alt="fox4" />
                        </div>
                        <div class="carousel-item">
                            <CarouselImage src="/images/5.png" class="d-block" alt="fox5" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselFade" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselFade" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <br />
                <div>
                    <ul className="d-flex justify-content-center">
                        <li className="slide-indicator">
                            <a href="#carouselFade" role="button" data-slide-to="0" style={{textDecoration: 'none'}}>
                                <img src="/images/1.png" className="indicator" style={{width: "140px"}} alt="fox1"/>
                            </a>
                        </li>
                        <li className="slide-indicator">
                            <a href="#carouselFade" role="button" data-slide-to="1" style={{textDecoration: 'none'}}>
                                <img src="/images/2.png" className="indicator" style={{width: "140px"}} alt="fox2"/>
                            </a>
                        </li>
                        <li className="slide-indicator">
                            <a href="#carouselFade" role="button" data-slide-to="2" style={{textDecoration: 'none'}}>
                                <img src="/images/3.png" className="indicator" style={{width: "140px"}} alt="fox3"/>
                            </a>
                        </li>
                        <li className="slide-indicator">
                            <a href="#carouselFade" role="button" data-slide-to="3" style={{textDecoration: 'none'}}>
                                <img src="/images/4.png" className="indicator" style={{width: "140px"}} alt="fox4"/>
                            </a>
                        </li>
                        <li className="slide-indicator">
                            <a href="#carouselFade" role="button" data-slide-to="4" style={{textDecoration: 'none'}}>
                                <img src="/images/5.png" className="indicator" style={{width: "140px"}} alt="fox5"/>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>


        )
    }
}
