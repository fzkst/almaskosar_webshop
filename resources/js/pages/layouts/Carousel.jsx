import React from 'react'


const Carousel = () => {
    return (
        <div className='carouselcss'>   
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">          
                <div className="carousel-inner">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="carousel-item active d-flex">
                                <img src="/img/carousel_iphone1.gif" className="d-block w-100" alt="first"></img>
                            </div>
                            <div className="carousel-item d-flex">
                                <img src="/img/carousel_iphone2.gif" className="d-block w-100" alt="second"></img>
                            </div>
                            <div className="carousel-item d-flex">
                                <img src="/img/carousel_iphone3.gif" className="d-block w-100" alt="third"></img>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="carousel-item d-flex">
                                <img src="/img/carousel_iphone2.gif" className="d-block w-100" alt="first"></img>
                            </div>
                            <div className="carousel-item d-flex">
                                <img src="/img/carousel_iphone3.gif" className="d-block w-100" alt="second"></img>
                            </div>
                            <div className="carousel-item d-flex">
                                <img src="/img/carousel_iphone1.gif" className="d-block w-100" alt="third"></img>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="carousel-item d-flex">
                                <img src="/img/carousel_iphone3.gif" className="d-block w-100" alt="first"></img>
                            </div>
                            <div className="carousel-item d-flex">
                                <img src="/img/carousel_iphone1.gif" className="d-block w-100" alt="second"></img>
                            </div>
                            <div className="carousel-item d-flex">
                                <img src="/img/carousel_iphone2.gif" className="d-block w-100" alt="third"></img>
                            </div>
                        </div>
                    </div>                                    
                </div>
                <div className='mt-2'>
                    <hr /><hr />
                </div>
            </div>
        </div>
    )
}

export default Carousel
