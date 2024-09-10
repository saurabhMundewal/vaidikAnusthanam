import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../lib/axiosInstance";
import Link from "next/link";
import Head from "next/head";
import Loader from "@/components/preloader/Preloader";

const ServicePage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [serviceData, setServiceData] = useState([]);
  const [loading, setLoading] = useState(false); // Loader state

  const fetchService = async (slug) => {
    setLoading(true); // Start loader
    try {
      const response = await axiosInstance.post(`/Setting/ServiceData/${slug}`);
      if (response?.status === 202) {
        setServiceData([]);
      }
      setServiceData(JSON.parse(response?.data?.datas));
    } catch (error) {
      setServiceData([]);
      console.error("Error fetching service data:", error);
    } finally {
      setLoading(false); // Stop loader
    }
  };

  useEffect(() => {
    if (slug) {
      fetchService(slug);
    }
  }, [slug]);

  return (
    <>
      <Head>
        <title>{serviceData[0]?.meta_title}</title>
        <meta name="description" content={serviceData[0]?.meta_description} />
        <meta name="keywords" content={serviceData[0]?.meta_keywords} />
      </Head>

      <div>
        <>
          {/* partial */}
          {/* Loader */}
          {loading ? (
            <Loader /> // Simple loader, can be replaced with a custom one
          ) : (
            <>
              {/* partial:partia/__subheader.html */}
              <div
                className="sigma_subheader dark-overlay dark-overlay-2"
                style={{
                  backgroundImage:
                    "url(https://vaidikanushthanam.in/static/img/subheader.jpg)",
                }}
              >
                <div className="container">
                  <div className="sigma_subheader-inner">
                    <div className="sigma_subheader-text">
                      <h1>Our Services</h1>
                    </div>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a className="btn-link" href="/">
                            Home
                          </a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          {slug?.replace(/-/g, " ").toUpperCase()}
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>

              {/* About Start */}
              <section className="section">
                <div className="container">
                  <div className="row">
                    <div className="row rev_row">
                      <div className="col-md-7">
                        <div className="me-lg-30">
                          <div className="section-title mb-0 text-start">
                            <p className="subtitle">
                              {serviceData[0]?.data_heading}
                            </p>
                            <h4 className="title">
                              {serviceData[0]?.data_title}
                            </h4>
                          </div>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: serviceData[0]?.data_content,
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="login_slides">
                          <img
                            src={serviceData[0]?.image1}
                            className="topindex hand_img_small"
                            title={serviceData[0]?.data_title}
                          />
                          <img
                            src={serviceData[0]?.image2}
                            className="abs"
                            id="abs"
                            title={serviceData[0]?.data_title}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
        </>
      </div>
    </>
  );
};

export default ServicePage;
