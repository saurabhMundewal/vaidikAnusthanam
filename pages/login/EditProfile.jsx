import React from 'react'
import Link from 'next/link'
export default function EditProfile() {
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
              <img src="https://vaidikanushthanam.com/assets/img/logo.png" alt="logo" />
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
              <Link href="/login/profile">My Profile</Link>
              {/* {" "}
              <a href="about-us.html">My Profile</a>{" "} */}
            </li>
            <li className="menu-item">
              <Link href="/pujaorder/Pujaorder">Book New Puja</Link>
              {/* {" "}
              <a href="blog.html">Book New Puja</a>{" "} */}
            </li>
            <li className="menu-item">
              <Link href="/login/login">Logout</Link>
              {/* {" "}
              <a href="#">Logout</a>{" "} */}
            </li>
          </ul>
          <div className="sigma_header-controls style-2">
            <ul className="sigma_header-controls-inner">
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
      <div className="row align-items-center">
        <div className="col-md-12">
          <h1 className="text-white">Edit Your Profile</h1>
        </div>
      </div>
    </div>
  </div>
  <div className="page-content">
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
          <div className="settings-widget dash-profile">
            <div className="settings-menu p-0">
              <div className="profile-bg">
                <img src="./../assets/img/instructor-profile-bg.jpg" alt="" />
                <div className="profile-img">
                  <a href="instructor-profile.html">
                    <img src="./../assets/img/user/user15.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div className="profile-group">
                <div className="profile-name text-center">
                  <h4>
                    <a href="instructor-profile.html">Jenny Wilson</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-md-8">
          <div className="settings-widget profile-details">
            <div className="settings-menu p-0">
              <div className="profile-heading">
                <h3>Profile Details</h3>
                <p>You have full control to manage your own account setting.</p>
              </div>
              <div className="course-group mb-0 d-flex">
                <div className="course-group-img d-flex align-items-center">
                  <a href="instructor-profile.html">
                    <img
                      src="./../assets/img/user/user11.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <div className="course-name">
                    <h4>
                      <a href="instructor-profile.html">Your avatar</a>
                    </h4>
                    <p>PNG or JPG no bigger than 800px wide and tall.</p>
                  </div>
                </div>
                <div className="profile-share d-flex align-items-center justify-content-center">
                  <a href="javascript:;" className="btn btn-success">
                    Update
                  </a>
                </div>
              </div>
              <div className="checkout-form personal-address add-course-info">
                <div className="personal-info-head">
                  <h4>Personal Details</h4>
                  <p>Edit your personal information and address.</p>
                </div>
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your first Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label">Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your Phone"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your Email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-label">Country</label>
                        <select
                          className="form-select select country-select"
                          name="sellist1"
                        >
                          <option>Select country</option>
                          <option>India</option>
                          <option>America</option>
                          <option>London</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label">State</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="State Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label className="form-control-label">City</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your City"
                        />
                      </div>
                    </div>
                    <div className="update-profile">
                      <button type="button" className="btn btn-primary">
                        Update Profile
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
  </div>
</>


    </div>
  )
}
