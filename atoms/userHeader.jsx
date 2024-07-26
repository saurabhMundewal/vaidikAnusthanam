import React from "react";
import Link from "next/link";


const UserHeader = ({ handleLogout }) => {
  return (
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
                <Link href="/">My Bookings</Link>

                {/* <a href="index.html">My Bookings</a> */}
              </li>
              <li className="menu-item">
                {" "}
                <Link href="/user/Profile">My Profile</Link>{" "}
              </li>
              {/* <li className="menu-item">
              <Link href="/pujaorder/Pujaorder">Book New Puja</Link>
              {/* {" "}
              <a href="#">Book New Puja</a>{" "} *
            </li> */}
              <li className="menu-item">
                <Link href="#" onClick={() =>handleLogout()}>
                  Logout
                </Link>
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
  );
};

export default UserHeader;
