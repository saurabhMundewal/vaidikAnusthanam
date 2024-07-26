import { useState } from "react";
import axiosInstance from "../lib/axiosInstance";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

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
      setResponseMessage("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMessage("Error submitting form. Please try again.");
    }
    
  };

  return (
    <div
      className="section dark-overlay dark-overlay-3 bg-cover bg-center bg-norepeat"
      style={{ backgroundImage: "url(./../assets/img/bg1.jpg)" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-lg-30">
            <form method="post" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <i className="far fa-user" />
                    <input
                      type="text"
                      className="form-control transparent"
                      placeholder="First Name"
                      id="first_name"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
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
                      id="last_name"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <i className="far fa-pencil" />
                    <input
                      type="text"
                      className="form-control transparent"
                      placeholder="Mobile"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <i className="far fa-envelope" />
                    <input
                      type="email"
                      className="form-control transparent"
                      placeholder="Email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <button
                    type="submit"
                    className="sigma_btn-custom d-block w-100"
                    name="button"
                  >
                    Get a Quote <i className="far fa-arrow-right" />
                  </button>
                </div>
                {responseMessage && (
                  <div className="col-lg-12 mt-3">
                    <p>{responseMessage}</p>
                  </div>
                )}
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <div className="row">
              {Array.from({ length: 6 }).map((_, index) => (
                <div className="col-lg-6" key={index}>
                  <div className="sigma_client">
                    <img
                      src={`./../assets/img/clients/${index + 1}.png`}
                      alt={`client ${index + 1}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
