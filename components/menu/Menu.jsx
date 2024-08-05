import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Cookies from "js-cookie";
import {
  fetchLibraryCategories,
} from "../../features/librarySlice";
import {fetchGeneralConfiguration} from "../../features/generalConfigurationSlice";

export default function Menu() {
  const dispatch = useDispatch();
  const userType = Cookies.get("user_type");
  const userid = Cookies.get("id");  
  const libraryCategory = useSelector((state) => state?.library?.categories);
  const [href, setHref] = useState("/login/Login");
  const [menuText, setMenuText] = useState("Login");
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isExpand, setIsExpand] = useState("");
  const [isExpandSubMenu, setIsExpandSubMenu] = useState("");

  useEffect(() => {
    dispatch(fetchLibraryCategories());
    dispatch(fetchGeneralConfiguration());
  }, []);

  useEffect(() => {
    if (userType === "Priest" && userid !== "") {
      setHref("/user/Profile");
      setMenuText("Dashboard");
    }
  }, []);

 
  const handleExpandSub = (type, menu) => {
    if (type === "mobile") {
      setIsExpand(menu);
      setIsExpandSubMenu(menu);
    }
  };

  const handleExpandSubMenu = (type, menu) => {
    if (type === "mobile") {
      setIsExpandSubMenu(menu);
    }
  };

  const menuItem = (menuType) => {
    return (
      <>
        <li className="menu-item">
          <Link href="/">Home</Link>
        </li>

        {/* update about code */}
        <li className="menu-item menu-item-has-children">
          <a href="#" onClick={() => handleExpandSub(menuType, "about")}>
            About US
          </a>
          <ul
            className={
              isExpand === "about" ? "display-block sub-menu" : "sub-menu"
            }
          >
            <li className="menu-item">
              <Link href="/about">About</Link>
            </li>
            <li className="menu-item">
              <Link href="/team">Our Team</Link>
            </li>
            <li className="menu-item">
              <Link href="/faq">Faq</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item menu-item-has-children">
          <a href="#" onClick={() => handleExpandSub(menuType, "Poojas")}>
          Pujas
          </a>
          <ul
            className={
              isExpand === "Poojas" ? "display-block sub-menu" : "sub-menu"
            }
          >
            <li className="menu-item">
              <Link href="/puja/online-puja">Online Puja</Link>
            </li>
            <li className="menu-item menu-item-has-children">
              <a
                href="#"
                onClick={() => handleExpandSubMenu(menuType, "offline-pooja")}
              >
                Offline Puja
              </a>
              <ul
                className={
                  isExpandSubMenu === "offline-pooja"
                    ? "display-block sub-menu"
                    : "sub-menu"
                }
              >
                <li className="menu-item">
                  <Link href="/puja/puja-at-temples">At Temple</Link>
                </li>
                <li className="menu-item">
                  <Link href="/puja/puja-at-home">At Home</Link>
                </li>
              </ul>
            </li>
            {/* <li className="menu-item">
              <Link href="/exclusivepackages">Exclusive Packages</Link>
            </li> */}
          </ul>
        </li>
        <li className="menu-item menu-item-has-children">
          <a href="#" onClick={() => handleExpandSub(menuType, "Libarary")}>
            Libarary
          </a>
          <ul
            className={
              isExpand === "Libarary" ? "display-block sub-menu" : "sub-menu"
            }
          >
            {libraryCategory?.length && libraryCategory?.map((category) =>{
              return (  <li className="menu-item" key={category?.data_id}>
                <Link href={`/libraries/${category?.slug}`}>
                 {category?.title}
                </Link>
              </li>)
            })}         
            
          </ul>
        </li>
        <li className="menu-item menu-item-has-children">
          <a href="#" onClick={() => handleExpandSub(menuType, "Services")}>
            Services
          </a>
          <ul
            className={
              isExpand === "Services" ? "display-block sub-menu" : "sub-menu"
            }
          >
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
          <Link href="/contact-us">Contact</Link>
        </li>
        {menuType === "mobile" ? (
          <li>
            {" "}
            <Link className="sigma_btn-custom" href={href}>
              {menuText}
            </Link>
          </li>
        ) : null}
      </>
    );
  };

  return (
    <div>
      <>
        {/* partial:partia/__sidenav.html */}
        <aside className="sigma_aside sigma_aside-right sigma_aside-right-panel sigma_aside-bg">
          <div className="sidebar">
            <div className="sidebar-widget widget-logo">
              <img src="https://vaidikanushthanam.com/assets/img/logo.png" className="mb-30" alt="img" />
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
        <aside
          className={`sigma_aside sigma_aside-left ${openMobileMenu ? "open" : ""}`}
        >
          <Link className="navbar-brand" href="/">
            {" "}
            <img src="https://vaidikanushthanam.com/assets/img/logo.png" alt="logo" />{" "}
          </Link>
          {/* Menu */}
          <ul>{menuItem("mobile")}</ul>
        </aside>
        <div
          className={`sigma_aside-overlay aside-trigger-left ${openMobileMenu ? "open" : ""}`}
          onClick={() => setOpenMobileMenu(false)}
        />
        {/* partial */}
        {/* partial:partia/__header.html */}
        <header className="sigma_header header-3 can-sticky header-absolute">
          {/* Middle Header Start */}
          <div className="sigma_header-middle">
            <div className="container-fluid">
              <nav className="navbar">
                {/* Logo Start */}
                <div className="sigma_logo-wrapper">
                  <a className="navbar-brand" href="/">
                    <img src="https://vaidikanushthanam.com/assets/img/logo.png" alt="logo" />
                  </a>
                </div>
                {/* Logo End */}
                {/* Menu */}
                <ul className="navbar-nav">{menuItem("desktop")}</ul>
                {/* Controls */}
                <div className="sigma_header-controls style-2">
                  <ul className="sigma_header-controls-inner">
                    <li>
                      {" "}
                      <Link className="sigma_btn-custom" href={href}>
                        {menuText}
                      </Link>
                    </li>

                    {/* <li className="aside-toggler style-2 aside-trigger-right desktop-toggler">
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </li> */}
                    {/* Mobile Toggler */}
                    <li
                      className="aside-toggler style-2 aside-trigger-left"
                      onClick={() => setOpenMobileMenu(true)}
                    >
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
