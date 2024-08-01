import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSlider from "../../atoms/mainSlider";
import PoojaCard from "@/atoms/pujaCard";
import Link from "next/link";
import HelpCenter from "@/atoms/helpCenter";
import ContactForm from "../contactForm";
import BlogCard from "./blogCard";
import Head from "next/head";

export default function HomePage(props) {
  const [isOpen, setIsOpen] = useState(1);
  const {
    getHomePageDetails,
    generalConfiguration,
    faqData,
    poojaData,
    homeContent,
  } = props;


  const handleClickFaq = (val) => {
    setIsOpen(val);
  };

  // this slider updated testimonials today
  const test_settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{props?.generalConfiguration?.site_name}</title>
        <meta
          name="description"
          content={props?.generalConfiguration?.meta_content}
        />
        <meta name="keywords" content={props?.generalConfiguration?.meta_title}/>
        {/* Add more meta tags as needed */}
      </Head>
      {/* Banner Start */}

      <div className="sigma_banner banner-3">
        <MainSlider getHomePageDetails={getHomePageDetails} />
      </div>
      {/* Banner End */}
      {/* About Start */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-lg-30">
              <div className="img-group">
                <div className="img-group-inner">
                  <img
                    src={getHomePageDetails?.home_about?.file1}
                    style={{ width: 250 }}
                    alt={getHomePageDetails?.home_about?.title1}
                  />
                  <span />
                  <span />
                </div>
                <img
                  src={getHomePageDetails?.home_about?.file2}
                  alt={getHomePageDetails?.home_about?.title2}
                />
                <img
                  src={getHomePageDetails?.home_about?.file3}
                  alt={getHomePageDetails?.home_about?.title3}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="me-lg-30">
                <div className="section-title mb-0 text-start">
                  <p className="subtitle">
                    {getHomePageDetails?.home_about?.title1}
                  </p>
                  <h4 className="title">
                    {getHomePageDetails?.home_about?.title2}
                  </h4>
                </div>
                <ul className="sigma_list list-2 mb-0">
                  <li>{getHomePageDetails?.home_about?.title3}</li>
                  <li>{getHomePageDetails?.home_about?.title4}</li>
                  <li>{getHomePageDetails?.home_about?.title5}</li>
                  <li>{getHomePageDetails?.home_about?.title6}</li>
                </ul>
                <p className=" bg-transparent">
                  {getHomePageDetails?.home_about?.description}
                </p>
                {/* <Link href={getHomePageDetails ? getHomePageDetails?.home_about?.url_link: ''} className="sigma_btn-custom light">
                    Learn More <i className="far fa-arrow-right" />{" "}
                  </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About End */}
      <div className="section section-padding pattern-squares dark-bg-2">
        <div className="container">
          <div className="section-title text-start">
            <h4 className="title text-white">How We Can Help</h4>
          </div>
          <div className="row g-3">
            {homeContent
              ? homeContent?.content?.home_setting_how_we_can_help?.map(
                  (categoryData, data) => {
                    return (
                      <div
                        className="col-lg-4 col-md-6"
                        key={categoryData?.data_id}
                      >
                        <Link
                          href={categoryData?.how_we_can_page_link ||'#'  }
                          className="sigma_service style-1 primary-bg"
                        >
                          <div className="sigma_service-thumb">
                            {/* Dynamic image from the backend */}
                            <img
                              src={categoryData?.how_we_can_images}
                              alt="img"
                            />
                          </div>
                          <div className="sigma_service-body">
                            <h3 className="text-white">
                              {categoryData?.how_we_can_title}
                            </h3>
                            <p className="text-white">
                              {categoryData?.how_we_can_content}
                            </p>
                          </div>
                          <span className="btn-link text-white">
                            Learn More{" "}
                            <i className="text-white far fa-arrow-right" />{" "}
                          </span>
                        </Link>
                      </div>
                    );
                  }
                )
              : null}
          </div>
        </div>
      </div>

      {/* puja Start */}
      <div className="section section-padding pt-0" style={{ marginTop: 20 }}>
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title">हमारे अनुष्ठान</h2>
            <p className="subtitle">
              भाव के लिए भव्यता की आवश्यकता नही होती, किन्तु अगर भव्यता से वो
              भाव उत्पन्न हो जो सौम्यता के साथ, समस्त परिवार में समृद्धि लाये,
              तो इस भौतिक आयाम में उस से सर्वोपरि कुछ नहीं। वैदिक रस में सराबोर
              हमारे अनुष्ठान, आपको सदैव आपके आध्यात्मिक उत्थान के लिए
              प्रोत्साहित करते हैं।
            </p>
            <li>
              <Link className="sigma_btn-custom-1" href="/Puja">
                View All Puja
              </Link>
            </li>
          </div>
          <div className="row g-3">
            {poojaData?.puja_data &&
              poojaData.puja_data.slice(-6).map((pooja) => {
                return <PoojaCard pooja={pooja} key={pooja.id} />;
              })}
          </div>
        </div>
      </div>
      {/* puja End */}
      {/* Panchang Start */}
      <div
        className="section section-padding bg-cover secondary-overlay bg-center bg-norepeat"
        style={{ backgroundImage: "url(assets/img/bg2.jpg)" }}
      >
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title text-white">Title Here</h2>
            <p className="subtitle text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vitae odio sem. Vivamus tristique vitae eros congue tempus.
              Quisque gravida convallis dapibus. Donec sed tincidunt nisi.
              Phasellus id imperdiet risus. Ut nulla erat, tincidunt vitae ipsum
              eu, euismod laoreet enim.{" "}
            </p>
            {/* <a href="" className="sigma_btn-custom-1">
        View Detailed Panchang
      </a> */}
          </div>

          <div className="row g-3">
            {homeContent
              ? homeContent?.content?.home_setting_features?.map(
                  (categoryData, data) => {
                    return (
                      <div
                        className="col-lg-6 col-md-6"
                        key={categoryData?.data_id}
                      >
                        <div                         
                          className="sigma_service style-1"
                        >
                          <div className="sigma_service-thumb">
                            <img src={categoryData?.features_images} />
                          </div>
                          <div className="sigma_service-body">
                            <h5> {categoryData?.features_title}</h5>
                            <p>{categoryData?.features_content}</p>
                          </div>
                        </div>
                      </div>
                    )
                  }
                )
              : null}
          </div>
        </div>
      </div>

      {/* volunteers End */}
      <div
        className="section section-lg bg-cover bg-norepeat bg-center"
        style={{ backgroundImage: `url(${homeContent?.content?.video_banner})` }}
      >
        <div className="section d-flex align-items-center justify-content-center">
          <a
            href={`https://www.youtube.com/watch?v=${homeContent?.content?.video_id}`}
            className="sigma_video-popup popup-youtube"
            target="blank"
          >
            <i className="fas fa-play" />
          </a>
        </div>
      </div>
      <div className="section section-padding pt-0 light-bg">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title">Title Here</h2>
            <p className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vitae odio sem. Vivamus tristique vitae eros congue tempus.
              Quisque gravida convallis dapibus. Donec sed tincidunt nisi.
              Phasellus id imperdiet risus. Ut nulla erat, tincidunt vitae ipsum
              eu, euismod laoreet enim.{" "}
            </p>
          </div>
          <div className="row g-3">
            {props?.categories
              ? props?.categories?.map((categoryData, ind) => {
                  const imageUrl = `${categoryData.lib_image_location}${categoryData.lib_image}`;
                  return (
                    <div
                      className="col-lg-3 col-md-6"
                      key={categoryData?.data_id}
                    >
                      <Link
                        href={`/libraries/${categoryData?.slug}`}
                        className="sigma_service style-1"
                      >
                        <div className="sigma_service-thumb">
                          <img src={imageUrl} alt={categoryData?.title} />
                        </div>
                        <div className="sigma_service-body">
                          <h5>{categoryData?.title}</h5>
                          <p>{categoryData?.meta_description}</p>
                        </div>
                      </Link>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
      <div
        className="section section-padding bg-cover secondary-overlay bg-center bg-norepeat"
        style={{ backgroundImage: "url(./../assets/img/bg2.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src="./../assets/img/about3.jpg"
                className="w-100"
                alt="about"
              />
            </div>
            <div className="col-lg-6">
              <div className="me-lg-30">
                <div className="section-title section-title-2 text-start">
                  <p className="subtitle">FAQ</p>
                  <h4 className="title text-white">
                    Get Every Answer From Over Here
                  </h4>
                  <p className="text-white">
                    {" "}
                    People ask questions related to Hinduism time without
                    restricting creative freedom{" "}
                  </p>
                </div>
                <div className="accordion with-gap" id="generalFAQExample">
                  {faqData?.length
                    ? faqData?.map((item) => (
                        <div className="card" key={item?.id}>
                          <div
                            className="card-header"
                            data-bs-toggle="collapse"
                            role="button"
                            data-bs-target="#generalOne"
                            aria-expanded={
                              isOpen === item?.id ? "true" : "false"
                            }
                            aria-controls="generalOne"
                            onClick={() => handleClickFaq(item?.id)}
                          >
                            {item?.title}
                          </div>
                          <div
                            id="generalOne"
                            className={`collapse ${
                              isOpen === item?.id ? "show" : ""
                            }`}
                            data-bs-parent="#generalFAQExample"
                          >
                            <div className="card-body">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item?.content,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Start */}
      <HelpCenter />
      <ContactForm />
      {/* Form End */}
      {/* Testimonials Start */}

      {/* testimonial updated slider today */}
      <section className="section pt-0">
        <div
          className="container testimonial-section bg-contain bg-norepeat bg-center"
          style={{
            backgroundImage: "url(./../assets/img/textures/map-2.png)",
          }}
        >
          <div className="section-title text-center">
            <p className="subtitle">Testimonials</p>
            <h4 className="title">What Our Congregation Say</h4>
          </div>
          <div className="sigma_testimonial style-2">
            <div className="sigma_testimonial-slider">
              <Slider {...test_settings}>
                {getHomePageDetails?.testimonial?.map((testimonial, ind) => (
                  <div className="sigma_testimonial-inner" key={ind}>
                    <div className="sigma_service-thumb">
                      <img
                        className="testimonial-user-img"
                        src={testimonial?.test_image}
                        alt={testimonial?.test_title}
                      />
                    </div>
                    <div>
                      <div className="sigma_testimonial-body">
                        <div className="sigma_rating-wrapper">
                          <div className="sigma_rating">
                            <i className="fas fa-star active" />
                            <i className="fas fa-star active" />
                            <i className="fas fa-star active" />
                            <i className="fas fa-star active" />
                            <i className="far fa-star active" />
                          </div>
                        </div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: testimonial?.test_description,
                          }}
                        />
                      </div>
                      <div className="sigma_testimonial-footer">
                        <div className="sigma_testimonial-author">
                          <cite>{testimonial?.test_name}</cite>
                          <span>{testimonial?.test_title}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials End */}
      {/* Blog Start */}
      <div
        className="section section-padding primary-overlay bg-cover bg-center"
        style={{ backgroundImage: "url(./../assets/img/bg3.jpg)" }}
      >
        <div className="container">
          <div className="section-title text-center">
            <p className="subtitle">Blog</p>
            <h4 className="title">News Feed</h4>
          </div>
          <div className="row">
            {/* Article Start */}
            {props?.blogData?.map((blog) => {
              return <BlogCard blog={blog} />;
            })}

            {/* Article End */}
          </div>
        </div>
      </div>
      {/* Blog End */}
      {/* Back To Top Start */}
      <div className="sigma_top style-5">
        <i className="far fa-angle-double-up" />
      </div>
    </>
  );
}
