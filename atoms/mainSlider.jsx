import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";



const MainSlider = ({ getHomePageDetails }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div className="sigma_banner-slider">
            <Slider {...settings}>
                {getHomePageDetails?.banners?.map((bannerData, ind) => (
                    <div key={ind} className="sigma_banner-slide">
                        <img
                            src={bannerData?.banner_image}
                            alt={bannerData?.title}
                            className="sigma_banner-image"
                        />
                        <div className="sigma_banner-text">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <h1 className="title">
                                            {bannerData?.title}
                                        </h1>
                                        <p className="mb-0 bg-transparent">
                                            {bannerData?.title2}
                                        </p>
                                        <div className="section-button d-flex align-items-center">
                                            <li>
                                                <Link className="btn btn-primary" href={bannerData?.url}>
                                                    PARTICIPATE NOW
                                                    <i className="far fa-arrow-right" />
                                                </Link>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

        </div>
    );
};

export default MainSlider;
