// updated code checkout new version
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import {
  fetchCountries,
  fetchStates,
  fetchCities,
} from "../features/locationSlice";
import { submitBookingForm } from "../features/checkoutSlice";
import { submitBookingPayment } from "../features/paymentSlice";
import Cookies from "js-cookie";

export default function Checkout() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { countries, states, cities, loading } = useSelector(
    (state) => state.location
  );
  const userid = Cookies.get("id");
  const [pujaData, setPujaData] = useState(null);
  const [formData, setFormData] = useState({
    packages_id: "",
    puja_id: "",
    puja_type: "",
    member_id: "",
    price: "",
    puja_date: "",
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    address_1: "",
    address_2: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    cutomer_notes: "",
  });

  useEffect(() => {
    const data = sessionStorage.getItem("selected_pooja");
    if (data) {
      setPujaData(JSON.parse(data));
    }
  }, []);


  function getItemWithExpiration(key) {
    const itemStr = sessionStorage.getItem(key);
    if (!itemStr) return null;

    const item = JSON.parse(itemStr);
    const now = new Date().getTime();

    if (now > item.expiration) {
      sessionStorage.removeItem(key);
      return null;
    }

    return item.value;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCountryChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    dispatch(fetchStates(event.target.value));
  };

  const handleStateChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    dispatch(fetchCities(event.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (getItemWithExpiration("package_id") === null) {
      toast.error(
        "Session Expired, Please select package again and complete the checkout"
      );
      setTimeout(() => {
        router.push(`/pujaDetail/${pujaData?.puja_slug}`);
      }, 2000);
    } else {
      try {
        const responseOrder = await dispatch(
          submitBookingForm({
            packages_id: getItemWithExpiration("package_id"),
            puja_id: pujaData?.puja_id,
            puja_type: pujaData?.puja_slug,
            member_id: userid,
            price: getItemWithExpiration("price"),
            puja_date: formData?.puja_date,
            first_name: formData?.first_name,
            last_name: formData?.last_name,
            phone: formData?.phone,
            email: formData?.email,
            address_1: formData?.address_1,
            address_2: formData?.address_2,
            country: formData?.country,
            state: formData?.state,
            city: formData?.city,
            pincode: formData?.pincode,
            cutomer_notes: formData?.cutomer_notes,
          })
        ).unwrap(); // Use unwrap to get the direct payload from the action
  
        console.log(responseOrder?.id, "responseOrder");
  
        if (responseOrder?.id) {
          const orderData = await axios.post("/api/razorpay-order", {
            amount: getItemWithExpiration("price"),
            currency: "INR",
          });
  
          const { id: order_id, currency, amount } = orderData.data;
  
          const options = {
            key: "rzp_test_npfutZLyZxi54o", // Enter the Key ID generated from the Dashboard
            amount,
            currency,
            name: "vaidikanushthanam",
            description: "Test Transaction",
            image: "https://vaidikanushthanam.com/assets/img/logo.png",
            order_id, // This is a sample Order ID. Pass the `id` obtained in Step 1
            handler: async function (response) {
              // Handle successful payment capture
              toast.success("Payment captured successfully", response);
              try {
                const captureResponse = await dispatch(
                  submitBookingPayment({
                    member_id: userid,
                    payment_id: responseOrder?.id,
                    transection_id: response.razorpay_payment_id,
                    payment_status: 'Success',
                    price: getItemWithExpiration("price"),
                    payment_mode: 'razorpay',
                    coupon_code: 'abc',
                    coupon_code_expiry: 'NA',
                    coupon_code_discount: ''
                  })
                ).unwrap();
                console.log(
                  "Payment captured successfully:",
                  captureResponse
                );
                // Handle further actions on successful payment capture
              } catch (error) {
                console.error("Error capturing payment:", error.message);
                toast.error("Payment capture failed");
              }
            },
            prefill: {
              name: `${formData.first_name} ${formData.last_name}`,
              email: formData.email,
              contact: formData.phone,
            },
            notes: {
              address: `${formData.address_1} ${formData.address_2}`,
            },
            theme: {
              color: "#3399cc",
            },
          };
  
          const rzp1 = new Razorpay(options);
          rzp1.on("payment.failed", async function (response) {
            toast.error("Payment failed", response.error);
            try {
              const captureResponse = await dispatch(
                submitBookingPayment({
                  member_id: userid,
                  payment_id: responseOrder?.id,
                  transection_id: response.error.code, // Use response.error.code or appropriate field
                  payment_status: 'Failure',
                  price: getItemWithExpiration("price"),
                  payment_mode: 'razorpay',
                  coupon_code: 'abc',
                  coupon_code_expiry: 'NA',
                  coupon_code_discount: ''
                })
              ).unwrap();
              console.error("Payment capture failed:", captureResponse);
            } catch (error) {
              console.error("Error capturing payment failure:", error.message);
              toast.error("Error capturing payment failure");
            }
          });
  
          rzp1.open();
        } else {
          toast.error("Failed to submit booking form");
        }
      } catch (error) {
        toast.error("An error occurred: " + error.message);
      }
    }
  };
  

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div>
      <>
        {/* partial */}
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
                <h1>Checkout</h1>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a className="btn-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Checkout
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        {/* partial */}
        {/* Checkout Start */}
        <div className="section">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-xl-12">
                  <h4>Booking Details</h4>
                </div>
                <div className="col-xl-7">
                  {/* Buyer Info Start */}
                  <div className="row">
                    <div className="form-group col-xl-12">
                      <label htmlFor="puja_date">
                        Select Puja Date <span className="text-danger">*</span>
                      </label>
                      <input
                        type="datetime-local"
                        placeholder="Select Puaj Date"
                        name="puja_date"
                        id="puja_date"
                        className="form-control"
                        value={formData.puja_date}
                        onChange={handleChange}
                        required={true}
                      />
                    </div>
                    <div className="form-group col-xl-6">
                      <label htmlFor="first_name">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                        id="first_name"
                        className="form-control"
                        value={formData.first_name}
                        onChange={handleChange}
                        required={true}
                      />
                    </div>
                    <div className="form-group col-xl-6">
                      <label htmlFor="last_name">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        name="last_name"
                        id="last_name"
                        className="form-control"
                        value={formData.last_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col-xl-6">
                      <label htmlFor="phone">
                        Phone Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Phone Number"
                        name="phone"
                        id="phone"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col-xl-6">
                      <label htmlFor="email">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        id="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col-xl-6">
                      <label htmlFor="address_1">
                        Street Address 1 <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Street Address One"
                        name="address_1"
                        id="address_1"
                        className="form-control"
                        value={formData.address_1}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col-xl-6">
                      <label htmlFor="address_2">Street Address 2</label>
                      <input
                        type="text"
                        placeholder="Street Address Two (Optional)"
                        name="address_2"
                        id="address_2"
                        className="form-control"
                        value={formData.address_2}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col-xl-6">
                      <label htmlFor="country">
                        Country <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-control"
                        aria-label="Default select example"
                        id="country"
                        name="country"
                        required
                        onChange={handleCountryChange}
                      >
                        <option selected="">Select Country</option>
                        {countries.map((country) => (
                          <option key={country.id} value={country.id}>
                            {country.country_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group col-xl-6">
                      <label htmlFor="state">
                        State <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-control"
                        aria-label="Default select example"
                        id="state"
                        name="state"
                        required
                        onChange={handleStateChange}
                      >
                        <option selected="">Select State</option>
                        {states.map((state) => (
                          <option key={state.id} value={state.id}>
                            {state.state_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group col-xl-6">
                      <label htmlFor="city">
                        Town / City <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-control"
                        aria-label="Default select example"
                        id="city"
                        name="city"
                        required
                        onChange={handleChange}
                      >
                        <option selected="">Select City</option>
                        {cities.map((city) => (
                          <option key={city.id} value={city.id}>
                            {city.city_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group col-xl-6">
                      <label htmlFor="pincode">
                        Pincode <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Pincode"
                        name="pincode"
                        id="pincode"
                        className="form-control"
                        value={formData.pincode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {/* Buyer Info End */}
                </div>
                <div className="col-xl-5 checkout-billing">
                  {/* Order Details Start */}
                  <div className="sigma_notice mt-20" style={{ marginTop: 35 }}>
                    <p>
                      <a href="javascript:(void)">{pujaData?.puja_title} </a>{" "}
                    </p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: pujaData?.puja_description,
                      }}
                    />
                  </div>
                  <div className="sigma_notice-content">
                    <div className="row">
                      <div className="col-xl-12 form-group">
                        <div className="sigma_icon-block icon-block-3">
                          <div className="icon-wrapper">
                            <i
                              className="flaticon-temple"
                              style={{ marginBottom: 5 }}
                            />
                            <i className="far fa-calendar-check" />
                          </div>
                          <div className="sigma_icon-block-content">
                            <div className="sigma_product-single-content">
                              <p>01-01-1970 To 01-01-1970</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Coupon Code */}
                  <div className="sigma_notice">
                    <label>Customer Notes</label>
                    <textarea
                      className="form-control"
                      name="cutomer_notes"
                      value={formData.cutomer_notes}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="small">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our{" "}
                    <a
                      className="btn-link"
                      href="https://vaidikanushthanam.in/privacy-policy/"
                      target="_blank"
                    >
                      privacy policy.
                    </a>{" "}
                  </p>{" "}
                  <button
                    type="submit"
                    name="placeorder"
                    className="sigma_btn-custom primary d-block w-100"
                  >
                    Place Order
                  </button>
                  {/* Order Details End */}
                </div>
              </div>
            </form>
            <style
              type="text/css"
              dangerouslySetInnerHTML={{
                __html:
                  "\n  .form-group i {\n    position: unset !important;\n    top: 50%;\n    right: 20px;\n    transform: translateY(-50%);\n    color: #e8e8e8;\n}\n",
              }}
            />
          </div>
          <ToastContainer />
        </div>
      </>
    </div>
  );
}
