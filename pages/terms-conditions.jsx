import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import axiosInstance from "../lib/axiosInstance";

export default function Blog() {
  const [privacyPolicy, setprivacyPolicy] = useState([]);

  const fetchprivacyPolicy = async (slug) => {
    try {
      const response = await axiosInstance.post(`/Setting/Pages/terms-conditions`);
      if (response?.status === 202) {
        setprivacyPolicy([]);
      } else {
        setprivacyPolicy(JSON.parse(response?.data?.datas));
      }
    } catch (error) {
      setprivacyPolicy([]);
      console.error("Error fetching puja data:", error);
    }
  };

  useEffect(() => {
    fetchprivacyPolicy();
  }, []);

  return (
    <div>
      <>
        <Head>
          <title>
            {privacyPolicy?.page_meta_details?.title || "Privacy Policy"}
          </title>
          <meta
            name="description"
            content={privacyPolicy?.page_meta_details?.meta_description || ""}
          />
          <meta
            name="keywords"
            content={privacyPolicy?.page_meta_details?.meta_keywords || ""}
          />
        </Head>
        {/* partial:partia/__subheader.html */}
        <div
          className="sigma_subheader dark-overlay dark-overlay-2"
          style={{ backgroundImage: "url(./../assets/img/subheader.jpg)" }}
        >
          <div className="container">
            <div className="sigma_subheader-inner">
              <div className="sigma_subheader-text">
                <h1>Terms & Conditions</h1>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="btn-link" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                  Terms & Conditions
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        {/* partial */}
        <div className="section sigma_post-single">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="post-detail-wrapper">
                  <div className="entry-content">
                    <h2 className="entry-title" data-wow-delay="0.3s"></h2>
                    {privacyPolicy?.page_content_data?.map((data) => {
                      return (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: data?.data_content || "",
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
