import { useRouter } from "next/router";
import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Head from "next/head";
import PujaBenifitsCard from "@/atoms/pujaBenifitsCard";
import PujaPackageCard from "@/atoms/pujaPackageCard";
import PujaReviewCard from "@/atoms/pujaReviewCard";
import CommonFaqGrid from "@/atoms/commonFaqGrid";
import {
  fetchSelectedPuja,
  setSelectedPackageId,
} from "../../features/poojaSlice";
import Cookies from "js-cookie";

export default function PujaDetailpage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { slug } = router.query;
  const profile = useSelector((state) => state.user.profile);
  const status = useSelector((state) => state.user.status);
  const pujaData = useSelector((state) => state?.pooja?.selectedPuja);
  const userType = Cookies.get("user_type");
  const userid = Cookies.get("id");
  const [isOpen, setIsOpen] = useState(1);
  const [isOpenFaq, setIsOpenFaq] = useState(1);

  const handleClickFaq = (val) => {
    setIsOpenFaq(val);
  };

  const handleClickTab = (val) => {
    setIsOpen(val);
  };

  function setItemWithExpiration(key, value, minutes) {
    const expirationTime = new Date().getTime() + minutes * 60 * 1000;
    const item = {
      value: value,
      expiration: expirationTime,
    };
    sessionStorage.setItem(key, JSON.stringify(item));
  }

  const handleCheckout = useCallback(
    (package_id, price) => {      
      if (userType === "Priest" && userid !== "") {
        setItemWithExpiration("package_id", package_id, 50);       
        setItemWithExpiration("price", price, 50);       
        router.push("/Checkout");
      } else {
        //router.push("/login/Login");
      }
    },
    [userType, userid, dispatch, router]
  );

  useEffect(() => {
    if (slug) {
      dispatch(fetchSelectedPuja(slug));
    }
  }, [dispatch, slug]);

  const oddFaq =
    pujaData?.puja_faqs?.length &&
    pujaData?.puja_faqs.filter((_, index) => index % 2 !== 0);
  const evenFaq =
    pujaData?.puja_faqs?.length &&
    pujaData?.puja_faqs.filter((_, index) => index % 2 === 0);

  return (
    <div>
      <>
        {/* partial */}
        <Head>
          <title>{pujaData?.puja_metatitle}</title>
          <meta
            name="description"
            content={"pujaData?.puja_meta?.puja_meta_description"}
          />
          <meta name="keywords" content={pujaData?.puja_meta_keywords} />
          {/* Add more meta tags as needed */}
        </Head>
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
                  {/* <div class="timer-puja">
                    <p>Puja Starts in : {pujaData?.puja_start}</p>
                    <p>Puja End in : {pujaData?.puja_end}</p>
                  </div> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: pujaData?.puja_short_description,
                    }}
                  />

                  <a
                    onClick={() => handleClickTab(4)}
                    className="sigma_btn-custom"
                  >
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
                    <h5>Description</h5>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: pujaData?.puja_description,
                      }}
                    />
                  </>
                ) : isOpen === 2 ? (
                  <>
                    <h2>Pooja Benefits</h2>
                    <div class="container my-3">
                      <div class="row">
                        {pujaData?.puja_benefits?.length
                          ? pujaData?.puja_benefits.map((pujaBanifit) => {
                              return (
                                <PujaBenifitsCard pujaBanifit={pujaBanifit} />
                              );
                            })
                          : null}
                      </div>
                    </div>
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
                          {pujaData?.puja_packages?.length &&
                            pujaData?.puja_packages?.map((pujaPackage) => {
                              return (
                                <PujaPackageCard
                                  pujaPackage={pujaPackage}
                                  handleCheckout={handleCheckout}
                                />
                              );
                            })}
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
                          {pujaData?.puja_reviews?.length &&
                            pujaData?.puja_reviews?.map((pujaReview) => {
                              return <PujaReviewCard pujaReview={pujaReview} />;
                            })}
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
                          {evenFaq
                            ? evenFaq?.map((item) => (
                                <CommonFaqGrid
                                  faqId={item?.puja_faqs_id}
                                  content={item?.puja_faqs_descreption}
                                  title={item?.puja_faqs_title}
                                  handleClickFaq={handleClickFaq}
                                  isOpen={isOpenFaq}
                                />
                              ))
                            : null}{" "}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div
                          className="accordion with-gap"
                          id="generalFAQExample2"
                        >
                          {oddFaq
                            ? oddFaq?.map((item) => (
                                <CommonFaqGrid
                                  faqId={item?.puja_faqs_id}
                                  content={item?.puja_faqs_descreption}
                                  title={item?.puja_faqs_title}
                                  handleClickFaq={handleClickFaq}
                                  isOpen={isOpenFaq}
                                />
                              ))
                            : null}
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
