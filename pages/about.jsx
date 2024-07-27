import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAboutPageData } from '../features/aboutPageSlice';
import HelpCenter from '@/atoms/helpCenter';
import ContactForm from "../components/contactForm";
import Head from 'next/head';

export default function About() {
  const dispatch = useDispatch();
  const aboutPageData = useSelector((state) => state.aboutPage.data);
  const aboutPageStatus = useSelector((state) => state.aboutPage.status);
  const aboutPageMeta = aboutPageData?.about_meta
  console.log(aboutPageMeta?.description, 'aboutPageData')
  const error = useSelector((state) => state.aboutPage.error);
  const [selectedTab, setSelectedTab] = useState("home-tab");

  useEffect(() => {
    if (aboutPageStatus === 'idle') {
      dispatch(fetchAboutPageData());
    }
  }, [aboutPageStatus, dispatch]);

  const handleChange = (e) => {
    setSelectedTab(e?.target?.id)
  }


  return (
    <>
      <>
      <Head>
        <title>{aboutPageMeta?.meta_title}</title>
        <meta
          name="description"
          content={aboutPageMeta?.description}
        />
        <meta name="keywords" content={aboutPageMeta?.keywords} />
        {/* Add more meta tags as needed */}
      </Head>
        {/* partial */}
        {/* partial:partia/__subheader.html */}
        <div
          className="sigma_subheader dark-overlay dark-overlay-2"
          style={{
            backgroundImage:
              "url(https://vaidikanushthanam.in/static/img/subheader.jpg)"
          }}
        >
          <div className="container">
            <div className="sigma_subheader-inner">
              <div className="sigma_subheader-text">
                <h1>About Us</h1>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a className="btn-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        {/* partial */}
        {/* About Start */}
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={aboutPageData?.about_data?.file1}
                  style={{
                    height: "100%",
                    borderRadius: "1.7rem",
                    paddingBottom: 10
                  }}
                  alt={aboutPageData?.about_data?.title1}
                  title={aboutPageData?.about_data?.title1}
                />
              </div>
              <div className="col-md-6">
                <img
                  className="ms-0"
                  src={aboutPageData?.about_data?.file2}
                  style={{ borderRadius: "1.7rem" }}
                  alt={aboutPageData?.about_data?.title2}
                  title={aboutPageData?.about_data?.title2}
                />
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="me-lg-30" style={{ marginTop: 20 }}>
                  <div className="section-title mb-0 text-start">
                    <p className="subtitle">{aboutPageData?.about_data?.title1}</p>
                    <h2 className="about-title">{aboutPageData?.about_data?.title2}</h2>
                  </div>
                  <div dangerouslySetInnerHTML={{
                    __html: aboutPageData?.about_data?.description,
                  }}
                  />


                  <div className="sigma_icon-block icon-block-3">
                    <div className="icon-wrapper"></div>
                    <div className="sigma_icon-block-content">
                      <h5></h5>
                      <div dangerouslySetInnerHTML={{
                        __html: aboutPageData?.about_data?.description2,
                      }}
                      />
                    </div>
                  </div>
                  <div className="sigma_icon-block icon-block-3">
                    <div className="icon-wrapper"></div>
                    <div className="sigma_icon-block-content">
                      <div dangerouslySetInnerHTML={{
                        __html: aboutPageData?.about_data?.description3,
                      }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About End */}
        {/* History Start */}
        {/* About Start */}
        <section className="section-new light-bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="me-lg-30">
                  <div className="section-title mb-0 text-start">
                    <p className="subtitle">{aboutPageData?.about_tab_aproach?.title1}</p>
                    <h4 className="title">{aboutPageData?.about_tab_aproach?.title2}</h4>
                  </div>
                  <p className=" bg-transparent">
                    {aboutPageData?.about_tab_aproach?.description}
                  </p>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className={`nav-link ${selectedTab === "home-tab" ? 'active' : ''}`}
                        id="home-tab"
                        data-bs-toggle="tab"
                        role="tab"
                        aria-controls="home"
                        onClick={handleChange}
                        aria-selected={`${selectedTab === "home-tab" ? 'true' : 'false'}`}
                      >
                        {aboutPageData?.about_tab_aproach?.tab_title1}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${selectedTab === "profile-tab" ? 'active' : ''}`}
                        id="profile-tab"
                        data-bs-toggle="tab"
                        onClick={handleChange}
                        role="tab"
                        aria-controls="profile"
                        aria-selected={`${selectedTab === "profile-tab" ? 'true' : 'false'}`}
                      >
                        {aboutPageData?.about_tab_aproach?.tab_title2}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${selectedTab === "contact-tab" ? 'active' : ''}`}
                        id="contact-tab"
                        data-bs-toggle="tab"
                        onClick={handleChange}
                        role="tab"
                        aria-controls="contact"
                        aria-selected={`${selectedTab === "contact-tab" ? 'true' : 'false'}`}
                      >
                        {aboutPageData?.about_tab_aproach?.tab_title3}
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className={`tab-pane fade ${selectedTab === "home-tab" ? 'show active' : ''}`}
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: aboutPageData?.about_tab_aproach?.tab_description1,
                        }}
                      />
                    </div>
                    <div
                      className={`tab-pane fade ${selectedTab === "profile-tab" ? 'show active' : ''}`}
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: aboutPageData?.about_tab_aproach?.tab_description2,
                        }}
                      />
                    </div>
                    <div
                      className={`tab-pane fade ${selectedTab === "contact-tab" ? 'show active' : ''}`}
                      id="contact"
                      role="tabpanel"
                      aria-labelledby="contact-tab"
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: aboutPageData?.about_tab_aproach?.tab_description3,
                        }}
                      />

                    </div>
                  </div>
                </div>
              </div>
              {/*<div class="col-lg-6">
              <img src="https://vaidikanushthanam.in/assets/pages/b76bb64171328e74392949f60b5ab9f7.png" title="यतो धर्मः ततो जयः" alt="यतो धर्मः ततो जयः">
            </div>*/}
            </div>
          </div>
        </section>
        {/* About End */}
        {/* Form Start */}
        <HelpCenter />
        <ContactForm />
        {/* <div
          className="section dark-overlay dark-overlay-3 bg-cover bg-center bg-norepeat"
          style={{
            backgroundImage: "url(https://vaidikanushthanam.in/static/img/bg1.jpg)"
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-lg-30">
                <form method="post">
                  <div className="form-row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <i className="far fa-user" />
                        <input
                          type="text"
                          className="form-control transparent"
                          placeholder="First Name"
                          name="fname"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <i className="far fa-user" />
                        <input
                          type="text"
                          className="form-control transparent"
                          placeholder="Last Name"
                          name="lname"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <i className="far fa-pencil" />
                        <input
                          type="text"
                          className="form-control transparent"
                          placeholder="Subject"
                          name="subject"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <i className="far fa-envelope" />
                        <input
                          type="text"
                          className="form-control transparent"
                          placeholder="Email Address"
                          name="email"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control transparent"
                          placeholder="Enter Message"
                          rows={4}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button
                        type="submit"
                        className="sigma_btn-custom d-block w-100"
                        name="button"
                      >
                        {" "}
                        Get a Quote <i className="far fa-arrow-right" />{" "}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="sigma_client">
                      <img
                        src="https://vaidikanushthanam.in/static/img/clients/1.png"
                        alt="client"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="sigma_client">
                      <img
                        src="https://vaidikanushthanam.in/static/img/clients/2.png"
                        alt="client"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="sigma_client">
                      <img
                        src="https://vaidikanushthanam.in/static/img/clients/3.png"
                        alt="client"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="sigma_client">
                      <img
                        src="https://vaidikanushthanam.in/static/img/clients/4.png"
                        alt="client"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="sigma_client">
                      <img
                        src="https://vaidikanushthanam.in/static/img/clients/5.png"
                        alt="client"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="sigma_client">
                      <img
                        src="https://vaidikanushthanam.in/static/img/clients/6.png"
                        alt="client"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </>


    </>
  )
}
