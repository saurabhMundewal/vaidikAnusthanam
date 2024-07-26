import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../lib/axiosInstance";
import Link from "next/link";

export default function PujaDetailpage() {
  const router = useRouter();
  const { slug } = router.query;
  const [pujaData, setPujaData] = useState([]);
  const [isOpen, setIsOpen] = useState(1);

  const fetchPuja = async (slug) => {
    try {
      const response = await axiosInstance.post(`/Pujas/pujaDetails/${slug}`);
      if (response?.status === 202) {
        setPujaData([]);
      }
      setPujaData(JSON.parse(response?.data?.datas));
    } catch (error) {
      setPujaData([]);
      console.error("Error fetching puja data:", error);
    }
  };
  const handleClickTab = (val) => {
    setIsOpen(val);
  };

  useEffect(() => {
    if (slug) {
      fetchPuja(slug);
    }
  }, [slug]);

  return (
    <div>
      <>
        {/* partial */}
        {/* partial:partia/__subheader.html */}
        <div
          className="sigma_subheader dark-overlay dark-overlay-2"
          style={{ backgroundImage: "url(./../assets/img/subheader.jpg)" }}
        >
          <div className="container">
            <div className="sigma_subheader-inner">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="btn-link" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {slug?.replace(/-/g, " ").toUpperCase()}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        {/* partial */}
        {/* Product Content Start */}
        <div className="section section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-6">
                <div className="sigma_product-single-thumb">
                  <div className="slider">
                    <img
                      src={`${pujaData?.puja_image_link}${pujaData?.puja_image}`}
                      alt="product"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="sigma_product-single-content">
                  <h1 className="entry-title"> {pujaData?.puja_title}</h1>
                  <div class="sigma_icon-block icon-block-3">
                    <div class="icon-wrapper">
                      {/* <i class="flaticon-temple mb-2"></i> */}
                      <i class="far fa-calendar-check"></i>
                    </div>
                    <div class="sigma_icon-block-content">
                      {/* {pujaData?.puja_temple ===1 ?
              (<p className='mb-2'>Shri Gauri-Kedareshwar Temple, Kashi</p>):<p>NA</p>} */}
                      <p>{pujaData?.puja_create_date}</p>
                    </div>
                  </div>
                  <div class="timer-puja">
                    <p>Puja Starts in : {pujaData?.puja_start}</p>
                    <p>Puja End in : {pujaData?.puja_end}</p>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: pujaData?.puja_description,
                    }}
                  />

                  <Link href="#packages" className="sigma_btn-custom">
                    Select Package
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Product Content End */}
        {/* Additional Information Start */}
        <div className="section pt-0">
          <div className="container">
            <div className="sigma_product-additional-info">
              <ul className="nav nav-tabs" id="bordered-tab" role="tablist">
                <li className="nav-item">
                  <button
                    className={isOpen === 1 ? "nav-link active" : "nav-link"}
                    onClick={() => handleClickTab(1)}
                    aria-selected={isOpen === 1 ? "true" : "false"}
                  >
                    Description
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={isOpen === 2 ? "nav-link active" : "nav-link"}
                    onClick={() => handleClickTab(2)}
                    aria-selected={isOpen === 2 ? "true" : "false"}
                  >
                    Benefits
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={isOpen === 3 ? "nav-link active" : "nav-link"}
                    onClick={() => handleClickTab(3)}
                    aria-selected={isOpen === 3 ? "true" : "false"}
                  >
                    Temple Details{" "}
                  </button>
                </li>
                <li className="nav-item">
                  <div id="packages" className="section pt-0">
                    <button
                      className={isOpen === 4 ? "nav-link active" : "nav-link"}
                      onClick={() => handleClickTab(4)}
                      aria-selected={isOpen === 4 ? "true" : "false"}
                    >
                      Packages{" "}
                    </button>
                  </div>
                </li>
                <li className="nav-item">
                  <button
                    className={isOpen === 5 ? "nav-link active" : "nav-link"}
                    onClick={() => handleClickTab(5)}
                    aria-selected={isOpen === 5 ? "true" : "false"}
                  >
                    Reviews{" "}
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={isOpen === 6 ? "nav-link active" : "nav-link"}
                    onClick={() => handleClickTab(6)}
                    aria-selected={isOpen === 6 ? "true" : "false"}
                  >
                    FAQs{" "}
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="bordered-tabContent">
                {isOpen === 1 ? (
                  <>
                    <h2>Description</h2>
                    <p> {pujaData?.puja_short_description}</p>
                  </>
                ) : isOpen === 2 ? (
                  <>
                    <h2>Pooja Benefits</h2>
                    <p> {pujaData?.puja_benefits}</p>
                  </>
                ) : isOpen === 3 ? (
                  <>
                    <h2>Temple Detail</h2>
                    <p> NA</p>
                  </>
                ) : isOpen === 4 ? (
                  <>
                    <div>
                      <div className="row">
                        <h2>Select Puja Package</h2>
                        <div className="plan-options">
                          <div className="plan">
                            <div className="plan-header">
                              <h3 className="plan-heading">Enterprise</h3>
                              {/*     <button class="plan-save"> Save $40</button> */}
                            </div>
                            <ul className="plan-feature">
                              <li>Upload Video with HD Resolution</li>
                              <li>Attachment &amp; Post Scheduling</li>
                              <li>Set your rates</li>
                              <li>Exclusive Deals</li>
                              <li>Advanced Statistics</li>
                            </ul>
                            <p>
                              $<span className="plan-amount">123</span>{" "}
                              <span className="plan-duration">/month</span>
                            </p>
                            <Link href="/checkout/Checkout">
                              <button className="plan-choose"> Choose </button>
                            </Link>
                            {/* <button className="plan-choose"> Choose </button> */}
                          </div>
                          <div className="plan">
                            <div className="plan-header">
                              <h3 className="plan-heading">Enterprise</h3>
                              {/*     <button class="plan-save"> Save $40</button> */}
                            </div>
                            <ul className="plan-feature">
                              <li>Upload Video with HD Resolution</li>
                              <li>Attachment &amp; Post Scheduling</li>
                              <li>Set your rates</li>
                              <li>Exclusive Deals</li>
                              <li>Advanced Statistics</li>
                            </ul>
                            <p>
                              $<span className="plan-amount">123</span>{" "}
                              <span className="plan-duration">/month</span>
                            </p>
                            <Link href="/checkout/Checkout">
                              <button className="plan-choose"> Choose </button>
                            </Link>
                            {/* <button className="plan-choose"> Choose </button> */}
                          </div>
                          <div className="plan">
                            <div className="plan-header">
                              <h3 className="plan-heading">Enterprise</h3>
                              {/*     <button class="plan-save"> Save $40</button> */}
                            </div>
                            <ul className="plan-feature">
                              <li>Upload Video with HD Resolution</li>
                              <li>Attachment &amp; Post Scheduling</li>
                              <li>Set your rates</li>
                              <li>Exclusive Deals</li>
                              <li>Advanced Statistics</li>
                            </ul>
                            <p>
                              $<span className="plan-amount">123</span>{" "}
                              <span className="plan-duration">/month</span>
                            </p>
                            <Link href="/checkout/Checkout">
                              <button className="plan-choose"> Choose </button>
                            </Link>
                            {/* <button className="plan-choose"> Choose </button> */}
                          </div>
                          <div className="plan">
                            <div className="plan-header">
                              <h3 className="plan-heading">Enterprise</h3>
                              {/*     <button class="plan-save"> Save $40</button> */}
                            </div>
                            <ul className="plan-feature">
                              <li>Upload Video with HD Resolution</li>
                              <li>Attachment &amp; Post Scheduling</li>
                              <li>Set your rates</li>
                              <li>Exclusive Deals</li>
                              <li>Advanced Statistics</li>
                            </ul>
                            <p>
                              $<span className="plan-amount">123</span>{" "}
                              <span className="plan-duration">/month</span>
                            </p>
                            <Link href="/checkout/Checkout">
                              <button className="plan-choose"> Choose </button>
                            </Link>
                            {/* <button className="plan-choose"> Choose </button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : isOpen === 5 ? (
                  <>
                    <div>
                      <h2>What Devotee Say About Company Name</h2>
                      {/* Reviews Start */}
                      <div className="comments-list">
                        <ul>
                          <li className="comment-item">
                            <img
                              src="./../assets/img/volunteers/1.jpg"
                              alt="comment author"
                            />
                            <div className="comment-body">
                              <h5>Robert John</h5>
                              <div className="sigma_rating">
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star" />
                              </div>
                              <p>
                                Leverage agile frameworks to provide a robust
                                synopsis for high level overviews. Iterative
                                approaches to corporate strategy foster
                                collaborative thinking to further the overall
                                value proposition.
                              </p>
                              <span>
                                <i className="far fa-clock" /> January 13 2024
                              </span>
                            </div>
                          </li>
                          <li className="comment-item">
                            <img
                              src="./../assets/img/volunteers/2.jpg"
                              alt="comment author"
                            />
                            <div className="comment-body">
                              <h5>Christine Hill</h5>
                              <div className="sigma_rating">
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                                <i className="fa fa-star active" />
                              </div>
                              <p>
                                Leverage agile frameworks to provide a robust
                                synopsis for high level overviews. Iterative
                                approaches
                              </p>
                              <span>
                                <i className="far fa-clock" /> January 13 2024
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* Reviews End */}
                    </div>
                  </>
                ) : isOpen === 6 ? (
                  <>
                    <div className="row">
                      <h3>Frequently Asked Questions</h3>
                      <div className="col-lg-6">
                        <div
                          className="accordion with-gap"
                          id="generalFAQExample"
                        >
                          <div className="card">
                            <div
                              className="card-header"
                              data-bs-toggle="collapse"
                              role="button"
                              data-bs-target="#generalOne"
                              aria-expanded="true"
                              aria-controls="generalOne"
                            >
                              What is a Temple?
                            </div>
                            <div
                              id="generalOne"
                              className="collapse show"
                              data-bs-parent="#generalFAQExample"
                            >
                              <div className="card-body">
                                Temple is a place where Hindu worship our
                                Bhagwan Ram, Shiva, Vishnu, Krishna etc. Proin
                                eget tortor risus. Vivamus magna justo, .People
                                ask questions related to Hinduism
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div
                              className="card-header"
                              data-bs-toggle="collapse"
                              role="button"
                              data-bs-target="#generalTwo"
                              aria-expanded="false"
                              aria-controls="generalTwo"
                            >
                              Getting Started with an Temple
                            </div>
                            <div
                              id="generalTwo"
                              className="collapse"
                              data-bs-parent="#generalFAQExample"
                            >
                              <div className="card-body">
                                Temple is a place where Hindu worship our
                                Bhagwan Ram, Shiva, Vishnu, Krishna etc. Proin
                                eget tortor risus. Vivamus magna justo, .People
                                ask questions related to Hinduism
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div
                              className="card-header"
                              data-bs-toggle="collapse"
                              role="button"
                              data-bs-target="#generalThree"
                              aria-expanded="false"
                              aria-controls="generalThree"
                            >
                              Do i have the latest version?
                            </div>
                            <div
                              id="generalThree"
                              className="collapse"
                              data-bs-parent="#generalFAQExample"
                            >
                              <div className="card-body">
                                Temple is a place where Hindu worship our
                                Bhagwan Ram, Shiva, Vishnu, Krishna etc. Proin
                                eget tortor risus. Vivamus magna justo, .People
                                ask questions related to Hinduism
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div
                              className="card-header"
                              data-bs-toggle="collapse"
                              role="button"
                              data-bs-target="#generalSeven"
                              aria-expanded="false"
                              aria-controls="generalSeven"
                            >
                              How can I change header
                            </div>
                            <div
                              id="generalSeven"
                              className="collapse"
                              data-bs-parent="#generalFAQExample"
                            >
                              <div className="card-body">
                                Temple is a place where Hindu worship our
                                Bhagwan Ram, Shiva, Vishnu, Krishna etc. Proin
                                eget tortor risus. Vivamus magna justo, .People
                                ask questions related to Hinduism
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div
                          className="accordion with-gap"
                          id="generalFAQExample2"
                        >
                          <div className="card">
                            <div
                              className="card-header"
                              data-bs-toggle="collapse"
                              role="button"
                              data-bs-target="#generalFour"
                              aria-expanded="true"
                              aria-controls="generalFour"
                            >
                              How many times can I use a Temple?
                            </div>
                            <div
                              id="generalFour"
                              className="collapse show"
                              data-bs-parent="#generalFAQExample2"
                            >
                              <div className="card-body">
                                Temple is a place where Hindu worship our
                                Bhagwan Ram, Shiva, Vishnu, Krishna etc. Proin
                                eget tortor risus. Vivamus magna justo, .People
                                ask questions related to Hinduism
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div
                              className="card-header"
                              data-bs-toggle="collapse"
                              role="button"
                              data-bs-target="#generalFive"
                              aria-expanded="false"
                              aria-controls="generalFive"
                            >
                              How to migrate my website?
                            </div>
                            <div
                              id="generalFive"
                              className="collapse"
                              data-bs-parent="#generalFAQExample2"
                            >
                              <div className="card-body">
                                Temple is a place where Hindu worship our
                                Bhagwan Ram, Shiva, Vishnu, Krishna etc. Proin
                                eget tortor risus. Vivamus magna justo, .People
                                ask questions related to Hinduism
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div
                              className="card-header"
                              data-bs-toggle="collapse"
                              role="button"
                              data-bs-target="#generalSix"
                              aria-expanded="false"
                              aria-controls="generalSix"
                            >
                              How to migrate my website?
                            </div>
                            <div
                              id="generalSix"
                              className="collapse"
                              data-bs-parent="#generalFAQExample2"
                            >
                              <div className="card-body">
                                Temple is a place where Hindu worship our
                                Bhagwan Ram, Shiva, Vishnu, Krishna etc. Proin
                                eget tortor risus. Vivamus magna justo, .People
                                ask questions related to Hinduism
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div
                              className="card-header"
                              data-bs-toggle="collapse"
                              role="button"
                              data-bs-target="#generalEight"
                              aria-expanded="false"
                              aria-controls="generalEight"
                            >
                              Changing the site footer
                            </div>
                            <div
                              id="generalEight"
                              className="collapse"
                              data-bs-parent="#generalFAQExample2"
                            >
                              <div className="card-body">
                                Temple is a place where Hindu worship our
                                Bhagwan Ram, Shiva, Vishnu, Krishna etc. Proin
                                eget tortor risus. Vivamus magna justo, .People
                                ask questions related to Hinduism
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
          {/* <div className="section section-padding">
      <div className="container">
        <div>
          <h2 className="title">Related Poojas</h2>
          <p className="subtitle" style={{ fontSize: 15, fontWeight: 500 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
            odio sem. Vivamus tristique vitae eros congue tempus. Quisque
            gravida convallis dapibus. Donec sed tincidunt nisi. Phasellus id
            imperdiet risus. Ut nulla erat, tincidunt vitae ipsum eu, euismod
            laoreet enim.{" "}
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="sigma_service style-2">
              <div className="sigma_service-thumb">
                <img src="./../assets/img/donation/5.jpg" alt="img" />
              </div>
              <div className="sigma_service-body">
                <h3>
                  <a href="product-single.html">Title Here</a>
                </h3>
                {/* <div class="sigma_icon-block icon-block-3">
            <div class="icon-wrapper">
              <i class="flaticon-temple" style="margin-bottom: 5px;"></i><i class="far fa-calendar-check"></i>
            </div>
            <div class="sigma_icon-block-content">
              <p style="margin-bottom: 5px;">Shri Gauri-Kedareshwar Temple, Kashi</p>
              <p>28 January, Sunday, Magh Krishna Tritiya</p>
            </div>
          </div> 
                <a href="product-single.html" className="sigma_btn-custom">
                  Participate
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="sigma_service style-2">
              <div className="sigma_service-thumb">
                <img src="./../assets/img/donation/5.jpg" alt="img" />
              </div>
              <div className="sigma_service-body">
                <h3>
                  <a href="#">Title Here</a>
                </h3>
                {/* <div class="sigma_icon-block icon-block-3">
            <div class="icon-wrapper">
              <i class="flaticon-temple" style="margin-bottom: 5px;"></i><i class="far fa-calendar-check"></i>
            </div>
            <div class="sigma_icon-block-content">
              <p style="margin-bottom: 5px;">Shri Gauri-Kedareshwar Temple, Kashi</p>
              <p>28 January, Sunday, Magh Krishna Tritiya</p>
            </div>
          </div> *
                <a href="#" className="sigma_btn-custom">
                  Participate
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="sigma_service style-2">
              <div className="sigma_service-thumb">
                <img src="./../assets/img/donation/5.jpg" alt="img" />
              </div>
              <div className="sigma_service-body">
                <h3>
                  <a href="#">Title Here</a>
                </h3>
                {/* <div class="sigma_icon-block icon-block-3">
            <div class="icon-wrapper">
              <i class="flaticon-temple" style="margin-bottom: 5px;"></i><i class="far fa-calendar-check"></i>
            </div>
            <div class="sigma_icon-block-content">
              <p style="margin-bottom: 5px;">Shri Gauri-Kedareshwar Temple, Kashi</p>
              <p>28 January, Sunday, Magh Krishna Tritiya</p>
            </div>
          </div> *
                <a href="#" className="sigma_btn-custom">
                  Participate
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="sigma_service style-2">
              <div className="sigma_service-thumb">
                <img src="./../assets/img/donation/5.jpg" alt="img" />
              </div>
              <div className="sigma_service-body">
                <h3>
                  <a href="#">Title Here</a>
                </h3>
                {/* <div class="sigma_icon-block icon-block-3">
            <div class="icon-wrapper">
              <i class="flaticon-temple" style="margin-bottom: 5px;"></i><i class="far fa-calendar-check"></i>
            </div>
            <div class="sigma_icon-block-content">
              <p style="margin-bottom: 5px;">Shri Gauri-Kedareshwar Temple, Kashi</p>
              <p>28 January, Sunday, Magh Krishna Tritiya</p>
            </div>
          </div> *
                <a href="#" className="sigma_btn-custom">
                  Participate
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="sigma_service style-2">
              <div className="sigma_service-thumb">
                <img src="./../assets/img/donation/5.jpg" alt="img" />
              </div>
              <div className="sigma_service-body">
                <h3>
                  <a href="#">Title Here</a>
                </h3>
                {/* <div class="sigma_icon-block icon-block-3">
            <div class="icon-wrapper">
              <i class="flaticon-temple" style="margin-bottom: 5px;"></i><i class="far fa-calendar-check"></i>
            </div>
            <div class="sigma_icon-block-content">
              <p style="margin-bottom: 5px;">Shri Gauri-Kedareshwar Temple, Kashi</p>
              <p>28 January, Sunday, Magh Krishna Tritiya</p>
            </div>
          </div> *
                <a href="#" className="sigma_btn-custom">
                  Participate
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="sigma_service style-2">
              <div className="sigma_service-thumb">
                <img src="./../assets/img/donation/5.jpg" alt="img" />
              </div>
              <div className="sigma_service-body">
                <h3>
                  <a href="#">Title Here</a>
                </h3>
                {/* <div class="sigma_icon-block icon-block-3">
            <div class="icon-wrapper">
              <i class="flaticon-temple" style="margin-bottom: 5px;"></i><i class="far fa-calendar-check"></i>
            </div>
            <div class="sigma_icon-block-content">
              <p style="margin-bottom: 5px;">Shri Gauri-Kedareshwar Temple, Kashi</p>
              <p>28 January, Sunday, Magh Krishna Tritiya</p>
            </div>
          </div> *
                <a href="#" className="sigma_btn-custom">
                  Participate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
        </div>
      </>
    </div>
  );
}
