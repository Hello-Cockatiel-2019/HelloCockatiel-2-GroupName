import React, { Component } from 'react'

export default class Carousel extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <div clss="row">
                        <div clsss="col-lg-4">

                        </div>
                        <div clsss="col-lg-4">
                            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="/images/1.png" class="" alt="fox1" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/images/2.png" class="" alt="fox2" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/images/3.png" class="" alt="fox3" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/images/4.png" class="" alt="fox4" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="/images/5.png" class="" alt="fox5" />
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
                        <div clsss="col-lg-4">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
