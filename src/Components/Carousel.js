import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const CarouselImage = styled.img`
    width: 800px;
    height: 533px;
`

export default class Carousel extends React.Component {
    render() {
        return (
            <div>
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <CarouselImage src="/images/1.png" class="" alt="fox1" />
                        </div>
                        <div class="carousel-item">
                            <CarouselImage src="/images/2.png" class="" alt="fox2" />
                        </div>
                        <div class="carousel-item">
                            <CarouselImage src="/images/3.png" class="" alt="fox3" />
                        </div>
                        <div class="carousel-item">
                            <CarouselImage src="/images/4.png" class="" alt="fox4" />
                        </div>
                        <div class="carousel-item">
                            <CarouselImage src="/images/5.png" class="" alt="fox5" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <br />


            </div>


        )
    }
}
