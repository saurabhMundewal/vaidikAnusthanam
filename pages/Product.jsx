import React from 'react'
import Link from 'next/link'
export default function Product() {
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
              <a className="btn-link" href="/">
                Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Product Details
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
              <img src="./../assets/img/puja/style-3/2.jpg" alt="product" />
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-6">
          <div className="sigma_product-single-content">
            <h1 className="entry-title">
              {" "}
              108 Ashtalakshmi Kuber Mantra Jaap and Mahalakshm...{" "}
            </h1>
            {/* <div class="sigma_icon-block icon-block-3">
            <div class="icon-wrapper">
              <i class="flaticon-temple" style="margin-bottom: 5px;"></i><i class="far fa-calendar-check"></i>
            </div>
            <div class="sigma_icon-block-content">
              <p style="margin-bottom: 5px;">Shri Gauri-Kedareshwar Temple, Kashi</p>
              <p>28 January, Sunday, Magh Krishna Tritiya</p>
            </div>
          </div>
          <div  class="timer-puja">
            <p>Puja Starts in :</p>

          </div> */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vitae odio sem. Vivamus tristique vitae eros congue tempus.
              Quisque gravida convallis dapibus. Donec sed tincidunt nisi.
              Phasellus id imperdiet risus. Ut nulla erat, tincidunt vitae ipsum
              eu, euismod laoreet enim.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nunc vitae odio sem. Vivamus tristique vitae eros
              congue tempus. Quisque gravida convallis dapibus. Donec sed
              tincidunt nisi. Phasellus id imperdiet risus. Ut nulla erat,
              tincidunt vitae ipsum eu, euismod laoreet enim.
            </p>
            <a href="#packages" className="sigma_btn-custom">
              Select Package
            </a>
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
            <a
              className="nav-link active"
              id="tab-product-desc-tab"
              data-bs-toggle="pill"
              href="#tab-product-desc"
              role="tab"
              aria-controls="tab-product-desc"
              aria-selected="true"
            >
              Description
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="tab-product-info-tab"
              data-bs-toggle="pill"
              href="#tab-product-bene"
              role="tab"
              aria-controls="tab-product-bene"
              aria-selected="false"
            >
              Benefits
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="tab-product-temple-tab"
              data-bs-toggle="pill"
              href="#tab-product-temp"
              role="tab"
              aria-controls="tab-product-temp"
              aria-selected="false"
            >
              Temple Details{" "}
            </a>
          </li>
          <li className="nav-item">
          <div id="packages" className="section pt-0">
          <a
              className="nav-link"
              id="tab-product-pack-tab"
              data-bs-toggle="pill"
              href="#tab-product-pack"
              role="tab"
              aria-controls="tab-product-pack"
              aria-selected="false"
            >
              Packages{" "}
            </a>
          </div>

            {/* <a
              className="nav-link"
              id="tab-product-pack-tab"
              data-bs-toggle="pill"
              href="#tab-product-pack"
              role="tab"
              aria-controls="tab-product-pack"
              aria-selected="false"
            >
              Packages{" "}
            </a> */}
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="tab-product-reviews-tab"
              data-bs-toggle="pill"
              href="#tab-product-reviews"
              role="tab"
              aria-controls="tab-product-reviews"
              aria-selected="false"
            >
              Reviews{" "}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="tab-product-faqs-tab"
              data-bs-toggle="pill"
              href="#tab-product-faqs"
              role="tab"
              aria-controls="tab-product-faqs"
              aria-selected="false"
            >
              FAQs{" "}
            </a>
          </li>
        </ul>
        <div className="tab-content" id="bordered-tabContent">
          <div
            className="tab-pane fade show active"
            id="tab-product-desc"
            role="tabpanel"
            aria-labelledby="tab-product-desc-tab"
          >
            <h2>Description</h2>
            <p>
              {" "}
              All Religious Books are available in Temple Stores. Our mission is
              to share the Good of Hinduism, Loving, Faith and Serving., non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica
            </p>
            <p>
              {" "}
              All Religious Books are available in Temple Stores. Our mission is
              to share the Good of Hinduism, Loving, Faith and Serving., non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica
            </p>
          </div>
          <div
            className="tab-pane fade"
            id="tab-product-bene"
            role="tabpanel"
            aria-labelledby="tab-product-info-tab"
          >
            <h2>Additional Information</h2>
            <div className="container my-3">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="d-flex align-items-start p-3 border bg-light">
                    <div className="flex-shrink-0">
                      <div
                        className="bg-warning rounded-circle d-flex justify-content-center align-items-center"
                        style={{ width: 60, height: 60 }}
                      >
                        {/* Dummy icon */}
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h2 className="p-101">Protection from Untimely Death</h2>
                      <p>
                        The term "Mahamrityunjay" translates to triumph over
                        death. It is believed that the Mahamrityunjay Mantra
                        helps conquer death. Therefore, those who perform this
                        puja, receive protection from premature death.
                      </p>
                      <a href="#" className="read-more">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="d-flex align-items-start p-3 border bg-light">
                    <div className="flex-shrink-0">
                      <div
                        className="bg-success rounded-circle d-flex justify-content-center align-items-center"
                        style={{ width: 60, height: 60 }}
                      >
                        {/* Dummy icon */}
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h2 className="p-101">
                        Protection from Accidents and Longevity
                      </h2>
                      <p>
                        The term "Mahamrityunjay" translates to triumph over
                        death. It is believed that the Mahamrityunjay Mantra
                        helps conquer death. Therefore, those who perform this
                        puja, receive protection from premature death.
                      </p>
                      <a href="#" className="read-more">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="d-flex align-items-start p-3 border bg-light">
                    <div className="flex-shrink-0">
                      <div
                        className="bg-primary rounded-circle d-flex justify-content-center align-items-center"
                        style={{ width: 60, height: 60 }}
                      >
                        {/* Dummy icon */}
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h2 className="p-101">Health and Healing</h2>
                      <p>
                        The term "Mahamrityunjay" translates to triumph over
                        death. It is believed that the Mahamrityunjay Mantra
                        helps conquer death. Therefore, those who perform this
                        puja, receive protection from premature death.
                      </p>
                      <a href="#" className="read-more">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="d-flex align-items-start p-3 border bg-light">
                    <div className="flex-shrink-0">
                      <div
                        className="bg-primary rounded-circle d-flex justify-content-center align-items-center"
                        style={{ width: 60, height: 60 }}
                      >
                        {/* Dummy icon */}
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h2 className="p-101">Health and Healing</h2>
                      <p>
                        The term "Mahamrityunjay" translates to triumph over
                        death. It is believed that the Mahamrityunjay Mantra
                        helps conquer death. Therefore, those who perform this
                        puja, receive protection from premature death.
                      </p>
                      <a href="#" className="read-more">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="d-flex align-items-start p-3 border bg-light">
                    <div className="flex-shrink-0">
                      <div
                        className="bg-primary rounded-circle d-flex justify-content-center align-items-center"
                        style={{ width: 60, height: 60 }}
                      >
                        {/* Dummy icon */}
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h2 className="p-101">Health and Healing</h2>
                      <p>
                        The term "Mahamrityunjay" translates to triumph over
                        death. It is believed that the Mahamrityunjay Mantra
                        helps conquer death. Therefore, those who perform this
                        puja, receive protection from premature death.
                      </p>
                      <a href="#" className="read-more">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade show"
            id="tab-product-temp"
            role="tabpanel"
            aria-labelledby="tab-product-temple-tab"
          >
            <div className="row">
              <h2>Shri Shaktipeeth Mahalakshmi Ambabai Temple,Kolhapur</h2>
              <div className="col-md-6">
                <img src="./../assets/img/puja/style-3/2.jpg" />
              </div>
              <div className="col-md-6">
                <p>
                  {" "}
                  All Religious Books are available in Temple Stores. Our
                  mission is to share the Good of Hinduism, Loving, Faith and
                  Serving., non cupidatat skateboard dolor brunch. Food truck
                  quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                  sunt aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica
                </p>
                <p>
                  {" "}
                  All Religious Books are available in Temple Stores. Our
                  mission is to share the Good of Hinduism, Loving, Faith and
                  Serving., non cupidatat skateboard dolor brunch. Food truck
                  quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                  sunt aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica
                </p>
                <p>
                  {" "}
                  All Religious Books are available in Temple Stores. Our
                  mission is to share the Good of Hinduism, Loving, Faith and
                  Serving., non cupidatat skateboard dolor brunch. Food truck
                  quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                  sunt aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica
                </p>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade show"
            id="tab-product-pack"
            role="tabpanel"
            aria-labelledby="tab-product-temple-tab"
          >
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
                  <Link href="/checkout/Checkout"><button className="plan-choose"> Choose </button></Link>
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
                  <Link href="/checkout/Checkout"><button className="plan-choose"> Choose </button></Link>
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
                  <Link href="/checkout/Checkout"><button className="plan-choose"> Choose </button></Link>
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
                  <Link href="/checkout/Checkout"><button className="plan-choose"> Choose </button></Link>
                  {/* <button className="plan-choose"> Choose </button> */}
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="tab-product-reviews"
            role="tabpanel"
            aria-labelledby="tab-product-reviews-tab"
          >
            <h2>What Devotee Say About Company Name</h2>
            {/* Reviews Start */}
            <div className="comments-list">
              <ul>
                <li className="comment-item">
                  <img src="./../assets/img/volunteers/1.jpg" alt="comment author" />
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
                      Leverage agile frameworks to provide a robust synopsis for
                      high level overviews. Iterative approaches to corporate
                      strategy foster collaborative thinking to further the
                      overall value proposition.
                    </p>
                    <span>
                      <i className="far fa-clock" /> January 13 2024
                    </span>
                  </div>
                </li>
                <li className="comment-item">
                  <img src="./../assets/img/volunteers/2.jpg" alt="comment author" />
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
                      Leverage agile frameworks to provide a robust synopsis for
                      high level overviews. Iterative approaches
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
          <div
            className="tab-pane fade show"
            id="tab-product-faqs"
            role="tabpanel"
            aria-labelledby="tab-product-temple-faqs"
          >
            <div className="row">
              <h3>Frequently Asked Questions</h3>
              <div className="col-lg-6">
                <div className="accordion with-gap" id="generalFAQExample">
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
                        Temple is a place where Hindu worship our Bhagwan Ram,
                        Shiva, Vishnu, Krishna etc. Proin eget tortor risus.
                        Vivamus magna justo, .People ask questions related to
                        Hinduism
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
                        Temple is a place where Hindu worship our Bhagwan Ram,
                        Shiva, Vishnu, Krishna etc. Proin eget tortor risus.
                        Vivamus magna justo, .People ask questions related to
                        Hinduism
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
                        Temple is a place where Hindu worship our Bhagwan Ram,
                        Shiva, Vishnu, Krishna etc. Proin eget tortor risus.
                        Vivamus magna justo, .People ask questions related to
                        Hinduism
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
                        Temple is a place where Hindu worship our Bhagwan Ram,
                        Shiva, Vishnu, Krishna etc. Proin eget tortor risus.
                        Vivamus magna justo, .People ask questions related to
                        Hinduism
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="accordion with-gap" id="generalFAQExample2">
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
                        Temple is a place where Hindu worship our Bhagwan Ram,
                        Shiva, Vishnu, Krishna etc. Proin eget tortor risus.
                        Vivamus magna justo, .People ask questions related to
                        Hinduism
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
                        Temple is a place where Hindu worship our Bhagwan Ram,
                        Shiva, Vishnu, Krishna etc. Proin eget tortor risus.
                        Vivamus magna justo, .People ask questions related to
                        Hinduism
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
                        Temple is a place where Hindu worship our Bhagwan Ram,
                        Shiva, Vishnu, Krishna etc. Proin eget tortor risus.
                        Vivamus magna justo, .People ask questions related to
                        Hinduism
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
                        Temple is a place where Hindu worship our Bhagwan Ram,
                        Shiva, Vishnu, Krishna etc. Proin eget tortor risus.
                        Vivamus magna justo, .People ask questions related to
                        Hinduism
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section section-padding">
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
          </div> */}
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
          </div> */}
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
          </div> */}
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
          </div> */}
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
          </div> */}
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
          </div> */}
                <a href="#" className="sigma_btn-custom">
                  Participate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>


    </div>
  )
}
