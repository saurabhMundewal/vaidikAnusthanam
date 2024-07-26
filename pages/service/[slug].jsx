import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../lib/axiosInstance';
import Link from 'next/link';

const ServicePage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [serviceData, setServiceData] = useState([]);

  const fetchService = async (slug) => {
    try {
      const response = await axiosInstance.post(`/Setting/ServiceData/${slug}`);
      if (response?.status === 202) {
        setServiceData([])
      }
      setServiceData(JSON.parse(response?.data?.datas));
    } catch (error) {
      setServiceData([])
      console.error('Error fetching puja data:', error);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchService(slug);
    }
  }, [slug]);


  return (
    <div>
      <>

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
                <h1>Astrology</h1>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a className="btn-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                  {slug?.replace(/-/g, ' ').toUpperCase()}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        {/* partial */}
        {/* About Start */}
        <section className="section">
          {/* Service Appointment page */}
          <div className="container">
            <div className="row">
              <div className="row rev_row">
                <div className="col-md-7">
                  <div className="me-lg-30">
                    <div className="section-title mb-0 text-start">
                      <p className="subtitle">EDUCATION FOR ALL RURAL CHILDREN</p>
                      <h4 className="title">We are a Hindu that believe in Ram</h4>
                    </div>
                    <p className=" bg-transparent">
                      {" "}
                      We are a Hindu that belives in Lord Rama and Vishnu Deva the
                      followers and We are a Hindu that belives in Lord Rama and
                      Vishnu Deva.We are a Hindu that belives in Lord Rama and Vishnu
                      Deva the followers and We are a Hindu that belives in Lord Rama
                      and Vishnu Deva.We are a Hindu that belives in Lord Rama and
                      Vishnu Deva the followers and We are a Hindu that belives in
                      Lord Rama and Vishnu Deva.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="login_slides">
                    <img
                      src="https://jyotishay.com/frontend/images/hand.webp"
                      className="topindex hand_img_small"
                    />
                    <img
                      src="https://jyotishay.com/frontend/images/hand_bg.webp"
                      className="abs"
                      id="abs"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About End */}
        {/* Form Start */}
        {/* <div
          className="section dark-overlay dark-overlay-3 bg-cover bg-center bg-norepeat"
          style={{
            backgroundImage: "url(https://vaidikanushthanam.in/static/img/bg1.jpg)"
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <h3 className="mt-6 text-white text-center">
                Service Appointment/ Consultation Form
              </h3>
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="container">
                      <form id="contact-form">
                        <div className="row">
                          <div className="form-group col-md-4">
                            <label htmlFor="first-name">First Name:</label>
                            <input
                              type="text"
                              className="form-control"
                              id="first-name"
                              name="first-name"
                              placeholder="First Name"
                              required=""
                            />
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="last-name">Last Name:</label>
                            <input
                              type="text"
                              className="form-control"
                              id="last-name"
                              name="last-name"
                              placeholder="Last Name"
                              required=""
                            />
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="contact-number">Contact Number:</label>
                            <input
                              type="tel"
                              className="form-control"
                              id="contact-number"
                              name="contact-number"
                              placeholder="Contact Number"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-md-4">
                            <label htmlFor="email">Email:</label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              name="email"
                              placeholder="Email"
                              required=""
                            />
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="dob">Date of Birth:</label>
                            <input
                              type="date"
                              className="form-control"
                              id="dob"
                              name="dob"
                              required=""
                            />
                          </div>
                          <div className="form-group col-md-4">
                            <label htmlFor="birth-time">Birth Timing:</label>
                            <input
                              type="time"
                              className="form-control"
                              id="birth-time"
                              name="birth-time"
                              required=""
                              disabled=""
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-md-6">
                            <label htmlFor="current-address">Current Address:</label>
                            <textarea
                              className="form-control"
                              id="current-address"
                              name="current-address"
                              placeholder="Street/House No."
                              required=""
                              defaultValue={""}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="birthplace">Birthplace:</label>
                            <textarea
                              className="form-control"
                              id="birthplace"
                              name="birthplace"
                              placeholder="Street/House No."
                              required=""
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-md-6">
                            <label htmlFor="consult-time">Consultation Time:</label>
                            <select
                              className="form-control"
                              id="consult-time"
                              name="consult-time"
                              onchange="updatePrice()"
                            >
                              <option value={10}>Select here</option>
                              <option value={10}>10 mins</option>
                              <option value={15}>15 mins</option>
                              <option value={20}>20 mins</option>
                              <option value={25}>25 mins</option>
                              <option value={30}>30 mins</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="price">Price:</label>
                            <input
                              type="text"
                              className="form-control"
                              id="price"
                              name="price"
                              readOnly=""
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="form-group col-md-12">
                            <button type="submit" className="btn btn-primary">
                              Submit
                            </button>
                            <button
                              type="button"
                              className="btn btn-secondary"
                              onclick="resetForm()"
                            >
                              Reset
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </>

    </div>
  )
};

export default ServicePage;
