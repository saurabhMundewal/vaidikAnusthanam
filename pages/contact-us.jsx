import React, { useEffect, useState } from "react";
import Link from "next/link";
import axiosInstance from "../lib/axiosInstance";
import { ToastContainer, toast } from "react-toastify";

const ContactPage = () => {
  const [generalConfiguration, setGeneralConfiguration] = useState(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    message: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        "/Setting/submitContactFromEnquiry",
        formData,{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    if (response?.data?.status === 200) {
    toast.success(response?.data?.message || "Form submitted successfully!");
    }
    if (response?.data?.status !== 200) {
      toast.error(
        response?.data?.message ||
          "Please Enter the below field"
      );
    }
    } catch (error) {
      toast.error("Error submitting form. Please try again.", error);
      //setResponseMessage("Error submitting form. Please try again.");
    }
    
  };

  useEffect(() => {
    const getDetails = localStorage.getItem("generalConfiguration");
    const siteData = JSON.parse(getDetails);
    setGeneralConfiguration(siteData);
  }, []);

  return (
    <>
      <div
        className="sigma_subheader dark-overlay dark-overlay-2"
        style={{
          backgroundImage:
            "url(https://admin.vaidikanushthanam.in/static/img/subheader.jpg)",
        }}
      >
        <div className="container">
          <div className="sigma_subheader-inner">
            <div className="sigma_subheader-text">
              <h1>Contact Us</h1>
            </div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link
                    className="btn-link"
                    href="https://admin.vaidikanushthanam.in/"
                  >
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Contact Us
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="sigma_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7213.4034786796165!2d82.98465108856533!3d25.314223109195833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2dfce3c7c4a5%3A0xcb6d5dc09c31a7a2!2sIP%20Sigra%20Mall!5e0!3m2!1sen!2sin!4v1714972339334!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="section mt-negative pt-0">
        <div className="container">
          <form
            className="sigma_box box-lg m-0 mf_form_validate ajax_submit"
            action=""
            method="post"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="row">
              <div className="col-lg-4">
                <div className="form-group">
                  <i className="far fa-user"></i>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-control dark"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required={true}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <i className="far fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="form-control dark"
                    name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required={true}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <i className="far fa-pencil"></i>
                  <input
                    type="text"
                    placeholder="Mobile"
                    className="form-control dark"
                    name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required={true}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                      onChange={handleChange}
                placeholder="Enter Message"
                cols="45"
                rows="5"
                className="form-control dark"
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="sigma_btn-custom">
                Submit Now
              </button>
              <div className="server_response w-100"></div>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>

      <div className="section section-padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sigma_icon-block text-center light icon-block-7">
                <i className="flaticon-email"></i>
                <div className="sigma_icon-block-content">
                  <span>
                    Send Email <i className="far fa-arrow-right"></i>
                  </span>
                  <h5>Email Address</h5>
                  <p>{generalConfiguration?.organization_email}</p>
                </div>
                <div className="icon-wrapper">
                  <i className="flaticon-email"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sigma_icon-block text-center light icon-block-7">
                <i className="flaticon-call"></i>
                <div className="sigma_icon-block-content">
                  <span>
                    Call Us Now <i className="far fa-arrow-right"></i>
                  </span>
                  <h5>Phone Number</h5>
                  <p>{generalConfiguration?.primary_mobile}</p>
                </div>
                <div className="icon-wrapper">
                  <i className="flaticon-call"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sigma_icon-block text-center light icon-block-7">
                <i className="flaticon-location"></i>
                <div className="sigma_icon-block-content">
                  <span>
                    Find Us Here <i className="far fa-arrow-right"></i>
                  </span>
                  <h5>Location</h5>
                  <p>{generalConfiguration?.address}</p>
                </div>
                <div className="icon-wrapper">
                  <i className="flaticon-location"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
