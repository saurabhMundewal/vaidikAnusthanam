// updated code checkout new version
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axiosInstance from "../lib/axiosInstance"
import axios from "axios"
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
import { fetchUserProfile } from "../features/userSlice";
import Cookies from "js-cookie";

export default function Checkout() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { countries, states, cities, loading } = useSelector(
    (state) => state.location
  );
  const userid = Cookies.get("id");
 // const packageing_id = getItemWithExpiration("package_id")
 const profile = useSelector((state) => state.user.profile);
 const status = useSelector((state) => state.user.status);
 const [minDateTime, setMinDateTime] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [packageingId, setPackageingId] = useState('');
  const [isCoupenApply, setIsCoupenApply] = useState(false);
  const [pujaData, setPujaData] = useState(null);
  const [formData, setFormData] = useState({
    packages_id: "",
    puja_id: "",
    puja_type: "",
    member_id: "",
    price: "",
    puja_date: "",
    first_name: profile?.user_name,
    last_name: "",
    phone: profile?.mobile,
    email: profile?.email,
    address_1: "",
    address_2: "",
    country: '',
    state:'',
    city: '',
    pincode: "",
    coupon_code: "",
    coupon_code_expiry: "",
    coupon_code_discount: 0,
    sub_total: '',
    gst_amount: '',
    grand_total: '',
    cutomer_notes: "",
  });


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

const handleApplyCoupon = async () => {
  try {
    const response = await axiosInstance.post('Pujas/couponcodeVerification', {
      coupon_code: formData?.coupon_code,
      member_id: userid,
      puja_package_id: packageingId
    });
    if (response.data?.status === 200) {
      const coupenData = JSON.parse(response?.data?.datas)
      setIsCoupenApply(true)
      setFormData({
        ...formData,
        'coupon_code': coupenData?.coupon_code,
        'coupon_code_expiry': coupenData?.coupon_code_expiry,
        'coupon_code_discount': coupenData?.coupon_discount_amount,
        'sub_total': coupenData?.sub_total,
        'gst_amount': coupenData?.gst_amount,
        'grand_total': coupenData?.grand_total,
      });
      setSuccessMessage('Coupon applied successfully!');
      setError('');
    } else {
      setIsCoupenApply(false)
      setError('Invalid coupon code');
      setSuccessMessage('');
    }
  } catch (error) {
    setIsCoupenApply(false)
    setSuccessMessage('');
    setError('An error occurred while verifying the coupon code');
  }
};

const findPujaPackageById =
packageingId && pujaData?.puja_packages?.find(packageDetails => packageDetails.puja_packages_id === packageingId);


const handleStateChange = (event) => {
  const { name, value } = event.target;
  setFormData({
    ...formData,
    [name]: value,
  });
  dispatch(fetchCities(event.target.value));
};

const getPujaType = () => {
  switch (pujaData?.puja_slug) {
    case 'online-puja':
      return 1;
    case 'puja-at-temples':
      return 2;
    case 'puja-at-home':
      return 3;
    default:
      return null; // or some default value if needed
  }
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
          puja_type: getPujaType(),
          member_id: userid,
          price: isCoupenApply ? formData?.grand_total : findPujaPackageById?.puja_packages_with_gst_amount,
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

      if (responseOrder?.id) {
        const orderData = await axios.post("/api/razorpay-order", {
          amount: isCoupenApply ? formData?.grand_total : findPujaPackageById?.puja_packages_with_gst_amount,
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
                  payment_status: "Success",
                  price: isCoupenApply ? formData?.grand_total : findPujaPackageById?.puja_packages_with_gst_amount,
                  payment_mode: "razorpay",
                  coupon_code: isCoupenApply ? formData?.coupon_code : 'NA',
                  coupon_code_expiry: isCoupenApply ? formData?.coupon_code_expiry : 'NA',
                  coupon_code_discount: isCoupenApply ? formData?.coupon_code_discount : 'NA',
                })
              ).unwrap();

              router.push(`/user/myBookings`);

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
                payment_status: "Failure",
                price: isCoupenApply ? formData?.grand_total : findPujaPackageById?.puja_packages_with_gst_amount,
                payment_mode: "razorpay",
                coupon_code: isCoupenApply ? formData?.coupon_code : 'NA',
                coupon_code_expiry: isCoupenApply ? formData?.coupon_code_expiry : 'NA',
                coupon_code_discount: isCoupenApply ? formData?.coupon_code_discount : 'NA',
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
  if(profile){
  setFormData({
    ...formData,
    first_name: profile?.user_name,
    phone: profile?.mobile,
    email: profile?.email
  });
}
 
}, [profile]);

useEffect(() => {
  if (status === "idle") {
    dispatch(fetchUserProfile({ userid: userid }));
  }
}, [status, dispatch]);

  useEffect(() => {
    // Delay setting the state by 2 seconds (2000 milliseconds)
    const timeout = setTimeout(() => {
      const packageId = getItemWithExpiration("package_id");
      setPackageingId(packageId);
    }, 2000);

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const data = sessionStorage.getItem("selected_pooja");
    if (data) {
      setPujaData(JSON.parse(data));
    }
  }, []);


  useEffect(() => {
    const getCurrentDateTimeLocal = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');

      return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    setMinDateTime(getCurrentDateTimeLocal());
  }, []);

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
                        min={minDateTime}
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
                        value={formData.phone }
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
                        value={formData.email }
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
                  {/* <div className="sigma_notice mt-20" style={{ marginTop: 35 }}>
                    <p>
                      <a href="#">{pujaData?.puja_title} </a>{" "}
                    </p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: pujaData?.puja_description,
                      }}
                    />
                  </div> */}
                  <div class="card mb-4">
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table table-striped">
                          <tbody>
                            <tr>
                              <td></td>
                              <td>
                                <h3 class="h5 mb-0">
                                  <a href="#" class="text-reset">
                                    {pujaData?.puja_title}
                                  </a>
                                </h3>
                                <span class="small">
                                  Package: {findPujaPackageById?.puja_packages_title_1}({findPujaPackageById?.puja_packages_title_2})
                                </span>
                              </td>
                              <td class="text-end">₹{findPujaPackageById?.puja_packages_price}</td>
                            </tr>
                            <tr>
                              <td colspan="2">Discount </td>
                              <td class="text-end">₹{isCoupenApply ? formData?.coupon_code_discount : ' 00.00'}</td>
                            </tr>
                            <tr>
                              <td colspan="2">Subtotal </td>
                              <td class="text-end">₹{isCoupenApply ? formData?.sub_total : findPujaPackageById?.puja_packages_price}</td>
                            </tr>
                            <tr>
                              <td colspan="2">GST ({findPujaPackageById?.puja_packages_gst}%)</td>
                              <td class="text-end">₹ {isCoupenApply ? formData?.gst_amount : findPujaPackageById?.puja_packages_gst_amount} </td>
                            </tr>

                            <tr class="fw-bold">
                              <td colspan="2">TOTAL</td>
                              <td class="text-end">₹{isCoupenApply ? formData?.grand_total : findPujaPackageById?.puja_packages_with_gst_amount}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
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
                  <div className="sigma_notice">
                    <label>Coupon Code</label>
                    <div className="coupon-input-wrapper">
                      <input
                        type="text"
                        className="form-control coupon-input"
                        name="coupon_code"
                        value={formData?.coupon_code}
                        onChange={handleChange}
                        placeholder="Enter coupon code"
                      />
                      <button type="button" className="apply-button" onClick={handleApplyCoupon}>Apply</button>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
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
