import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const UserHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Clear session storage and local storage
    sessionStorage.clear();
    localStorage.clear();

    // Clear cookies (requires more specific handling based on your app setup)
    document.cookie.split(";").forEach((c) => {
      document.cookie = c.replace(
        /^ +/,
        ""
      ).replace(
        /=.*/,
        "=;expires=" + new Date().toUTCString() + ";path=/"
      );
    });

    // Redirect to index page
    router.push("/").then(() => window.location.reload());
  };

  const userMenuItem = () => {
    return (
      <ul className="navbar-nav">
        <li className="menu-item">
          <Link href="/user/myBookings">My Bookings</Link>
        </li>
        <li className="menu-item">
          <Link href="/user/Profile">My Profile</Link>
        </li>
        <li className="menu-item">
          <Link href="/puja">Book New Puja</Link>
        </li>
        <li className="menu-item">
          <a href="#" onClick={handleLogout}>
            Logout
          </a>
        </li>
      </ul>
    );
  };

  return (
    <>
      <div
        className={`sigma_aside-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      ></div>

      <aside
        className={`sigma_aside sigma_aside-left ${isMenuOpen ? "open" : ""}`}
      >
        <a className="navbar-brand" href="/user/myBookings">
          <img src="https://vaidikanushthanam.com/assets/img/logo.png" alt="logo" />
        </a>
        {userMenuItem()}
      </aside>

      <div
        className={`sigma_aside-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      ></div>

      <header className="sigma_header header-3 can-sticky header-absolute">
        <div className="sigma_header-middle">
          <div className="container-fluid">
            <nav className="navbar">
              <div className="sigma_logo-wrapper">
                <a className="navbar-brand" href="/user/myBookings">
                  <img
                    src="https://vaidikanushthanam.com/assets/img/logo.png"
                    alt="logo"
                  />
                </a>
              </div>

              {userMenuItem()}
              <div className="sigma_header-controls style-2">
                <ul className="sigma_header-controls-inner">
                  <li
                    className="aside-toggler style-2 aside-trigger-left"
                    onClick={toggleMenu}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default UserHeader;
