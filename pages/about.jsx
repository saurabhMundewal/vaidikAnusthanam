import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAboutPageData } from "../features/aboutPageSlice";
import HelpCenter from "@/atoms/helpCenter";
import ContactForm from "../components/contactForm";
import Head from "next/head";
import Loader from "../components/preloader/Preloader";

export default function About() {
  const dispatch = useDispatch();
  const aboutPageData = useSelector((state) => state.aboutPage.data);
  const aboutPageStatus = useSelector((state) => state.aboutPage.status);
  const error = useSelector((state) => state.aboutPage.error);
  const [selectedTab, setSelectedTab] = useState("home-tab");

  useEffect(() => {
    if (aboutPageStatus === "idle") {
      dispatch(fetchAboutPageData());
    }
  }, [aboutPageStatus, dispatch]);

  const handleChange = (e) => {
    setSelectedTab(e?.target?.id);
  };

  // Default to an empty object if aboutPageData is undefined
  const aboutMeta = aboutPageData?.about_meta || {};

  return (
    <>
      <Head>
        <title>{aboutMeta.meta_title || "About Us"}</title>
        <meta name="description" content={aboutMeta.description || ""} />
        <meta name="keywords" content={aboutMeta.keywords || ""} />
      </Head>

      {aboutPageStatus === "loading" ? (
        <Loader />
      ) : error ? (
        <p>Error loading page</p>
      ) : aboutPageData ? (
        <>
          <div
            className="sigma_subheader dark-overlay dark-overlay-2"
            style={{
              backgroundImage: "url(https://vaidikanushthanam.in/static/img/subheader.jpg)",
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
                      <Link className="btn-link" href="/">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      About Us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <section className="section">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src={aboutPageData.about_data?.file1 || ""}
                    style={{
                      height: "100%",
                      borderRadius: "1.7rem",
                      paddingBottom: 10,
                    }}
                    alt={aboutPageData.about_data?.title1 || ""}
                    title={aboutPageData.about_data?.title1 || ""}
                  />
                </div>
                <div className="col-md-6">
                  <img
                    className="ms-0"
                    src={aboutPageData.about_data?.file2 || ""}
                    style={{ borderRadius: "1.7rem" }}
                    alt={aboutPageData.about_data?.title2 || ""}
                    title={aboutPageData.about_data?.title2 || ""}
                  />
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="me-lg-30" style={{ marginTop: 20 }}>
                    <div className="section-title mb-0 text-start">
                      <p className="subtitle">{aboutPageData.about_data?.title1 || ""}</p>
                      <h2 className="about-title">{aboutPageData.about_data?.title2 || ""}</h2>
                    </div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: aboutPageData.about_data?.description || "",
                      }}
                    />
                    <div className="sigma_icon-block icon-block-3">
                      <div className="icon-wrapper"></div>
                      <div className="sigma_icon-block-content">
                        <h5></h5>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: aboutPageData.about_data?.description2 || "",
                          }}
                        />
                      </div>
                    </div>
                    <div className="sigma_icon-block icon-block-3">
                      <div className="icon-wrapper"></div>
                      <div className="sigma_icon-block-content">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: aboutPageData.about_data?.description3 || "",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section-new light-bg">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="me-lg-30">
                    <div className="section-title mb-0 text-start">
                      <p className="subtitle">{aboutPageData.about_tab_aproach?.title1 || ""}</p>
                      <h4 className="title">{aboutPageData.about_tab_aproach?.title2 || ""}</h4>
                    </div>
                    <p className="bg-transparent">{aboutPageData.about_tab_aproach?.description || ""}</p>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item">
                        <a
                          className={`nav-link ${selectedTab === "home-tab" ? "active" : ""}`}
                          id="home-tab"
                          data-bs-toggle="tab"
                          role="tab"
                          aria-controls="home"
                          onClick={handleChange}
                          aria-selected={`${selectedTab === "home-tab" ? "true" : "false"}`}
                        >
                          {aboutPageData.about_tab_aproach?.tab_title1 || ""}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${selectedTab === "profile-tab" ? "active" : ""}`}
                          id="profile-tab"
                          data-bs-toggle="tab"
                          onClick={handleChange}
                          role="tab"
                          aria-controls="profile"
                          aria-selected={`${selectedTab === "profile-tab" ? "true" : "false"}`}
                        >
                          {aboutPageData.about_tab_aproach?.tab_title2 || ""}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${selectedTab === "contact-tab" ? "active" : ""}`}
                          id="contact-tab"
                          data-bs-toggle="tab"
                          onClick={handleChange}
                          role="tab"
                          aria-controls="contact"
                          aria-selected={`${selectedTab === "contact-tab" ? "true" : "false"}`}
                        >
                          {aboutPageData.about_tab_aproach?.tab_title3 || ""}
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className={`tab-pane fade ${selectedTab === "home-tab" ? "show active" : ""}`}
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: aboutPageData.about_tab_aproach?.tab_description1 || "",
                          }}
                        />
                      </div>
                      <div
                        className={`tab-pane fade ${selectedTab === "profile-tab" ? "show active" : ""}`}
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: aboutPageData.about_tab_aproach?.tab_description2 || "",
                          }}
                        />
                      </div>
                      <div
                        className={`tab-pane fade ${selectedTab === "contact-tab" ? "show active" : ""}`}
                        id="contact"
                        role="tabpanel"
                        aria-labelledby="contact-tab"
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: aboutPageData.about_tab_aproach?.tab_description3 || "",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <HelpCenter />
          <ContactForm />
        </>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
}
