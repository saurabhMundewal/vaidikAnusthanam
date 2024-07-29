

// new page updated code

import React from 'react'
import Link from 'next/link'

export default function Cart() {
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
                <h1>Cart With Puja Details</h1>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a className="btn-link" href="https://vaidikanushthanam.in/">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Payment Options
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
            <form method="post" action="">
              <div className="row">
                <div className="col-xl-7">
                  {/* Buyer Info Start */}
                  <div className="sigma_notice">
                    <div className="row">
                      <div className="col-md-8">
                        <h2>Ramayan Paath-रामायण पाठ </h2>
                      </div>
                      <div className="col-md-4">
                        <Link className="btn btn-primary" style={{ display: "inline-block" }} href="/checkout/Checkout" >Edit/Delete</Link>
                        {/* <a
                    style={{ display: "inline-block" }}
                    href=""
                    className="btn btn-primary"
                  >
                    Edit/Delete
                  </a> */}
                      </div>
                    </div>
                    <h3 style={{ color: "#1d5e77" }}>
                      Package:-रामायण पाठ- Ramayan Paath
                    </h3>
                    <hr />
                    <div className="row">
                      <div className="col-md-12">
                        <div className="table-responsive">
                          <table className="table table-bordered table-striped">
                            <tbody>
                              <tr>
                                <th>Booking Date</th>
                                <td>2024-05-02T20:26</td>
                              </tr>
                              <tr>
                                <th>Name</th>
                                <td>Abhay Pratap singh</td>
                              </tr>
                              <tr>
                                <th>Phone</th>
                                <td>7906225663</td>
                              </tr>
                              <tr>
                                <th>Email</th>
                                <td>jbbabhay@gmail.com</td>
                              </tr>
                              <tr>
                                <th>Address</th>
                                <td>
                                  Testing, Testing, India, Uttar padesh, Meerut -
                                  250003
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sigma_notice">
                    <h2>Ramayan Paath-रामायण पाठ </h2>
                    <h3 style={{ color: "#1d5e77" }}>
                      Package:-रामायण पाठ- Ramayan Paath
                    </h3>
                    <hr />
                    <div className="row">
                      <div className="col-md-12">
                        <div className="table-responsive">
                          <table className="table table-bordered table-striped">
                            <tbody>
                              <tr>
                                <th>Booking Date</th>
                                <td>2024-05-02T20:26</td>
                              </tr>
                              <tr>
                                <th>Name</th>
                                <td>Abhay Pratap singh</td>
                              </tr>
                              <tr>
                                <th>Phone</th>
                                <td>7906225663</td>
                              </tr>
                              <tr>
                                <th>Email</th>
                                <td>jbbabhay@gmail.com</td>
                              </tr>
                              <tr>
                                <th>Address</th>
                                <td>
                                  Testing, Testing, India, Uttar padesh, Meerut -
                                  250003
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Buyer Info End */}
                </div>
                <div className="col-xl-5 checkout-billing">
                  {/* Order Details Start */}
                  {/* Coupon Code */}
                  <div className="sigma_notice">
                    <p>
                      Do you have a coupon code? <a href="#">Click here to apply</a>{" "}
                    </p>
                  </div>
                  <div className="sigma_notice-content">
                    <p>If you have a coupon code, apply it below</p>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Coupon Code"
                      />
                      <div className="input-group-append">
                        <button
                          className="sigma_btn-custom shadow-none btn-sm"
                          type="button"
                        >
                          Apply Code
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="cart-summary">
                    <h3>CART TOTALS</h3>
                    <table className="table table-totals">
                      <tbody></tbody>
                      <tfoot>
                        <tr>
                          <td>Sub Total</td>
                          <td>₹100000.00</td>
                        </tr>
                        <tr>
                          <td>GST (18%)</td>
                          <td>₹18000 </td>
                        </tr>
                        <tr>
                          <td>
                            <b>Total</b>
                          </td>
                          <td>
                            <b> ₹118000</b>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                    <div className="checkout-methods">
                      <button
                        id="pay-btn"
                        type="button"
                        onclick="razorpaySubmit(this);"
                        className="sigma_btn-custom primary d-block w-100"
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            {/* Order Details End */}
            <div className="grid-container default-section-spacing">
              <ul className="accordion-list">
                <form
                  name="razorpay-form"
                  id="razorpay-form"
                  action="https://vaidikanushthanam.in/Checkout/callback_url"
                  method="POST"
                  onload="razorpaySubmit(this);"
                >
                  <input
                    type="hidden"
                    name="razorpay_payment_id"
                    id="razorpay_payment_id"
                  />
                  <input
                    type="hidden"
                    name="merchant_order_id"
                    id="merchant_order_id"
                    defaultValue="VAORD2024051015"
                  />
                  <input
                    type="hidden"
                    name="merchant_trans_id"
                    id="merchant_trans_id"
                    defaultValue={20240510063537}
                  />
                  <input
                    type="hidden"
                    name="merchant_product_info_id"
                    id="merchant_product_info_id"
                    defaultValue="Vaidik Anushthanam"
                  />
                  <input
                    type="hidden"
                    name="merchant_surl_id"
                    id="merchant_surl_id"
                    defaultValue="https://vaidikanushthanam.in/Checkout/success"
                  />
                  <input
                    type="hidden"
                    name="merchant_furl_id"
                    id="merchant_furl_id"
                    defaultValue="https://vaidikanushthanam.in/Checkout/failed"
                  />
                  <input
                    type="hidden"
                    name="card_holder_name_id"
                    id="card_holder_name_id"
                    defaultValue="Abhay Pratap singh Meerut"
                  />
                  <input
                    type="hidden"
                    name="merchant_total"
                    id="merchant_total"
                    defaultValue={11800000}
                  />
                  <input
                    type="hidden"
                    name="merchant_amount"
                    id="merchant_amount"
                    defaultValue={11800000}
                  />
                </form>
              </ul>
            </div>
            <style
              type="text/css"
              dangerouslySetInnerHTML={{
                __html:
                  "\n  .form-group i {\n    position: unset !important;\n    top: 50%;\n    right: 20px;\n    transform: translateY(-50%);\n    color: #e8e8e8;\n}\n"
              }}
            />
          </div>
        </div>
      </>

    </div>
  )
}
