import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axiosInstance from "../lib/axiosInstance"; // Replace with your actual axios instance path

export default function Puja() {
  const router = useRouter();
  const { puja } = router.query;
  const [pujaData, setPujaData] = useState([]);

  const fetchPuja = async (puja) => {
    try {
      const response = await axiosInstance.post(`/Pujas/pujaList/${puja}`);
      if (response?.status === 202) {
        setPujaData([]);
      }
      setPujaData(JSON.parse(response?.data?.datas));
    } catch (error) {
      setPujaData([]);
      console.error("Error fetching puja data:", error);
    }
  };

  useEffect(() => {
    if (puja) {
      fetchPuja(puja);
    }
  }, [puja]);

  return (
    <div>
      <>
        {/* partial */}
        <div
          className="sigma_subheader dark-overlay dark-overlay-2"
          style={{ backgroundImage: "url(./../assets/img/subheader.jpg)" }}
        >
          <div className="container">
            <div className="sigma_subheader-inner">
              <div className="sigma_subheader-text">
                <h1>
                  Perform your puja as per Vedic rituals at Hindu pilgrimages
                  and famous temples in India with Sri Mandir
                </h1>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a className="btn-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Pooja
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        {/* partial */}
        <div className="section section-padding">
          <div className="container">
            <div>
              <h2 className="title">Title Here</h2>
              <p className="subtitle" style={{ fontSize: 15, fontWeight: 500 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vitae odio sem. Vivamus tristique vitae eros congue tempus.
                Quisque gravida convallis dapibus. Donec sed tincidunt nisi.
                Phasellus id imperdiet risus. Ut nulla erat, tincidunt vitae
                ipsum eu, euismod laoreet enim.
              </p>
            </div>
            <div className="row row g-3">
              {pujaData?.puja_data?.length
                ? pujaData?.puja_data?.map((puja, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                      <div className="sigma_service style-2">
                        <div className="sigma_service-thumb">
                          <img
                            src={`${puja.puja_image_link}${puja?.puja_image}`}
                            alt="img"
                          />
                        </div>
                        <div className="sigma_service-body">
                          <h3>
                            <a href="product-single.html">{puja.puja_title}</a>
                          </h3>
                          <Link
                            className="sigma_btn-custom"
                            href="/product/Product"
                          >
                            Participate
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                : "No Record Found"}
            </div>
            <ul className="pagination mb-0">
              <li className="page-item">
                <a className="page-link" href="#">
                  {" "}
                  <i className="far fa-chevron-left" />{" "}
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  2 <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  {" "}
                  <i className="far fa-chevron-right" />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="section section-padding">
          <div className="container">
            <div className="section-title text-center">
              <p className="subtitle">WAYS WE CAN HELP</p>
              <h4 className="title">Angels Ready To Help</h4>
            </div>
            <div className="row align-items-center position-relative">
              <div className="col-md-6">
                <div className="sigma_cta primary-bg">
                  <img
                    className="d-none d-lg-block"
                    src="./../assets/img/cta/1.png"
                    alt="cta"
                  />
                  <div className="sigma_cta-content">
                    <span className="fw-600 custom-secondary">
                      Need Help, Call Our HOTLINE!
                    </span>
                    <h4 className="text-white">+1 212-683-9756</h4>
                  </div>
                </div>
              </div>
              <span className="sigma_cta-sperator d-none d-lg-flex">or</span>
              <div className="col-md-6">
                <div className="sigma_cta primary-bg">
                  <div className="sigma_cta-content">
                    <form method="post">
                      <label className="mb-0 text-white">
                        Temple Newsletter
                      </label>
                      <div className="sigma_search-adv-input">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter email address"
                          name="search"
                          defaultValue=""
                        />
                        <button type="submit" name="button">
                          <i className="fa fa-search" />
                        </button>
                      </div>
                    </form>
                  </div>
                  <img
                    className="d-none d-lg-block"
                    src="./../assets/img/cta/2.png"
                    alt="cta"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
