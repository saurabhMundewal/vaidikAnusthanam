import React from 'react'
import Link from 'next/link'
export default function exclusivepackages() {
  return (
    <div>
      <>
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
          <h1>EXCLUSIVE PACKAGES</h1>
        </div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a className="btn-link" href="/">
                Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Exclusive Packages
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  {/* partial */}
  {/* About Start */}
  <section className="section">
    <div className="container">
      <div className="row">
        <h2>Select Puja Package</h2>
        <div className="plan-options">
          <div className="plan packagePricing">
            <div className="plan-header">
              <h3 className="plan-heading">द्वापर-Basic</h3>
            </div>
            <div className="plan-header">
              <h4 className="plan-heading">Best Offer</h4>
            </div>
            <ul className="plan-feature">
              <li>Single Local Brahmin</li>
              <li>Samagree Included</li>
              <li>With Hawan</li>
            </ul>
            <p>
              ₹<span className="plan-amount">6160.00</span>
            </p>
            <Link className="plan-choose" href="/checkout/Checkout">Choose</Link>
            {/* <a
              href="https://vaidikanushthanam.in/checkout/7"
              className="plan-choose"
            >
              {" "}
              Choose{" "}
            </a> */}
          </div>
          <div className="plan packagePricing">
            <div className="plan-header">
              <h3 className="plan-heading">त्रेता-Medium</h3>
            </div>
            <div className="plan-header">
              <h4 className="plan-heading" />
            </div>
            <ul className="plan-feature">
              <li>3 Brahmin</li>
              <li>With Family</li>
              <li>Hawan Included</li>
              <li>Photography Included</li>
              <li>Assured Gifts</li>
            </ul>
            <p>
              ₹<span className="plan-amount">20300.00</span>
            </p>
            <Link className="plan-choose" href="/checkout/Checkout">Choose</Link>
            {/* <a
              href="https://vaidikanushthanam.in/checkout/8"
              className="plan-choose"
            >
              {" "}
              Choose{" "}
            </a> */}
          </div>
          <div className="plan packagePricing">
            <div className="plan-header">
              <h3 className="plan-heading">सतयुग-Premium</h3>
            </div>
            <div className="plan-header">
              <h4 className="plan-heading" />
            </div>
            <ul className="plan-feature">
              <li>5 Scholar Brahmins</li>
              <li>With Family</li>
              <li>Hawan Included</li>
              <li>Pics and Videos of the Anushthan</li>
              <li>Assured Gifts</li>
              <li>Extra Benefits</li>
            </ul>
            <p>
              ₹<span className="plan-amount">30100.00</span>
            </p>
            <Link className="plan-choose" href="/checkout/Checkout">Choose</Link>
            {/* <a
              href="https://vaidikanushthanam.in/checkout/11"
              className="plan-choose"
            >
              {" "}
              Choose{" "}
            </a> */}
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    </div>
  )
}
