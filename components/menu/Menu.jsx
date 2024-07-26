import React from "react";
import Link from "next/link";
import Cookies from "js-cookie";

export default function Menu() {
  const userType = Cookies.get("user_type");
  const userid = Cookies.get("id");

  const getLoginMenu = () => {
    if (userType === "Priest" && userid !== "") {
      return (
        <Link className="sigma_btn-custom" href="/user/Profile">
          Dashboard
        </Link>
      );
    } else {
      return (
        <Link className="sigma_btn-custom" href="/login/Login">
          Login/Signup
        </Link>
      );
    }
  };

  return (
    <div>
      <>
        {/* partial:partia/__sidenav.html */}
        <aside className="sigma_aside sigma_aside-right sigma_aside-right-panel sigma_aside-bg">
          <div className="sidebar">
            <div className="sidebar-widget widget-logo">
              <img src="./../assets/img/logo.png" className="mb-30" alt="img" />
              <p>
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. Donec rutrum congue leo eget malesuada. Praesent sapien
                massa, convallis a pellentesque nec, egestas non nisi.
              </p>
            </div>
            {/* Instagram Start */}
            <div className="sidebar-widget widget-ig">
              <h5 className="widget-title">Instagram</h5>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                  <a href="#" className="sigma_ig-item">
                    <img src="./../assets/img/ig/1.jpg" alt="ig" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                  <a href="#" className="sigma_ig-item">
                    <img src="./../assets/img/ig/2.jpg" alt="ig" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                  <a href="#" className="sigma_ig-item">
                    <img src="./../assets/img/ig/3.jpg" alt="ig" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                  <a href="#" className="sigma_ig-item">
                    <img src="./../assets/img/ig/4.jpg" alt="ig" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                  <a href="#" className="sigma_ig-item">
                    <img src="./../assets/img/ig/5.jpg" alt="ig" />
                  </a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                  <a href="#" className="sigma_ig-item">
                    <img src="./../assets/img/ig/6.jpg" alt="ig" />
                  </a>
                </div>
              </div>
            </div>
            {/* Instagram End */}
            {/* Social Media Start */}
            <div className="sidebar-widget">
              <h5 className="widget-title">Follow Us</h5>
              <div className="sigma_post-share">
                <ul className="sigma_sm square light">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Social Media End */}
          </div>
        </aside>
        <div className="sigma_aside-overlay aside-trigger-right" />
        {/* partial */}
        {/* partial:partia/__mobile-nav.html */}
        <aside className="sigma_aside sigma_aside-left">
          <a className="navbar-brand" href="index.html">
            {" "}
            <img src="./../assets/img/logo.png" alt="logo" />{" "}
          </a>
          {/* Menu */}
          <ul>
            <li className="menu-item">
              <a href="index.html">Home</a>
            </li>
            <li className="menu-item">
              {/* {" "}
              <Link href="/about/About">About</Link>{" "} */}
            </li>
            <li className="menu-item menu-item-has-children">
              {/* <Link href="/Puja/Puja">Pujas</Link> */}
              <a href="javascript:(void);">Pujas</a>
              <ul className="sub-menu">
                <li className="menu-item">
                  <Link href="/Puja?puja=online_puja">Online Puja</Link>
                  {/* {" "}
                  <a href="about-us.html">Online Puja</a>{" "} */}
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#">Offline Puja</a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="blog-grid.html">AT Temple</a>
                    </li>
                    <li className="menu-item">
                      {" "}
                      <a href="blog-details.html">AT Home</a>{" "}
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  {" "}
                  <a href="broadcast.html">Exclusive Packages</a>{" "}
                </li>
                <li className="menu-item">
                  {" "}
                  <a href="broadcast.html">subscription</a>{" "}
                </li>
              </ul>
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="#">Libarary</a>
              <ul className="sub-menu">
                <li className="menu-item">
                  {" "}
                  <a href="">Satsang Sahitya</a>{" "}
                </li>
                <li className="menu-item">
                  {" "}
                  <a href="aarti.html">Aarti</a>{" "}
                </li>
                <li className="menu-item">
                  {" "}
                  <a href="">Chalisa</a>{" "}
                </li>
                <li className="menu-item">
                  {" "}
                  <a href="">Mantra</a>{" "}
                </li>
              </ul>
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="#">Services</a>
              <ul className="sub-menu">
                <li className="menu-item">
                  {" "}
                  <a href="/about-us.html">Astrology</a>{" "}
                </li>
                <li className="menu-item">
                  {" "}
                  <a href="">Numerology</a>{" "}
                </li>
              </ul>
            </li>
            <li className="menu-item">
              {" "}
              <a href="blog.html">Blog</a>{" "}
            </li>
            <li className="menu-item">
              <a href="contact-us.html">Contact</a>
            </li>
          </ul>
        </aside>
        <div className="sigma_aside-overlay aside-trigger-left" />
        {/* partial */}
        {/* partial:partia/__header.html */}
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
                    <Link href="/">Home</Link>
                    {/* <a href="index.html">Home</a> */}
                  </li>

                  {/* update about code */}
                  <li className="menu-item menu-item-has-children">
                    <a href="javascript:void(0);">About US</a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <Link href="/about">About</Link>
                        {/* {" "}
                        <a href="about-us.html">About</a>{" "} */}
                      </li>
                      <li className="menu-item">
                        <Link href="/team">Our Team</Link>
                        {/* {" "}
                        <a href="team.html">Our Team</a>{" "} */}
                      </li>
                      {/* <li className="menu-item">
                        <Link href="/login/Profile">Profile</Link>
                      </li> */}
                      <li className="menu-item">
                        <Link href="/Faq">Faq</Link>
                      </li>
                    </ul>
                  </li>

                  {/* <li className="menu-item">
                    <Link href="/about/About">About</Link>
                     {" "}
                    <a href="about-us.html">About</a>{" "} 
                  </li> */}
                  <li className="menu-item menu-item-has-children">
                    <a href="javascript:(void);">Poojas</a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <Link href="/puja/online-puja">Online Pooja</Link>
                        {/* {" "}
                        <a href="about-us.html">Online Pooja</a>{" "} */}
                      </li>
                      <li className="menu-item menu-item-has-children">
                        <a href="#">Offline Pooja</a>
                        <ul className="sub-menu">
                          <li className="menu-item">
                            <Link href="/puja/puja-at-temples">At Temple</Link>
                            {/* <a href="blog-grid.html">At Temple</a> */}
                          </li>
                          <li className="menu-item">
                            <Link href="/puja/puja-at-home">At Home</Link>
                            {/* {" "}
                            <a href="blog-details.html">At Home</a>{" "} */}
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item">
                        <Link href="/exclusivepackages">
                          Exclusive Packages
                        </Link>
                        {/* {" "}
                        <a href="faq.html">Exclusive Packages</a>{" "} */}
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <a href="#">Libarary</a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        {" "}
                        <Link href="/library/satsang-sahitya">
                          Satsang Sahitya
                        </Link>{" "}
                      </li>
                      <li className="menu-item">
                        <Link href="/library/aarti">Aarti</Link>
                        {/* {" "}
                        <a href="aarti.html">Aarti</a>{" "} */}
                      </li>
                      <li className="menu-item">
                        <Link href="/library/chalisa">Chalisa</Link>
                        {/* {" "}
                        <a href="">Chalisa</a>{" "} */}
                      </li>
                      <li className="menu-item">
                        <Link href="/library/mantra">Mantra</Link>
                        {/* {" "}
                        <a href="">Mantra</a>{" "} */}
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <a href="#">Services</a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <Link href="/service/astrology">Astrology</Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/service/numerology">Numerology</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <Link href="/Blog">Blog</Link>
                  </li>
                  <li className="menu-item">
                    <Link href="#">Contact</Link>
                  </li>
                </ul>
                {/* Controls */}
                <div className="sigma_header-controls style-2">
                  <ul className="sigma_header-controls-inner">
                    <li>{getLoginMenu()}</li>

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
      </>
    </div>
  );
}
