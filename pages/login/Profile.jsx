import React from "react";
import Link from "next/link";
export default function Profile() {
  return (
    <div>
      <>
        <header className="sigma_header header-3 can-sticky header-absolute">
          {/* Middle Header Start */}
          <div className="sigma_header-middle">
            <div className="container-fluid">
              <nav className="navbar">
                {/* Logo Start */}
                <div className="sigma_logo-wrapper">
                  <a className="navbar-brand" href="index.html">
                    <img src="./../assets/img/logo.png" alt="logo" />
                  </a>
                </div>
                {/* Logo End */}
                {/* Menu */}
                <ul className="navbar-nav">
                  <li className="menu-item">
                    <Link href="/pujaorder/Pujaorder">My Bookings</Link>

                    {/* <a href="index.html">My Bookings</a> */}
                  </li>
                  <li className="menu-item">
                    {" "}
                    <a href="#">My Profile</a>{" "}
                  </li>
                  <li className="menu-item">
                    <Link href="/pujaorder/Pujaorder">Book New Puja</Link>
                    {/* {" "}
                    <a href="#">Book New Puja</a>{" "} */}
                  </li>
                  <li className="menu-item">
                  <Link href="/login/Login">Logout</Link>
                    {/* {" "}
                    <a href="#">Logout</a>{" "} */}
                  </li>
                </ul>
                <div className="sigma_header-controls style-2">
                  <ul className="sigma_header-controls-inner">
                    {/* Desktop Toggler */}
                    <li className="aside-toggler style-2 aside-trigger-right desktop-toggler">
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </li>
                    {/* Mobile Toggler */}
                    <li className="aside-toggler style-2 aside-trigger-left">
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          {/* Middle Header End */}
        </header>
        {/* partial */}
        <div className="page-banner instructor-bg-blk">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="profile-info-blk">
                  <a href="javascript:;" className="profile-info-img">
                    <img
                      src="./../assets/img/service/details/7.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <h4 className="text-white">Jenny Wilson</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="page-content course-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="card overview-sec">
                  <div className="card-body">
                    <h5 className="subs-title">About Me</h5>
                    <Link href="/login/EditProfile">
                      <button className="btn btn-primary">Edit Profile</button>
                    </Link>

                    <p>
                      Very well thought out and articulate communication. Clear
                      milestones, deadlines and fast work. Patience. Infinite
                      patience. No shortcuts. Even if the client is being
                      careless. Some quick example text to build on the card
                      title and bulk the card's content Moltin gives you
                      platform.
                    </p>
                    <p className="mb-0">
                      As a highly skilled and successfull product development
                      and design specialist with more than 4 Years of My
                      experience lies in successfully conceptualizing,
                      designing, and modifying consumer products specific to
                      interior design and home furnishings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card overview-sec">
                  <div className="card-body">
                    <h5 className="subs-title">Contact Details</h5>
                    <div className="contact-info-list">
                      <div className="edu-wrap">
                        <div className="edu-name">
                          <span>
                            <i className="flaticon-email" />
                          </span>
                        </div>
                        <div className="edu-detail">
                          <h6>Email</h6>
                          <p>
                            <a href="javascript:;">
                              <span
                                className="__cf_email__"
                                data-cfemail="4d27282323343a24213e22230d28352c203d2128632e2220"
                              >
                                [email&nbsp;protected]
                              </span>
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="edu-wrap">
                        <div className="edu-name">
                          <span>
                            <i className="flaticon-location" />
                          </span>
                        </div>
                        <div className="edu-detail">
                          <h6>Address</h6>
                          <p>877 Ferry Street, Huntsville, Alabama</p>
                        </div>
                      </div>
                      <div className="edu-wrap">
                        <div className="edu-name">
                          <span>
                            <i className="flaticon-call" />
                          </span>
                        </div>
                        <div className="edu-detail">
                          <h6>Phone</h6>
                          <p>
                            <a href="javascript:;">+1(452) 125-6789</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <button  className="btn btn-primary">Edit Profile</button> */}
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}
