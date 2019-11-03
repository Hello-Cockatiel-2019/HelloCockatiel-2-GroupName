import React, { Component } from 'react'

export default class Carousel extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/images/carousel1.png" class="d-block w-50" alt="fox1" />
                        </div>
                        <div class="carousel-item">
                            <img src="/images/carousel2.png" class="d-block w-50" alt="fox2" />
                        </div>
                        <div class="carousel-item">
                            <img src="/images/carousel3.png" class="d-block w-50" alt="fox3" />
                        </div>
                        <div class="carousel-item">
                            <img src="/images/carousel4.png" class="d-block w-50" alt="fox4" />
                        </div>
                        <div class="carousel-item">
                            <img src="/images/carousel5.png" class="d-block w-50" alt="fox5" />
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
            </div>
                        )
                    }
                }
